import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import { EditKunyaRequest, EditKunyaResponse } from '../types';
import PROFILE_URLS from '../profile.urls';
import { AxiosResponse } from 'axios';

const editKunya = async (
  data: EditKunyaRequest,
  showSuccessToast?: (arg0: AxiosResponse) => {
      text: string;
      textProps?: object;
    },
): Promise<unknown> => {
  const res = await createAPIRequest({
    method: API_METHODS.PUT,
    url: PROFILE_URLS.KUNYA_CRUD,
    data,
    config: { showSuccessToast },
  });
  return res.data as EditKunyaResponse;
};

export default editKunya;
