import { useCustomQuery } from '@/network/hooks';
import PROFILE_QUERY_KEYS from '../profile.query-keys';
import getAddresses from './get-addresses.service';

const useGetAddresses = () => {
  return useCustomQuery({
    queryKey: [PROFILE_QUERY_KEYS.ADDRESSES],
    queryFn: getAddresses,
  });
};

export default useGetAddresses;
