import { icons } from 'lucide-react-native';
import SpacerProps from '@/components/atoms/spacer/interface';
import { RNStyle } from '@/types/themes';

export type DetailsItem = {
  key: string;
  label: string;
  value: string;
};

interface DetailsSectionProps {
  testId: string;
  title: string; // translation key or literal
  icon: keyof typeof icons;
  iconContainerStyle?: RNStyle;
  data: DetailsItem[];
  /**
   * Optional custom row renderer. If omitted, a default label/value row is used.
   */
  renderItem?: (args: { item: DetailsItem; index: number }) => React.ReactElement;
  /**
   * Pass through to inner List spacer. Defaults to divider with no space.
   */
  spacerProps?: SpacerProps;
  /**
   * Optional style for the list wrapper
   */
  containerStyle?: RNStyle;
}

export default DetailsSectionProps;
export type { DetailsSectionProps as IDetailsSectionProps };

