import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import { SkillsListResponse } from '../types';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';

const searchSkills = async (data: {
  keyword: string;
}): Promise<SkillsListResponse> => {
  const email = useAuthStore.getState().email;
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: PROFILE_URLS.SKILLS_SEARCH,
    config: {
      params: {
        email,
      },
    },
    data,
  });
  return res.data as SkillsListResponse;
};

export default searchSkills;
