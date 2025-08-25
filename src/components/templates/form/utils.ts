import { Yup } from '@/utilities';
import FormFieldType from './types/form-field.props';

export const generateValidationSchema = (fields: FormFieldType[]) => {
  const schema = {};
  fields.forEach((field) => {
    if (field.validation?.custom) {
      schema[field.name] = field.validation?.custom;
    } else {
      let validation;
      if (field?.validation?.type === 'number') {
        validation = Yup.number();
        if (field.validation?.min !== undefined) {
          validation = validation.min(field.validation?.min);
        }
        if (field.validation?.max !== undefined) {
          validation = validation.max(field.validation?.max);
        }
      } else {
        validation = Yup.string();
        if (field.validation?.email !== undefined) {
          validation = validation.email();
        }
      }
      if (field.validation?.required !== undefined) {
        validation = validation.required();
      }
      if (field.validation?.digitsOnly !== undefined) {
        validation = validation.digitsOnly();
      }
      if (field.validation?.min !== undefined) {
        validation = validation.min(field.validation?.min);
      }
      if (field.validation?.max !== undefined) {
        validation = validation.max(field.validation?.max);
      }
      schema[field.name] = validation;
    }
  });
  return Yup.object(schema);
};
