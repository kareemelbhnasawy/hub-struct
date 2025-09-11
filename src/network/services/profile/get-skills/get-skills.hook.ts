import { useCustomQuery } from '@/network/hooks';
import { SkillsListGETResponse } from '../types';
import getSkills from './get-skills.service';
import PROFILE_QUERY_KEYS from '../profile.query-keys';

const useGetSkills = (
  onSuccess?: (data?: SkillsListGETResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomQuery<SkillsListGETResponse, unknown>({
    queryKey: [PROFILE_QUERY_KEYS.GET_SKILLS],
    queryFn: getSkills,
    onSuccess: onSuccess ?? (() => {}), // :(
    onError: onError ?? (() => {}),
  });
};

export default useGetSkills;
