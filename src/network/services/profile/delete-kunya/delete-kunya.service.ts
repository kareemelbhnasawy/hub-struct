import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import { DeleteKunyaRequest, DeleteKunyaResponse } from '../types';
import PROFILE_URLS from '../profile.urls';
import { AxiosResponse } from 'axios';

const deleteKunya = async (
  data: DeleteKunyaRequest,
  showSuccessToast?: (arg0: AxiosResponse) => {
      text: string;
      textProps?: object;
    },
): Promise<unknown> => {
  const res = await createAPIRequest({
    method: API_METHODS.DELETE,
    url: PROFILE_URLS.KUNYA_CRUD,
    data,
    config: { showSuccessToast, params: data },
  });
  return res.data as DeleteKunyaResponse;
};

export default deleteKunya;
