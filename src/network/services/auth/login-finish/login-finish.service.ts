import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import { LoginFinishRequest, AuthorizationTokenResponse } from '../types';
import AUTH_URLS from '../auth.urls';

/**
 * Completes the login process using a one-time password (OTP)
 * @param data - Request data containing OTP and deviceId
 * @returns Promise with authorization tokens response
 */
const loginFinish = (
  data: LoginFinishRequest,
): Promise<AuthorizationTokenResponse> => {
  return createAPIRequest({
    method: API_METHODS.POST,
    url: AUTH_URLS.LOGIN_FINISH,
    data,
  }).then((response) => response.data as AuthorizationTokenResponse);
};

export default loginFinish;
