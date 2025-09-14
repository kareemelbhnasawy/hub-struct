import { BadgeColor } from '@/components/molecules/badge/interface';
import { memberStatusType } from './interface';
import { icons } from 'lucide-react-native';
import { themeColors } from '@/theme/theme-colors';

export const getDataFromStatus = (status: memberStatusType) => {
  return {
    badgeText: getBadgeText(status),
    badgeColor: getBadgeColor(status),
    iconName: getIconName(status),
    iconColor: getIconColor(status),
  };
};

export type ApiAvatarStatus = 'Online' | 'Away' | 'Offline';

export const mapAvatarStatus = (
  status?: ApiAvatarStatus,
): 'active' | 'away' | 'offline' | undefined => {
  switch (status) {
    case 'Online':
      return 'active';
    case 'Away':
      return 'away';
    case 'Offline':
      return 'offline';
    default:
      return undefined;
  }
};

const getIconColor = (status: memberStatusType): keyof typeof themeColors => {
  switch (status) {
    case 'remote':
      return 'badgeBrandTealForeground';
    case 'From home':
      return 'badgeBrandTealForeground';
    case 'vacation':
      return 'badgeBrandYellowForeground';
    case 'In Vacation':
      return 'badgeBrandYellowForeground';
    case 'business-trip':
      return 'badgeBrandGreenForeground';
    case 'academic-vacation':
      return 'badgeBrandOrangeForeground';
    default:
      return 'badgeBrandTealForeground';
  }
};
const getBadgeText = (status: memberStatusType) => {
  switch (status) {
    case 'remote':
      return { text: 'profile.members.status.remote' };
    case 'From home':
      return { text: 'profile.members.status.remote' };
    case 'vacation':
      return { text: 'profile.members.status.vacation' };
    case 'In Vacation':
      return { text: 'profile.members.status.vacation' };
    case 'business-trip':
      return { text: 'profile.members.status.business-trip' };
    case 'academic-vacation':
      return { text: 'profile.members.status.academic-vacation' };
    default:
      return { text: 'profile.members.status.unknown' };
  }
};

const getBadgeColor = (status: memberStatusType): BadgeColor => {
  switch (status) {
    case 'remote':
      return 'brand';
    case 'From home':
      return 'brand';
    case 'In Vacation':
      return 'warning';

    case 'business-trip':
      return 'success';
    case 'academic-vacation':
      return 'error';
    default:
      return 'brand';
  }
};

const getIconName = (status: memberStatusType): keyof typeof icons => {
  switch (status) {
    case 'remote':
      return 'House';
    case 'In Vacation':
      return 'TreePalm';
    case 'business-trip':
      return 'Plane';
    case 'academic-vacation':
      return 'GraduationCap';
    default:
      return 'House';
  }
};
