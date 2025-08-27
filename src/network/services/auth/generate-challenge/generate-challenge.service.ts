import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import AUTH_URLS from '../auth.urls';

const generateChallenge = async (data) => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: AUTH_URLS.CHALLENGE,
    data,
  });
  return res.data;
};

export default generateChallenge;
