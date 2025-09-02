import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import AUTH_URLS from '../auth.urls';

const setBio = async (data) => {
  const res = await createAPIRequest({
    method: API_METHODS.PUT,
    url: AUTH_URLS.SET_BIO,
    data,
    config: {
      showSuccessToast: () => {
        return { text: 'تم تفعيل بصمة الوجه بنجاح' };
      },
    },
  });
  return res.data;
};

export default setBio;
