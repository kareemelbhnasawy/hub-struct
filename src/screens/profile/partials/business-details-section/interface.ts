import { RNStyle } from '@/types/themes';
import { DetailsItem } from '@/components/organisms/details-section/interface';
import { icons } from 'lucide-react-native';

export type DetailsSectionConfig = {
  key: string;
  title: string; // translation key or literal
  icon: keyof typeof icons;
  iconContainerStyle?: RNStyle;
  data: DetailsItem[];
  renderItem?: (args: { item: DetailsItem; index: number }) => React.ReactElement;
};

export type MapConfig = {
  title?: string;
  icon?: keyof typeof icons;
  iconContainerStyle?: RNStyle;
  latitude: number;
  longitude: number;
  containerStyle?: RNStyle;
};

interface BusinessDetailsSectionProps {
  testId: string;
  sections: DetailsSectionConfig[];
  map?: MapConfig; // if provided, map block is rendered
  containerStyle?: RNStyle;
  sectionSpacing?: 'xl' | '2xl' | '3xl' | '4xl';
}

export default BusinessDetailsSectionProps;

