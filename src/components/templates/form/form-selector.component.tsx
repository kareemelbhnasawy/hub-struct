import { FlatList, View } from 'react-native';

import { FormikProps, FormikValues } from 'formik';
import FormFieldType from './types/form-field.props';
import FormInputTypes from './constants';
import SelectorType from './types/selector.props';
import { Paragraph, Spacer } from '@/components/atoms';
import { TextInput } from '@/components/molecules';
import { DateInput, PasswordInput, SelectInput } from '@/components/organisms';

const handleErrorMessage = (
  field: FormFieldType,
  formikProps: FormikProps<FormikValues>,
) => {
  if (field.errorProps) {
    return field.errorProps;
  }
  if (formikProps.touched?.[field.name] && formikProps.errors?.[field.name]) {
    return formikProps.errors?.[field.name];
  }
  return null;
};

const select = (
  testId: string,
  field: FormFieldType,
  formikProps: FormikProps<FormikValues>,
  showInputErrorMsg: boolean,
) => {
  const fieldProps = {
    showErrorMessage: showInputErrorMsg,
    ...field,
    value: field.value || formikProps?.values?.[field.name],
    onChangeValue: (v: string) => {
      formikProps.setFieldValue(field.name, v);
      formikProps.setFieldTouched(field.name);
      field.onChangeValue?.(v);
    },
    errorProps: handleErrorMessage(field, formikProps),
  };
  switch (field.type) {
    case FormInputTypes.TextInput:
      return (
        <TextInput
          testId={`${testId}-${field.name}`}
          isRequired={field?.validation?.required}
          {...fieldProps}
        />
      );
    case FormInputTypes.PasswordInput:
      return (
        <PasswordInput
          testId={`${testId}-${field.name}`}
          isRequired={field?.validation?.required}
          {...fieldProps}
        />
      );
    case FormInputTypes.DateInput:
      return (
        <DateInput
          testId={`${testId}-${field.name}`}
          isRequired={field?.validation?.required}
          {...fieldProps}
        />
      );
    case FormInputTypes.SelectInput:
      return (
        <SelectInput
          testId={`${testId}-${field.name}`}
          isRequired={field?.validation?.required}
          {...fieldProps}
        />
      );
    default:
      return (
        <Paragraph testId="not-supported" text="Component not supported" />
      );
  }
};

const FormSelector = ({
  fields,
  testId,
  formikProps,
  showInputErrorMsg,
  space,
  ...props
}: SelectorType) => {
  return (
    <FlatList
      testID={testId}
      data={fields}
      scrollEnabled={false}
      renderItem={({ item: field, index }) => (
        <View key={index}>
          {select(testId, field, formikProps, showInputErrorMsg)}
          <Spacer testId={`${field.testId}-spacer`} space={space} />
        </View>
      )}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  );
};

export default FormSelector;
