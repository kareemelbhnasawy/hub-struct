import { View } from 'react-native';
import SpacerProps, { SpacingValue } from './interface';
import { styles } from './style';
import { scale, verticalScale } from 'react-native-size-matters';

const Spacer = ({
  space = 'md',
  divider = false,
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

  return divider ? (
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
