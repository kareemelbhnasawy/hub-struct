import TextInputProps from '@/components/molecules/text-input/interface';
import FormInputTypes from '../constants';
import PasswordInputProps from '@/components/organisms/password-input/interface';
import SelectInputProps from '@/components/organisms/select-input/interface';
import DateInputProps from '@/components/organisms/date-input/interface';
import { Yup } from '@/utilities';

type yupValidation = {
  custom?: Yup.AnyObject;
  type?: 'string' | 'number';
  required?: boolean;
  digitsOnly?: boolean;
  min?: number;
  max?: number;
};

type commonInputType = {
  name: string;
  validation?: yupValidation;
};

type FormFieldType =
  | (commonInputType & { type: FormInputTypes.TextInput } & TextInputProps)
  | (commonInputType & {
      type: FormInputTypes.PasswordInput;
    } & PasswordInputProps)
  | (commonInputType & { type: FormInputTypes.SelectInput } & SelectInputProps)
  | (commonInputType & { type: FormInputTypes.DateInput } & DateInputProps);

export default FormFieldType;
