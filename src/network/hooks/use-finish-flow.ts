import { useCustomMutation } from '@/network/hooks';
import { createAPIRequest } from '@/network/utilities';
import { API_METHODS } from '@/network/constants';
import { LoginFinishRequest } from '../services/auth/types';
import { AxiosError, AxiosResponse } from 'axios';

const finishFlowService = async (
  url: string,
  data: unknown,
  showSuccessToast?: (arg0: AxiosResponse) => {
    text: string;
    textProps?: object;
  },
  hideErrorToast?: (arg0: AxiosError) => boolean,
): Promise<unknown> => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: `${url}/finish`,
    data,
    config: { showSuccessToast, hideErrorToast },
  });
  return res.data;
};

export const useFinishFlow = (props: {
  url: string;
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
  showSuccessToast?: (arg0: AxiosResponse) => {
    text: string;
    textProps?: object;
  };
  hideErrorToast?: (arg0: AxiosError) => boolean;
}) => {
  const { url, onSuccess, onError, showSuccessToast, hideErrorToast } = props;
  return useCustomMutation<LoginFinishRequest, unknown>({
    mutationKey: [`${url}_FINISH`],
    mutationFn: (data) =>
      finishFlowService(url, data, showSuccessToast, hideErrorToast),
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};
