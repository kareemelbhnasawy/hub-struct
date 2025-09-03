import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import AUTH_URLS from '../auth.urls';

const setPin = async (data) => {
  const res = await createAPIRequest({
    method: API_METHODS.PUT,
    url: AUTH_URLS.SET_PIN,
    data,
    config: {
      showSuccessToast: () => {
        return { text: 'profile.settings.activatePIN_CODESuccess' };
      },
    },
  });
  return res.data;
};

export default setPin;
