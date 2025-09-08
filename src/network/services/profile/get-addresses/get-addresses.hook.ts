import { useCustomQuery } from '@/network/hooks';
import PROFILE_QUERY_KEYS from '../profile.query-keys';
import getAddresses from './get-addresses.service';

const useGetAddresses = (
  onSuccess: (data: unknown) => void,
  onError: () => void,
) => {
  return useCustomQuery({
    queryKey: [PROFILE_QUERY_KEYS.GET_ADDRESSES],
    queryFn: getAddresses,
    onError,
    onSuccess,
  });
};

export default useGetAddresses;
