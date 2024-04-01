import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import PostRepository from '../../repositories/post.repository'
import schema from './schema';
import DataTransform from '../../utils/data-transform' ;
import { MessageApiResponse } from 'src/constants/messages';
import { Logger } from '@aws-lambda-powertools/logger';

// Logger parameters fetched from the environment variables (see template.yaml tab)
const logger = new Logger();
const dataTransform = new DataTransform();

const listPosts: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async () => {
  
  try{
    const postRepository = new PostRepository();
    const posts: any[] = await postRepository.getAllPost();

    posts.map(x=>{
      x.createdDate= new Date(x.createdAt);
      x = dataTransform.translateModelAttributes(x);
      return x;
    })


    return {
      statusCode: 200,
      body: JSON.stringify({
          code: 0,
          message: MessageApiResponse.LIST_OF_POSTS,
          data: posts
      })
    };
  }
  catch(err){
    logger.error(err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
          code: 500,
          message: MessageApiResponse.INTERNAL_SERVER_ERROR,
          data: null
      })
    };
  }
  
};

export const main = middyfy(listPosts);
