export const validateSaudiNumber = (value: string) => {
  if (!value) return false;

  // Check format first
  const isValidFormat = /^(05|\+966|966)\d+$/.test(value);
  if (!isValidFormat) return false;

  // Check length based on format
  if (value.startsWith('05')) {
    return value.length === 10; // 05XXXXXXXX (10 digits)
  }
  if (value.startsWith('+966')) {
    return value.length === 13; // +966XXXXXXXXX (13 chars)
  }
  if (value.startsWith('966')) {
    return value.length === 12; // 966XXXXXXXXX (12 digits)
  }

  return false;
};

export const getPhoneError = (value: string) => {
  if (!value) return undefined;
  if (!validateSaudiNumber(value)) {
    if (!/^(05|\+966|966)\d+$/.test(value)) {
      return {
        text: 'inputs.defaultInputValidations.string.validSaudiPhoneNumber',
      };
    }
    return {
      text: 'inputs.defaultInputValidations.string.validSaudiPhoneNumber',
    };
  }
  return undefined;
};
