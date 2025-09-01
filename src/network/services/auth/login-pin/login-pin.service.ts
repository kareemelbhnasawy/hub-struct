import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import AUTH_URLS from '../auth.urls';

const loginPin = async (data) => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: AUTH_URLS.PIN_LOGIN,
    data,
    config: {
      hideErrorToast: (err) => err.status === 401,
    },
  });
  return res.data;
};

export default loginPin;
