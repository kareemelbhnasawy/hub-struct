import { SwitchProps } from 'react-native';

interface BrandToggleProps extends Omit<SwitchProps, 'testID'> {
  testId: string;
  title?: string;
  description?: string;
  titleProps?: { [x: string]: string };
  descriptionProps?: { [x: string]: string };
}

export default BrandToggleProps;
