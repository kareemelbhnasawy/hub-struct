import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import { HeaderResponse } from '../types';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';

const profileHeader = async (): Promise<HeaderResponse> => {
  const email = useAuthStore.getState().email;
  const res = await createAPIRequest({
    method: API_METHODS.GET,
    url: PROFILE_URLS.HEADER,
    config: {
      params: {
        email,
      },
    },
  });
  return res.data as HeaderResponse;
};

export default profileHeader;
