import { useCustomMutation } from '@/network/hooks';
import deleteSkills from './delete-skills.service';
import PROFILE_QUERY_KEYS from '../profile.query-keys';

const useDeleteSkills = (
  onSuccess?: (data: unknown) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation<{ skillId: number }, unknown>({
    mutationKey: [PROFILE_QUERY_KEYS.DELETE_SKILLS],
    mutationFn: deleteSkills,
    onSuccess: onSuccess ?? (() => {}), // :(
    onError: onError ?? (() => {}),
  });
};

export default useDeleteSkills;
