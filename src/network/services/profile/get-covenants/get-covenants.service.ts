import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';
import type { Covenant } from '@/screens/profile/covenants/interface';

const getCovenants = async (): Promise<Covenant> => {
  const userId = useAuthStore.getState().userId;
  const res = await createAPIRequest({
    method: API_METHODS.GET,
    url: PROFILE_URLS.GET_COVENANTS,
    config: {
      params: {
        userId: userId,
      },
    },
  });
  return res.data as Covenant;
};

export default getCovenants;
