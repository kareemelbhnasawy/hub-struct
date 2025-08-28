import { useCustomQuery } from '@/network/hooks';
import AUTH_QUERY_KEYS from '../auth.query-keys';
import refresh from './refresh-token.service';

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
const useRefresh = (
  onSuccess?: (data: RefreshTokenResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomQuery<unknown, RefreshTokenResponse>({
    queryKey: [AUTH_QUERY_KEYS.REFRESH],
    queryFn: refresh,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useRefresh;
