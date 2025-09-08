import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';

const getTeam = async (paramId?: string) => {
  const userId = useAuthStore.getState().userId;
  const res = await createAPIRequest({
    method: API_METHODS.GET,
    url: PROFILE_URLS.GET_TEAM,
    config: { params: { userId: paramId ?? userId } },
  });
  return res.data;
};

export default getTeam;
