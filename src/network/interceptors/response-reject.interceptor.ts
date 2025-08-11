import { API_UNAUTHORIZED_STATUS } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onResponseReject = (error: any): any => {
  if (
    // check if disableAPIError exists (if it doesn't then do default error handling)
    !error.config.disableAPIError ||
    // if it exists, check if we should disable default error handling
    !error.config.disableAPIError?.(error)
  ) {
    /**
     * here you can change the configuration for the toast through Toast.show({any_configuration_in_package})
     * like visibilityTime, swipeable, etc.
     */

    /**
     * intercept 401 status
     */
    if (error?.response?.status === API_UNAUTHORIZED_STATUS) {
      // handleLogoutStates();
    }

    //TODO: Handle Default Response Rejection
  }
  return Promise.reject(
    error instanceof Error ? error : new Error(JSON.stringify(error)),
  );
};
export default onResponseReject;
