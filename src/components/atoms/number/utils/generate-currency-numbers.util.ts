import {formatString} from './format-string.util';

const generateCurrencyNumbers = (number: number, fractionDigitsCount: number) => {
  const integerTemp = formatString(number?.toString()?.split('.')?.[0]);
  let fractionTemp = (parseFloat(number?.toString()) - parseFloat(integerTemp))
    .toFixed(fractionDigitsCount)
    .toString()
    ?.split('.')?.[1];

  if (fractionTemp?.length < fractionDigitsCount) {
    fractionTemp = fractionTemp.padEnd(
      fractionDigitsCount - fractionTemp.length + 1,
      '0',
    );
  }

  /**
   * Removed Translation as per business decision
   */
  return {numFraction: fractionTemp, numInteger: integerTemp};
};

export {generateCurrencyNumbers};
