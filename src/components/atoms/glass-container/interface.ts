import { Radius } from '@/style';
import { RNStyle } from '@/types/themes';

interface GlassContainerProps {
  testId: string;
  borderRadius?: Radius;
  containerStyle?: RNStyle;
  isContentCentered?: boolean;
}

export default GlassContainerProps;
