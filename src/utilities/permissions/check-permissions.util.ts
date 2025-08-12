import { USED_PERMISSIONS } from '@/constants';
import { checkMultiple, checkNotifications } from 'react-native-permissions';

const checkPermissions = async () => {
  const notificationResponse = await checkNotifications();
  const multipleResponse = await checkMultiple(USED_PERMISSIONS);

  return { ...multipleResponse, Notification: notificationResponse };
};

export default checkPermissions;
