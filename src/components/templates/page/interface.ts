import PageHeaderProps from '@/components/organisms/page-header/interface';
import { ImageSourcePropType } from 'react-native';
import { PageHeaderVariants } from './constants';
import { RNStyle } from '@/types/themes';

interface PageProps {
  children: React.ReactNode;
  testId: string;
  scrollEnabled?: boolean;
  mainWrapperStyle?: RNStyle;
  /**
   * Use this in case you're targeting the `contentContainerStyle` and you know the wrapper is a `ScrollView`
   */
  mainWrapperContentContainerStyle?: RNStyle;
  innerPageStyle?: RNStyle;
  stickyBottomContainerStyle?: RNStyle;
  overrideWrapperStyle?: RNStyle;
  safeAreaStyle?: RNStyle;
  renderStickyBottom?: () => React.ReactNode;
  disableSafeAreaTop?: boolean;
  renderCustomHeader?: () => React.ReactNode;
  refreshing?: boolean;
  onRefresh?: () => void;
  disableSafeAreaBottom?: boolean;
  noPaddings?: boolean;
  isLoading?: boolean;
  backgroundImage?: ImageSourcePropType;
  imageStyle?: RNStyle;
  renderFloatingActionButton?: () => React.ReactNode;
  floatingActionButtonContainerStyle?: RNStyle;
  dimOnPressFAB?: boolean;
  isFABExpanded?: boolean;
  disableRefresh?: boolean;
  pageHeaderProps?: Omit<PageHeaderProps, 'testId'>;
  pageHeaderVariant?: PageHeaderVariants;
  hasHeader?: boolean;
}

// THESE PROPS HAVE MORE PROPS THAN ARE USED BECAUSE A LOT OF THEM ARE TODOS

export default PageProps;
