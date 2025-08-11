import { View } from 'react-native';
import SpacerProps, { SpacingValue } from './interface';
import { styles } from './style';
import { verticalScale, scale } from '@/theme';

const Spacer = ({
  space = 'md',
  isDivider = false,
  spaceTop,
  spaceBottom,
}: SpacerProps) => {
  spaceTop = spaceTop || space;
  spaceBottom = spaceBottom || space;

  const generateSpacerView = (spaceValue: SpacingValue) => {
    return (
      <View
        style={
          typeof spaceValue === 'number'
            ? { height: verticalScale(spaceValue), width: scale(spaceValue) }
            : styles[spaceValue]
        }
      />
    );
  };

  return isDivider ? (
    <>
      {generateSpacerView(spaceTop)}
      <View style={styles.divider} />
      {generateSpacerView(spaceBottom)}
    </>
  ) : (
    generateSpacerView(space)
  );
};

export default Spacer;
