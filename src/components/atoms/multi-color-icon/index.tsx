import React from 'react';
import { SvgXml } from 'react-native-svg';
import MultiColorIconProps from './interface';
import { getMultiColorIconFnByName } from './icon-switcher.util';
import { scale } from 'react-native-size-matters';

const MultiColorIcon = ({
  name,
  primaryColor,
  secondaryColor,
  stroke,
  size = 24,
  outline = false,
  ...props
}: MultiColorIconProps) => {
  const getXml = () => {
    const sourceFn = getMultiColorIconFnByName(name);
    if (outline) {
      return sourceFn?.('#00000000', '#00000000', primaryColor) || '';
    }
    const strokeColor = stroke || '#00000000';
    if (secondaryColor) {
      return sourceFn?.(primaryColor, secondaryColor, strokeColor) || '';
    }
    return sourceFn?.(primaryColor, primaryColor, strokeColor) || '';
  };

  const xml = getXml();
  return (
    <SvgXml xml={xml} width={scale(size)} height={scale(size)} {...props} />
  );
};

export default MultiColorIcon;
