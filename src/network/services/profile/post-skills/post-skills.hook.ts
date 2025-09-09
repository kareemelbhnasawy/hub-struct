import { useCustomMutation } from '@/network/hooks';
import postSkills from './post-skills.service';
import PROFILE_QUERY_KEYS from '../profile.query-keys';

const usePostSkills = (
  onSuccess?: (data: unknown) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation<
    {
      skillId?: number;
      skillName: string;
    },
    unknown
  >({
    mutationKey: [PROFILE_QUERY_KEYS.POST_SKILLS],
    mutationFn: postSkills,
    onSuccess: onSuccess ?? (() => {}), // :(
    onError: onError ?? (() => {}),
  });
};

export default usePostSkills;
