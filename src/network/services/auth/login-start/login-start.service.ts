import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import { LoginStartRequest, LoginStartResponse } from '../types';
import AUTH_URLS from '../auth.urls';

/**
 * Initiates the login process for a user
 * @param data - Login request data containing email, password, and deviceId
 * @returns Promise with login start response containing expiration and mobile number
 */
const loginStart = async (
  data: LoginStartRequest,
): Promise<LoginStartResponse> => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: AUTH_URLS.LOGIN_START,
    data,
  });
  return res.data as LoginStartResponse;
};

export default loginStart;
