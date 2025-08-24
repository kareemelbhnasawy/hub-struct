import React, { forwardRef } from 'react';
import { Button, View } from 'react-native';
import { Formik, FormikProps, FormikValues } from 'formik';
import FormType from './types/form.props';
import FormSelector from './form-selector.component';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { generateValidationSchema } from './utils';

// eslint-disable-next-line react/display-name
const Form = forwardRef(
  (
    {
      fields,
      testId,
      style,
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
    const { getThemedStyles } = useThemeStore();
    const themedStyles = getThemedStyles(styles);
    return (
      <View style={[themedStyles.container, style]}>
        <Formik
          innerRef={ref}
          validateOnBlur={validateOnBlur}
          validateOnMount={validateOnMount}
          initialValues={initialValues}
          validationSchema={generateValidationSchema(fields)}
          {...formikProps}>
          {(props: FormikProps<FormikValues>) => (
            <>
              <View style={themedStyles.flexOne}>
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
              </View>
              <Button
                onPress={() => props?.handleSubmit()}
                testID={`${testId}-submit-btn`}
                title="Submit"
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
