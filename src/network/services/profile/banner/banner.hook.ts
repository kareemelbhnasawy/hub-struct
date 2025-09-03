import { useCustomMutation } from '@/network/hooks';
import updateBanner, {
  UpdateBannerRequest,
  UpdateBannerResponse,
} from './banner.service';
import PROFILE_QUERY_KEYS from '../profile.query-keys';

const useUpdateBanner = (
  onSuccess?: (data: UpdateBannerResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation<UpdateBannerRequest, UpdateBannerResponse>({
    mutationKey: [PROFILE_QUERY_KEYS.UPDATE_BANNER],
    mutationFn: updateBanner,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useUpdateBanner;
