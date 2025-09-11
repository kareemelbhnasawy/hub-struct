import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import AUTH_URLS from '../auth.urls';

const removePin = async (data) => {
  const res = await createAPIRequest({
    method: API_METHODS.DELETE,
    url: AUTH_URLS.SET_PIN,
    config: {
      data,
      showSuccessToast: () => {
        return { text: 'profile.settings.stopPIN_CODESuccess' };
      },
    },
  });
  return res.data;
};

export default removePin;
