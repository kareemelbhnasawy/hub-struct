import TextInputProps from '@/components/molecules/text-input/interface';
import FormInputTypes from '../constants';
import PasswordInputProps from '@/components/organisms/password-input/interface';
import SelectInputProps from '@/components/organisms/select-input/interface';
import DateInputProps from '@/components/organisms/date-input/interface';

type FormFieldType =
  | ({ name: string; type: FormInputTypes.TextInput } & TextInputProps)
  | ({ name: string; type: FormInputTypes.PasswordInput } & PasswordInputProps)
  | ({ name: string; type: FormInputTypes.SelectInput } & SelectInputProps)
  | ({ name: string; type: FormInputTypes.DateInput } & DateInputProps);

export default FormFieldType;
