import { PERMISSIONS, RESULTS } from 'react-native-permissions';

type ValueOf<T> = T[keyof T];

type Permission =
  | ValueOf<typeof PERMISSIONS.ANDROID>
  | ValueOf<typeof PERMISSIONS.IOS>
  | ValueOf<typeof PERMISSIONS.WINDOWS>;

type PermissionStatus = ValueOf<typeof RESULTS>;

type RationaleObject = {
  title: string;
  message: string;
  buttonPositive: string;
  buttonNegative?: string;
};

type Rationale = RationaleObject | (() => Promise<boolean>);

type NotificationOption =
  | 'alert'
  | 'badge'
  | 'sound'
  | 'carPlay'
  | 'criticalAlert'
  | 'provisional'
  | 'providesAppSettings';

type NotificationSettings = {
  // unavailable settings will not be included in the response object
  alert?: boolean;
  badge?: boolean;
  sound?: boolean;
  carPlay?: boolean;
  criticalAlert?: boolean;
  provisional?: boolean;
  providesAppSettings?: boolean;
  lockScreen?: boolean;
  notificationCenter?: boolean;
};

type NotificationsResponse = {
  status: PermissionStatus;
  settings: NotificationSettings;
};

type LocationAccuracy = 'full' | 'reduced';
type LocationAccuracyOptions = { purposeKey: string };

export type {
  Permission,
  Rationale,
  NotificationOption,
  NotificationsResponse,
  LocationAccuracy,
  LocationAccuracyOptions,
};
