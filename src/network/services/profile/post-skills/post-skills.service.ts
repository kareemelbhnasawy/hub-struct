import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';

const postSkills = async (data: {
  skillId?: number;
  skillName: string;
}): Promise<unknown> => {
  const email = useAuthStore.getState().email;
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: PROFILE_URLS.SKILLS,
    config: {
      params: {
        email,
      },
      showSuccessToast: () => ({ text: 'profile.skills.postSuccess' }),
    },
    data,
  });
  return res.data;
};

export default postSkills;
