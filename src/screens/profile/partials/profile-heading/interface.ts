import { RNStyle } from '@/types/themes';

interface ProfileHeadingProps {
  testId: string;
  bannerId?: string | number | null;
  avatarUrl?: string | null;
  name: string;
  displayName: string;
  displayTitle: string;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  status?: 'active' | 'away' | 'offline' | string | undefined;
  containerStyle?: RNStyle;
  customGlassComponent?: React.ReactNode;
}

export default ProfileHeadingProps;
