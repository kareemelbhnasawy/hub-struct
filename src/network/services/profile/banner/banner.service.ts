import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import PROFILE_URLS from '../profile.urls';

export interface UpdateBannerRequest {
  email: string;
  bannerId: string;
}

export interface UpdateBannerResponse {
  // Define response fields if known, otherwise use any
  [key: string]: unknown;
}

const updateBanner = async (
  data: UpdateBannerRequest,
): Promise<UpdateBannerResponse> => {
  const res = await createAPIRequest({
    method: API_METHODS.PUT,
    url: PROFILE_URLS.BANNER,
    data,
  });
  return res.data as UpdateBannerResponse;
};

export default updateBanner;
