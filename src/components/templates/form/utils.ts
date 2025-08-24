import { Yup } from '@/utilities';
import FormFieldType from './types/form-field.props';

export const generateValidationSchema = (fields: FormFieldType[]) => {
  const schema = {};
  fields.forEach((field) => {
    if (field.validation?.custom) {
      schema[field.name] = field.validation?.custom;
    } else {
      let validation =
        field?.validation?.type === 'number' ? Yup.number() : Yup.string();
      if (field.validation?.required) {
        validation = validation.required();
      }
      if (field.validation?.digitsOnly) {
        validation = validation.digitsOnly();
      }
      if (field.validation?.min) {
        validation = validation.min(field.validation?.min);
      }
      if (field.validation?.max) {
        validation = validation.min(field.validation?.max);
      }
      schema[field.name] = validation;
    }
  });
  return Yup.object(schema);
};
