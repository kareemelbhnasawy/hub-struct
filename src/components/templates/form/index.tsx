import React, { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import { Formik, FormikProps, FormikValues } from 'formik';
import FormType from './types/form.props';
import FormSelector from './form-selector.component';
import { generateValidationSchema } from './utils';
import { BaseButton } from '@/components/molecules';
import { Spacer } from '@/components/atoms';

// eslint-disable-next-line react/display-name
const Form = forwardRef(
  (
    {
      fields,
      testId,
      containerStyle,
      submitButtonProps,
      validateOnMount = true,
      validateOnBlur = false,
      selectorProps,
      ListFormBottom,
      space,
      initialValues = {},
      showErrorsInForm,
      ...formikProps
    }: FormType,
    ref: React.Ref<FormikProps<FormikValues>>,
  ) => {
    const validationSchema = useMemo(
      () => generateValidationSchema(fields),
      [fields],
    );

    return (
      <View style={containerStyle}>
        <Formik
          innerRef={ref}
          validateOnBlur={validateOnBlur}
          validateOnMount={validateOnMount}
          initialValues={initialValues}
          validationSchema={validationSchema}
          {...formikProps}>
          {(props: FormikProps<FormikValues>) => (
            <>
              {fields.filter((x) => !!x) ? (
                <FormSelector
                  testId={`${testId}-form-selector`}
                  fields={fields}
                  formikProps={props}
                  showInputErrorMsg={!showErrorsInForm}
                  space={space}
                  {...selectorProps}
                />
              ) : null}
              <Spacer space={20}/>
              <BaseButton
                onPress={() => props?.handleSubmit()}
                testId={`${testId}-submit-btn`}
                textProps={{ text: 'تسجيل الدخول' }}
                size="lg"
                {...submitButtonProps}
                disabled={submitButtonProps?.disabled || !props.isValid}
              />
              {ListFormBottom?.(props)}
            </>
          )}
        </Formik>
      </View>
    );
  },
);
export default Form;
