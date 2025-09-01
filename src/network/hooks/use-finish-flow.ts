import { useCustomMutation } from '@/network/hooks';
import { createAPIRequest } from '@/network/utilities';
import { API_METHODS } from '@/network/constants';
import { LoginFinishRequest } from '../services/auth/types';
import { AxiosResponse } from 'axios';

const finishFlowService = async (
  url: string,
  data: unknown,
  showSuccessToast?: (arg0: AxiosResponse) => {
    text: string;
    textProps?: object;
  },
): Promise<unknown> => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: `${url}/finish`,
    data,
    config: { showSuccessToast },
  });
  return res.data;
};

export const useFinishFlow = (
  url: string,
  onSuccess?: (data: unknown) => void,
  onError?: (error: unknown) => void,
  showSuccessToast?: (arg0: AxiosResponse) => {
    text: string;
    textProps?: object;
  },
) => {
  return useCustomMutation<LoginFinishRequest, unknown>({
    mutationKey: [`${url}_FINISH`],
    mutationFn: (data) => finishFlowService(url, data, showSuccessToast),
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};
