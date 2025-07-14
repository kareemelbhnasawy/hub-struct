export const formatStringParagraph = (str: string, digitLimit: number) => {
  // Split the string into integer and decimal parts
  const [integerPart, decimalPart = ''] = str.split('.');

  // Add commas to the integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Limit the decimal part to the specified number of digits without rounding up
  let limitedDecimalPart = decimalPart.substring(0, digitLimit);

  // Pad the decimal part with zeros if necessary
  while (limitedDecimalPart.length < digitLimit) {
    limitedDecimalPart += '0';
  }

  // Return formatted integer and decimal parts separately so consumer can decide which format they need
  return {
    formattedInteger,
    decimalPart: limitedDecimalPart || '0',
  };
};
