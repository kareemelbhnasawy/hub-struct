import { MaskedViewProps } from '@react-native-masked-view/masked-view';
import { ImageSourcePropType } from 'react-native';

interface CurvedHeroProps extends Omit<MaskedViewProps, 'maskElement'> {
  source?: ImageSourcePropType;
}

export default CurvedHeroProps;
