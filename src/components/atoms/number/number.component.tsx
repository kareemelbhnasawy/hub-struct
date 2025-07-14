import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import useStyles from '_styles/hooks/use-styles.hook';
import useAppLanguage from '_localization/hooks/use-app-language.hook';
import SkeletonUnit from '_components/atoms/skeleton-unit/skeleton-unit.component';
import { useCurrencies } from '_hooks/currencies';
import {NumberProps} from './number.props';
import rawStyles from './number.style';
import TypographySizes from '../constants/typography-sizes.constant';
import {
  getFractionSize,
  getFractionType,
  getMainSize,
  getMainType,
  generateCurrencyNumbers,
} from './utils';

function Number({
  containerStyle,
  testId,
  textStyle,
  size = TypographySizes.M,
  number = 0,
  currency = 'common.sar',
  fractionDigitsCount = 2,
  includeCurrency = true,
  isLoading,
  skeletonProps,
}: NumberProps) {
  const {isAR} = useAppLanguage();
  const styles = useStyles(rawStyles(isAR()));
  const [integer, setInteger] = useState('');
  const [fraction, setFraction] = useState('');
  const MainWrapper = getMainType(size);
  const FractionWrapper = getFractionType(size);

  const {getCurrencyName} = useCurrencies();

  useEffect(() => {
    const {numFraction, numInteger} = generateCurrencyNumbers(
      number,
      fractionDigitsCount,
    );
    setFraction(numFraction);
    setInteger(numInteger);
  }, [number]);

  return !isLoading ? (
    <View style={[styles.defaultContainer, containerStyle]}>
      {isAR() && includeCurrency ? (
        <MainWrapper
          textStyle={[textStyle, styles.ml8]}
          size={getMainSize(size)}
          testId={`${testId}-currency`}
          stringProps={{localeKey: getCurrencyName(currency) || currency}}
        />
      ) : null}
      <MainWrapper
        textStyle={textStyle}
        size={getMainSize(size)}
        testId={`${testId}-integer`}
        stringProps={{plainText: integer}}
      />
      {fractionDigitsCount > 0 ? (
        <FractionWrapper
          textStyle={textStyle}
          size={getFractionSize(size)}
          testId={`${testId}-fraction`}
          stringProps={{plainText: `.${fraction}`}}
        />
      ) : null}
      {!isAR() && includeCurrency ? (
        <MainWrapper
          textStyle={[textStyle, styles.ml8]}
          size={getMainSize(size)}
          testId={`${testId}-currency`}
          stringProps={{localeKey: currency}}
        />
      ) : null}
    </View>
  ) : (
    <SkeletonUnit
      testId={`${testId}-number-skeleton-loading`}
      {...skeletonProps}
      unitStyle={[styles.skeletonStyle, skeletonProps?.unitStyle]}
    />
  );
}

export default Number;
