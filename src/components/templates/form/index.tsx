import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';
import FormType from './types/form.props';
import FormSelector from './form-selector.component';
import { generateValidationSchema } from './utils';
import { BaseButton, List } from '@/components/molecules';
import { Spacer } from '@/components/atoms';
import FormInfoCard from './form-info-card.component';

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
      includeReview,
      steps,
      onSubmit,
      ...formikProps
    }: FormType,
    ref: React.Ref<FormikProps<FormikValues>>,
  ) => {
    const [savedFormValues, setSavedFormValues] = useState<FormikValues>();
    const [savedFormHelpers, setSavedFormHelpers] =
      useState<FormikHelpers<FormikValues>>();
    const [formIndex, setFormIndex] = useState(0);
    const finalSteps = useMemo(
      () => (steps || includeReview ? ['Form', 'Review'] : ['Form']),
      [steps, includeReview],
    );
    const validationSchema = useMemo(
      () => generateValidationSchema(fields),
      [fields],
    );

    const handleSubmitForm = useCallback(
      (values?: FormikValues, formikHelpers?: FormikHelpers<FormikValues>) => {
        if (values) {
          setSavedFormValues(values);
        }
        if (formikHelpers) {
          setSavedFormHelpers(formikHelpers);
        }

        if (formIndex + 1 === finalSteps.length) {
          onSubmit(
            values || savedFormValues,
            formikHelpers || savedFormHelpers,
          );
        } else {
          setFormIndex(formIndex + 1);
        }
      },
      [
        finalSteps.length,
        formIndex,
        onSubmit,
        savedFormHelpers,
        savedFormValues,
      ],
    );

    const renderedForm = useMemo(
      () => (
        <Formik
          innerRef={ref}
          validateOnBlur={validateOnBlur}
          validateOnMount={validateOnMount}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitForm}
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
              <Spacer space={20} />
              <BaseButton
                onPress={() => props?.handleSubmit()}
                testId={`${testId}-submit-btn`}
                textProps={{ text: 'common.defaultSubmit' }}
                size="lg"
                {...submitButtonProps}
                disabled={submitButtonProps?.disabled || !props.isValid}
              />
              {ListFormBottom?.(props)}
            </>
          )}
        </Formik>
      ),
      [
        ListFormBottom,
        fields,
        formikProps,
        initialValues,
        handleSubmitForm,
        ref,
        selectorProps,
        showErrorsInForm,
        space,
        submitButtonProps,
        testId,
        validateOnBlur,
        validateOnMount,
        validationSchema,
      ],
    );

    const renderedReview = useMemo(
      () => (
        <List
          scrollEnabled={false}
          testId={`${testId}-review`}
          renderItem={({ item }) => (
            <FormInfoCard
              labelProps={item?.labelProps}
              value={savedFormValues?.[item?.name]}
            />
          )}
          data={fields}
          ListFooterComponent={() => (
            <BaseButton
              onPress={() => handleSubmitForm()}
              testId={`${testId}-submit-btn`}
              textProps={{ text: 'common.defaultSubmit' }}
              size="lg"
              {...submitButtonProps}
            />
          )}
        />
      ),
      [fields, handleSubmitForm, savedFormValues, submitButtonProps, testId],
    );

    const renderFormSteps = () => {
      if (finalSteps[formIndex] === 'Form') {
        return renderedForm;
      }
      if (finalSteps[formIndex] === 'Review') {
        return renderedReview;
      }
    };

    return <View style={containerStyle}>{renderFormSteps()}</View>;
  },
);
export default Form;
