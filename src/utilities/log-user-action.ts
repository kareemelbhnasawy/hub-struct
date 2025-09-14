import {
  FirebaseAnalyticsTypes,
  getAnalytics,
  logEvent,
} from '@react-native-firebase/analytics';

const logUserAction = (
  eventName: string,
  eventParams: { [key: string]: unknown },
  options?: FirebaseAnalyticsTypes.AnalyticsCallOptions,
) => {
  const analytics = getAnalytics();
  return logEvent(analytics, eventName, eventParams, options);
};

export default logUserAction;
