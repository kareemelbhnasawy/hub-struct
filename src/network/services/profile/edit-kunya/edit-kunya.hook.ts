import { useCustomMutation } from '@/network/hooks';
import { EditKunyaRequest, EditKunyaResponse } from '../types';
import editKunya from './edit-kunya.service';
import PROFILE_QUERY_KEYS from '../profile.query-keys';
import { AxiosResponse } from 'axios';

const useEditKunya = (
  onSuccess?: (data: EditKunyaResponse) => void,
  onError?: (error: unknown) => void,
  showSuccessToast?: (arg0: AxiosResponse) => {
    text: string;
    textProps?: object;
  },
) => {
  return useCustomMutation<EditKunyaRequest, unknown>({
    queryKey: [PROFILE_QUERY_KEYS.EDIT_KUNYA],
    mutationFn:  (data) => editKunya(data, showSuccessToast),
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useEditKunya;
