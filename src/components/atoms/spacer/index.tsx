import { View } from 'react-native';
import SpacerProps, { SpacingValue } from './interface';
import styles from './styles';
import { useThemeStore } from '@/store/theme';
import { scale, verticalScale } from '@/store/theme/utils';
import Paragraph from '../typography/paragraph';

const Spacer = ({
  testId,
  space = 'md',
  isDivider = false,
  isOrDivider = false,
  spaceTop,
  spaceBottom,
}: SpacerProps) => {
  spaceTop = spaceTop || space;
  spaceBottom = spaceBottom || space;

  const { getThemedStyles } = useThemeStore();
  const themedStyle = getThemedStyles(styles);

  const generateSpacerView = (spaceValue: SpacingValue) => {
    return (
      <View
        testID={testId ? `${testId}-spacer` : undefined}
        style={
          typeof spaceValue === 'number'
            ? { height: verticalScale(spaceValue), width: scale(spaceValue) }
            : themedStyle[spaceValue]
        }
      />
    );
  };

  if (isDivider) {
    return (
      <>
        {generateSpacerView(spaceTop)}
        <View style={themedStyle.divider} />
        {generateSpacerView(spaceBottom)}
      </>
    );
  } else if (isOrDivider) {
    return (
      <>
        {generateSpacerView(spaceTop)}
        <View style={themedStyle.orDividerContainer}>
          <View style={themedStyle.orDivider} />
          <Paragraph testId="spacer-or-divider" text="Or" />
          <View style={themedStyle.orDivider} />
        </View>
        {generateSpacerView(spaceBottom)}
      </>
    );
  } else {
    generateSpacerView(space);
  }

  return isDivider ? (
    <>
      {generateSpacerView(spaceTop)}
      <View style={themedStyle.divider} />
      {generateSpacerView(spaceBottom)}
    </>
  ) : (
    generateSpacerView(space)
  );
};

export default Spacer;
