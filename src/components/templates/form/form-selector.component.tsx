import { FlatList, View } from 'react-native';

import { FormikProps, FormikValues } from 'formik';
import FormFieldType from './types/form-field.props';
import FormInputTypes from './constants';
import SelectorType from './types/selector.props';
import TextInput from '@/components/molecules/text-input';
import PasswordInput from '@/components/organisms/password-input';
import DateInput from '@/components/organisms/date-input';
import SelectInput from '@/components/organisms/select-input';
import { Paragraph, Spacer } from '@/components/atoms';

const select = (
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
    // errorProps: handleErrorMessage(field, formikProps),
  };
  switch (field.type) {
    case FormInputTypes.TextInput:
      return <TextInput {...fieldProps} />;
    case FormInputTypes.PasswordInput:
      return <PasswordInput {...fieldProps} />;
    case FormInputTypes.DateInput:
      return <DateInput {...fieldProps} />;
    case FormInputTypes.SelectInput:
      return <SelectInput {...fieldProps} />;
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
          {select(field, formikProps, showInputErrorMsg)}
          <Spacer testId={`${field.testId}-spacer`} space={space} />
        </View>
      )}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  );
};

export default FormSelector;
