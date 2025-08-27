import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import AUTH_URLS from '../auth.urls';

const loginBio = async (data) => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: AUTH_URLS.BIO_LOGIN,
    data,
  });
  return res.data;
};

export default loginBio;
