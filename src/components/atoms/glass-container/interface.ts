import { Radius } from '@/style';
import { RNStyle } from '@/types/themes';

interface GlassContainerProps {
  testId: string;
  borderRadius?: Radius;
  containerStyle?: RNStyle;
  isContentCentered?: boolean;
  onPress?: () => void;
}

export default GlassContainerProps;
