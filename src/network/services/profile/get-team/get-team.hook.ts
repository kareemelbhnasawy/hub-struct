import { useCustomQuery } from '@/network/hooks';
import PROFILE_QUERY_KEYS from '../profile.query-keys';
import getTeam from './get-team.service';

// Adjust the response type once the API schema is known
type TeamResponse = unknown;

const useGetTeam = (userId?: string) => {
  return useCustomQuery<unknown, TeamResponse>({
    queryKey: [PROFILE_QUERY_KEYS.GET_TEAM, userId],
    queryFn: () => getTeam(userId),
  });
};

export default useGetTeam;
