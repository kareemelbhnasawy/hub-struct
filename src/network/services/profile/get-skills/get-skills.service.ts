import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import { SkillsListGETResponse } from '../types';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';

const getSkills = async (): Promise<SkillsListGETResponse> => {
  const email = useAuthStore.getState().email;
  const res = await createAPIRequest({
    method: API_METHODS.GET,
    url: PROFILE_URLS.SKILLS,
    config: {
      params: {
        email,
      },
    },
  });
  if (res.status === 204) {
    return [];
  }
  return res.data as SkillsListGETResponse;
};

export default getSkills;
