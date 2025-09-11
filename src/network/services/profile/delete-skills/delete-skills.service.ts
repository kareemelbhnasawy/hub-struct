import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';

const deleteSkills = async (data: { skillId: number }): Promise<unknown> => {
  const email = useAuthStore.getState().email;
  const res = await createAPIRequest({
    method: API_METHODS.DELETE,
    url: PROFILE_URLS.SKILLS,
    config: {
      showSuccessToast: () => {
        return {
          text: 'profile.skills.deleteSuccess',
        };
      },
      params: {
        email,
      },
      data,
    },
  });
  return res.data;
};

export default deleteSkills;
