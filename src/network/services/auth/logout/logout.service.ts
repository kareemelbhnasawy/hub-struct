import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import { LogoutRequest, LogoutResponse } from '../types';
import AUTH_URLS from '../auth.urls';

const logout = async (data: LogoutRequest): Promise<LogoutResponse> => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: AUTH_URLS.LOGOUT,
    data,
  });
  return res.data as LogoutResponse;
};

export default logout;
