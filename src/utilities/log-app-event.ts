import { AnalyticEvent } from '@/constants';
import {
  FirebaseAnalyticsTypes,
  getAnalytics,
  logEvent,
} from '@react-native-firebase/analytics';

const logAppEvent = ({
  eventName,
  eventType = AnalyticEvent.user,
  eventParams,
  options,
}: {
  eventName: string;
  eventType?: AnalyticEvent;
  eventParams?: { [key: string]: unknown };
  options?: FirebaseAnalyticsTypes.AnalyticsCallOptions;
}) => {
  const validNameRegex = /^[a-z0-9]+(?:_[a-z0-9]+)*$/;

  if (!validNameRegex.test(eventName))
    console.error(
      `Invalid event name (${eventName}) but the event was fired anyways.\n Please use a proper format e.g. (change_address)`,
    );
  const analytics = getAnalytics();
  return logEvent(
    analytics,
    `${eventType ? `${eventType}_` : ''}${eventName}`,
    eventParams,
    options,
  );
};

export default logAppEvent;
