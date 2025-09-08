import { MaskedViewProps } from '@react-native-masked-view/masked-view';
import { ImageSourcePropType } from 'react-native';

interface CurvedHeroProps
  extends Omit<MaskedViewProps, 'maskElement' | 'testID'> {
  testId: string;
  source?: ImageSourcePropType;
  hasBackButton?: boolean;
  customGlassComponent?: React.ReactNode;
}

export default CurvedHeroProps;
