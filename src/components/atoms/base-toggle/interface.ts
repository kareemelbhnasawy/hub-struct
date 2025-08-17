import { SwitchProps } from 'react-native';

interface ToggleProps extends Omit<SwitchProps, 'testID'> {
  testId: string;
}

export default ToggleProps;
