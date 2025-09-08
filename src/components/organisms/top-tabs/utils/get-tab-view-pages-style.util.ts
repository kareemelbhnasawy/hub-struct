import {StyleProp, ViewStyle} from 'react-native';

/**
 * This function flips the pages' container in tabs around its X axis
  * and then flips each page around their X axis re-aligning the pages correctly in case of RTL
 * @param isRTL boolean to see if app is Right To Left
 * @returns styles that flip the order of the pages
 */
const getTabViewPagesStyle = (
  isRTL: boolean,
): {
  pagerStyle: StyleProp<ViewStyle>;
  sceneContainerStyle: StyleProp<ViewStyle>;
} => ({
  pagerStyle: {transform: isRTL ? [{scaleX: -1}] : undefined},
  sceneContainerStyle: {transform: isRTL ? [{scaleX: -1}] : undefined},
});

export default getTabViewPagesStyle;
