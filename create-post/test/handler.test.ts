import "mocha";
import sinon from "sinon";
import * as AWS from 'aws-sdk';
import { main } from "../src/functions/create-post/handler"

describe('API Handler', () => {
    describe('createItem()', () => {
      it('should create a new item in the DynamoDB table', async () => {
        const author = "Silvia Cammi"
        const title = 'Test Item';
        const review = "Test review";
        const observation = "1"
  
        const dynamoDB = new AWS.DynamoDB.DocumentClient();
        const stub = sinon.stub(dynamoDB, 'put');
  
        await main({ body: JSON.stringify({ author, title, review, observation }) },null,null);
  
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWith(stub, {
          TableName: "posts",
          Item: {
            id: sinon.match.string,
            author,
            title,
            review,
            observation,
          },
        });
  
        stub.restore();
      });
    });
  
  });
