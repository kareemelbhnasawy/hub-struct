import { FormikProps, FormikValues } from 'formik';
import { FlatListProps } from 'react-native';
import FormFieldType from './form-field.props';
import { SpacingValue } from '@/components/atoms/spacer/interface';

type FlatListPropsWithoutData = Omit<
  FlatListProps<FormFieldType>,
  'data' | 'renderItem'
>;

interface SelectorType extends FlatListPropsWithoutData {
  testId: string;
  fields: FormFieldType[];
  formikProps: FormikProps<FormikValues>;
  showInputErrorMsg: boolean;
  space?: SpacingValue;
}

export default SelectorType;
