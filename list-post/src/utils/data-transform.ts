import { AttributeTranslations } from "../constants/translates"

export default class DataTransform {
    translateModelAttributes(model) {
        const translatedModel = {}
        for (const key in model) {
            const translatedKey = AttributeTranslations[key] || key;
            translatedModel[translatedKey] = model[key];
        }

        return translatedModel;
    }
}