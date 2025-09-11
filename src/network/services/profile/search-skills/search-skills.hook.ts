import { useCustomMutation } from '@/network/hooks';
import { SkillsListResponse } from '../types';
import searchSkills from './search-skills.service';
import PROFILE_QUERY_KEYS from '../profile.query-keys';

const useSearchSkills = (
  onSuccess?: (data: SkillsListResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation<{ keyword: string }, SkillsListResponse>({
    mutationKey: [PROFILE_QUERY_KEYS.SEARCH_SKILLS],
    mutationFn: searchSkills,
    onSuccess: onSuccess ?? (() => {}), // :(
    onError: onError ?? (() => {}),
  });
};

export default useSearchSkills;
