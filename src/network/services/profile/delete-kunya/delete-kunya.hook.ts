import { useCustomMutation } from '@/network/hooks';
import { DeleteKunyaResponse, DeleteKunyaRequest, } from '../types';
import deleteKunya from './delete-kunya.service';
import PROFILE_QUERY_KEYS from '../profile.query-keys';
import { AxiosResponse } from 'axios';

const useDeleteKunya = (
  onSuccess?: (data: DeleteKunyaResponse) => void,
  onError?: (error: unknown) => void,
  showSuccessToast?: (arg0: AxiosResponse) => {
    text: string;
    textProps?: object;
  },
) => {
  return useCustomMutation<DeleteKunyaRequest, unknown>({
    queryKey: [PROFILE_QUERY_KEYS.DELETE_KUNYA],
    mutationFn: (data) => deleteKunya(data, showSuccessToast),
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useDeleteKunya;
