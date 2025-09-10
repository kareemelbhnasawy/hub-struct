import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required(params) {
      return {
        text: 'inputs.defaultInputValidations.mixed.required',
        textProps: params,
      };
    },
    oneOf(params) {
      return {
        text: 'inputs.defaultInputValidations.mixed.oneOf',
        textProps: params,
      };
    },
    default(params) {
      return {
        text: 'inputs.defaultInputValidations.mixed.default',
        textProps: params,
      };
    },
    defined(params) {
      return {
        text: 'inputs.defaultInputValidations.mixed.default',
        textProps: params,
      };
    },
    notNull(params) {
      return {
        text: 'inputs.defaultInputValidations.mixed.notNull',
        textProps: params,
      };
    },
    notOneOf(params) {
      return {
        text: 'inputs.defaultInputValidations.mixed.notOneOf',
        textProps: params,
      };
    },
    notType(params) {
      return {
        text: 'inputs.defaultInputValidations.mixed.notType',
        textProps: params,
      };
    },
  },
  string: {
    email(params) {
      return {
        text: 'inputs.defaultInputValidations.string.email',
        textProps: params,
      };
    },
    trim(params) {
      return {
        text: 'inputs.defaultInputValidations.string.trim',
        textProps: params,
      };
    },
    uppercase(params) {
      return {
        text: 'inputs.defaultInputValidations.string.uppercase',
        textProps: params,
      };
    },
    url(params) {
      return {
        text: 'inputs.defaultInputValidations.string.url',
        textProps: params,
      };
    },
    uuid(params) {
      return {
        text: 'inputs.defaultInputValidations.string.uuid',
        textProps: params,
      };
    },
    datetime(params) {
      return {
        text: 'inputs.defaultInputValidations.string.datetime',
        textProps: params,
      };
    },
    datetime_offset(params) {
      return {
        text: 'inputs.defaultInputValidations.string.datetime_offset',
        textProps: params,
      };
    },
    datetime_precision(params) {
      return {
        text: 'inputs.defaultInputValidations.string.datetime_precision',
        textProps: params,
      };
    },
    lowercase(params) {
      return {
        text: 'inputs.defaultInputValidations.string.lowercase',
        textProps: params,
      };
    },
    length(params) {
      return {
        text: 'inputs.defaultInputValidations.string.length',
        textProps: params,
      };
    },
    matches(params) {
      return {
        text: 'inputs.defaultInputValidations.string.matches',
        textProps: params,
      };
    },
    max(params) {
      return {
        text: 'inputs.defaultInputValidations.string.max',
        textProps: params,
      };
    },
    min(params) {
      return {
        text: 'inputs.defaultInputValidations.string.min',
        textProps: params,
      };
    },
  },
  number: {
    integer(params) {
      return {
        text: 'inputs.defaultInputValidations.number.integer',
        textProps: params,
      };
    },
    positive(params) {
      return {
        text: 'inputs.defaultInputValidations.number.positive',
        textProps: params,
      };
    },
    lessThan(params) {
      return {
        text: 'inputs.defaultInputValidations.number.lessThan',
        textProps: params,
      };
    },
    negative(params) {
      return {
        text: 'inputs.defaultInputValidations.number.negative',
        textProps: params,
      };
    },
    max(params) {
      return {
        text: 'inputs.defaultInputValidations.number.max',
        textProps: params,
      };
    },
    min(params) {
      return {
        text: 'inputs.defaultInputValidations.number.min',
        textProps: params,
      };
    },
    moreThan(params) {
      return {
        text: 'inputs.defaultInputValidations.number.moreThan',
        textProps: params,
      };
    },
  },
  boolean: {
    isValue(params) {
      return {
        text: 'inputs.defaultInputValidations.boolean.isValue',
        textProps: params,
      };
    },
  },
  date: {
    max(params) {
      return {
        text: 'inputs.defaultInputValidations.date.max',
        textProps: params,
      };
    },
    min(params) {
      return {
        text: 'inputs.defaultInputValidations.date.min',
        textProps: params,
      };
    },
  },
  array: {
    max(params) {
      return {
        text: 'inputs.defaultInputValidations.array.max',
        textProps: params,
      };
    },
    min(params) {
      return {
        text: 'inputs.defaultInputValidations.array.min',
        textProps: params,
      };
    },
  },
  object: {
    noUnknown(params) {
      return {
        text: 'inputs.defaultInputValidations.array.min',
        textProps: params,
      };
    },
  },
});

// TODO: addMethod to Yup when needed
Yup.addMethod(
  Yup.object,
  'rangeMinMax',
  function (text?: string, textProps?: { [x: string]: string }) {
    return this.test({
      name: 'test-from-to',
      message: text
        ? { text, textProps }
        : {
            text: 'inputs.customInputValidations.fromToAmount',
          },
      test(value) {
        if (
          value?.from &&
          value?.to &&
          parseFloat(value.from) > parseFloat(value.to)
        ) {
          return false;
        }
        return true;
      },
    });
  },
);

Yup.addMethod(
  Yup.object,
  'rangeMinMaxSpread',
  function (
    fromKey: string,
    toKey: string,
    text?: string,
    textProps?: { [x: string]: string },
  ) {
    return this.test({
      name: 'test-from-to-spread',
      message: {
        text: 'inputs.customInputValidations.fromToAmount',
      },
      test() {
        const fromAmount = parseFloat(this.resolve(Yup.ref(fromKey)));
        const toAmount = parseFloat(this.resolve(Yup.ref(toKey)));
        const { createError, path } = this;
        if (fromAmount && toAmount && fromAmount > toAmount) {
          return createError({
            path,
            message: text
              ? { text, textProps }
              : {
                  text: 'inputs.customInputValidations.fromToAmount',
                },
          });
        }
        return true;
      },
    });
  },
);

Yup.addMethod(
  Yup.string,
  'startsWith',
  function (str: string[], text?: string, textProps?: { [x: string]: string }) {
    return this.test({
      name: 'test-starts-with',
      message: {
        text: 'inputs.customInputValidations.startsWith',
        textProps: { str: str.toString() },
      },
      test(value) {
        const { createError, path } = this;
        if (
          value &&
          value?.length > 0 &&
          !str.some((prefix) => value.startsWith(prefix))
        ) {
          return createError({
            path,
            message: text
              ? { text, textProps }
              : {
                  text: 'inputs.customInputValidations.startsWith',
                  textProps: { str: str.toString() },
                },
          });
        }
        return true;
      },
    });
  },
);

Yup.addMethod<Yup.StringSchema>(
  Yup.string,
  'digitsOnly',
  function (text?: string, textProps?: { [x: string]: string }) {
    return this.test({
      name: 'test-digits-only',
      message: {
        text: 'inputs.customInputValidations.digitsOnly',
      },
      test(value) {
        const { createError, path } = this;
        if (value && !value?.match(/^[0-9]+$/)) {
          return createError({
            path,
            message: text
              ? { text, textProps }
              : {
                  text: 'inputs.customInputValidations.digitsOnly',
                },
          });
        }
        return true;
      },
    });
  },
);

Yup.addMethod(
  Yup.string,
  'parseMoreThan',
  function (more: number, text?: string, textProps?: { [x: string]: string }) {
    return this.test({
      name: 'test-parse-more',
      message: {
        text: 'inputs.defaultInputValidations.number.moreThan',
        textProps: { more },
      },
      test(value) {
        const { createError, path } = this;
        if (value && parseFloat(value) > more) {
          return true;
        }
        return createError({
          path,
          message: text
            ? { text, textProps }
            : {
                text: 'inputs.defaultInputValidations.number.moreThan',
                textProps: { more },
              },
        });
      },
    });
  },
);

Yup.addMethod(
  Yup.string,
  'parseLessThan',
  function (less: number, text?: string, textProps?: { [x: string]: string }) {
    return this.test({
      name: 'test-parse-less',
      message: {
        text: 'inputs.defaultInputValidations.number.lessThan',
        textProps: { less },
      },
      test(value) {
        const { createError, path } = this;
        if (value && parseFloat(value) < less) {
          return true;
        }
        return createError({
          path,
          message: text
            ? { text, textProps }
            : {
                text: 'inputs.defaultInputValidations.number.lessThan',
                textProps: { less },
              },
        });
      },
    });
  },
);

Yup.addMethod(
  Yup.string,
  'validHRSDMail',
  function (text?: string, textProps?: { [x: string]: string }) {
    return this.test({
      name: 'test-valid-mail',
      message: {
        text: 'inputs.defaultInputValidations.string.validHRSDMail',
      },
      test(value) {
        const { createError, path } = this;
        const regex = /^[a-zA-Z0-9._%+-]+@hrsd\.gov\.sa$/;
        if (value && regex.test(value)) {
          return true;
        }
        return createError({
          path,
          message: text
            ? { text, textProps }
            : {
                text: 'inputs.defaultInputValidations.string.validHRSDMail',
              },
        });
      },
    });
  },
);

Yup.addMethod(
  Yup.string,
  'validSaudiPhoneNumber',
  function (text?: string, textProps?: { [x: string]: string }) {
    return this.test({
      name: 'test-valid-saudi-phonenumber',
      message: {
        text: 'inputs.defaultInputValidations.string.validSaudiPhoneNumber',
      },
      test(value) {
        const { createError, path } = this;

        if (!value) return true; // Skip empty values, let required() handle this

        // Remove any whitespace
        const cleanValue = value.replace(/\s/g, '');

        // Define valid formats and their expected lengths
        const formats = {
          '05': { length: 10, regex: /^05[0-9]{8}$/ },
          // '966': { length: 12, regex: /^966[0-9]{9}$/ },
          // '+966': { length: 13, regex: /^\+966[0-9]{9}$/ },
        };

        // Check if it matches any valid format
        const isValid = Object.values(formats).some(
          (format) =>
            format.regex.test(cleanValue) &&
            cleanValue.length === format.length,
        );

        if (isValid) return true;

        return createError({
          path,
          message: text
            ? { text, textProps }
            : {
                text: 'inputs.defaultInputValidations.string.validSaudiPhoneNumber',
              },
        });
      },
    });
  },
);

declare module 'yup' {
  interface StringSchema {
    digitsOnly(text?: string, textProps?: { [x: string]: string }): this;
    validHRSDMail(text?: string, textProps?: { [x: string]: string }): this;
    validSaudiPhoneNumber(
      text?: string,
      textProps?: { [x: string]: string },
    ): this;
  }

  interface NumberSchema {
    digitsOnly(text?: string, textProps?: { [x: string]: string }): this;
  }
}

export default Yup;
