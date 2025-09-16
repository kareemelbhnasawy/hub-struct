import { FormikConfig, FormikProps, FormikValues } from 'formik';
import { FlatListProps } from 'react-native';
import FormFieldType from './form-field.props';
import { SpacingValue } from '@/components/atoms/spacer/interface';
import BaseButtonProps from '@/components/molecules/base-button/interface';
import { RNStyle } from '@/types/themes';
import { ReactNode } from 'react';

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
  submitButtonProps?: Omit<BaseButtonProps, 'testId'>;
  containerStyle?: RNStyle;
  space?: SpacingValue;
  ListFormBottom?: (props: FormikProps<FormikValues>) => React.ReactNode;
  selectorProps?: FlatListPropsWithoutData;
  showErrorsInForm?: boolean;
  includeReview?: boolean;
  steps?: Array<'Form' | 'Review' | ((values: unknown) => ReactNode)>;
}

export default FormType;
