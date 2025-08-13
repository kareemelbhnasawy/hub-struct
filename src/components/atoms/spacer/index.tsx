import { View } from 'react-native';
import SpacerProps, { SpacingValue } from './interface';
import { styles } from './style';
import { useThemeStore } from '@/store/theme';
import { scale, verticalScale } from '@/store/theme/utils';

const Spacer = ({
  space = 'md',
  isDivider = false,
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
        style={
          typeof spaceValue === 'number'
            ? { height: verticalScale(spaceValue), width: scale(spaceValue) }
            : themedStyle[spaceValue]
        }
      />
    );
  };

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
