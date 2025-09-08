import { BadgeColor } from '@/components/molecules/badge/interface';

export const getBadgeDataFromStatus = (
  status: string,
): { color: BadgeColor; text: string } => {
  switch (status) {
    case 'completed':
      return {
        color: 'success',
        text: 'profile.qualifications.completed',
      };
    case 'in-progress':
      return {
        color: 'warning',
        text: 'profile.qualifications.onGoing',
      };
    case 'dropped':
      return {
        color: 'error',
        text: 'profile.qualifications.dropped',
      };
    default:
      return {
        color: 'error',
        text: 'profile.qualifications.unknown',
      };
  }
};
