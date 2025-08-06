import React from 'react';
import { SvgXml } from 'react-native-svg';
import IconProps from './icon.props';
import { getIconFnByName } from './icon-switcher.util';
import { scale } from 'react-native-size-matters';

const Icon = ({
  name,
  primaryColor,
  secondaryColor,
  stroke,
  size = 24,
  outline = false,
  ...props
}: IconProps) => {
  const getXml = () => {
    const sourceFn = getIconFnByName(name);
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

export default Icon;
