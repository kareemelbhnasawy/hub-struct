import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import SpacerProps from './spacer.interface';

const Spacer = ({
  space = 'md',
  divider = false,
  spaceTop,
  spaceBottom,
}: SpacerProps) => {
  spaceTop = spaceTop || space;
  spaceBottom = spaceBottom || space;
  return divider ? (
    <>
      <View
        className={typeof spaceTop === 'string' ? `spacing-${spaceTop}` : ''}
        style={typeof spaceTop === 'number' ? { height: scale(spaceTop) } : {}}
      />
      <View className="bg-neutral-300 dark:bg-neutral-600 h-0.5 w-11/12 self-center" />
      <View
        className={
          typeof spaceBottom === 'string' ? `spacing-${spaceBottom}` : ''
        }
        style={
          typeof spaceBottom === 'number' ? { height: scale(spaceBottom) } : {}
        }
      />
    </>
  ) : (
    <View
      className={typeof space === 'string' ? `spacing-${space}` : ''}
      style={typeof space === 'number' ? { height: scale(space) } : {}}
    />
  );
};

export default Spacer;
