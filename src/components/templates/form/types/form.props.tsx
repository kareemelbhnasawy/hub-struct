import { FormikConfig, FormikProps, FormikValues } from 'formik';
import { ButtonProps, FlatListProps, ViewStyle } from 'react-native';
import FormFieldType from './form-field.props';
import { SpacingValue } from '@/components/atoms/spacer/interface';

type FlatListPropsWithoutData = Omit<
  FlatListProps<FormFieldType>,
  'data' | 'renderItem'
>;

type FlatListPropsWithoutInitialValues = Omit<
  FormikConfig<FormikValues>,
  'initialValues'
>;

interface FormType extends FlatListPropsWithoutInitialValues {
  initialValues?: object;
  fields: FormFieldType[];
  testId: string;
  // TODO: change to our ButtonProps Comp
  submitButtonProps?: ButtonProps;
  style?: ViewStyle;
  space?: SpacingValue;
  ListFormBottom?: (props: FormikProps<FormikValues>) => React.ReactNode;
  selectorProps?: FlatListPropsWithoutData;
  removeSubmitBtn?: boolean;
  showErrorsInForm?: boolean;
}

export default FormType;
