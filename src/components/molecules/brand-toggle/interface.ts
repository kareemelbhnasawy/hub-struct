import { SwitchProps } from 'react-native';

interface BrandToggleProps extends Omit<SwitchProps, 'testID'> {
  testId: string;
  title: string;
  description?: string;
  titleProps?: any;
  descriptionProps?: any;
}

export default BrandToggleProps;