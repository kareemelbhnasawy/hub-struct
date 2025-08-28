import { STORAGE_KEYS } from '@/constants/storageKeys';
import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import { useAuthStore } from '@/store/auth';
import AUTH_URLS from '../auth.urls';
import { getString } from '@/utilities';

interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

const REFRESH_TOKEN = getString(STORAGE_KEYS.REFRESH_TOKEN);

const refreshToken = async (): Promise<RefreshTokenResponse> => {
  const email = useAuthStore.getState().email;
  const res = await createAPIRequest({
    method: API_METHODS.GET,
    url: AUTH_URLS.REFRESH_TOKEN,
    config: {
      params: {
        email,
        refreshToken: REFRESH_TOKEN,
      },
    },
  });
  return res.data as RefreshTokenResponse;
};

export default refreshToken;
