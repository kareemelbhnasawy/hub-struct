import API_METHODS from './api-methods.constant';
import { AxiosResponse } from 'axios';
import clientGet from '../utilities/client-get.util';
import clientPost from '../utilities/client-post.util';
import clientPut from '../utilities/client-put.util';
import clientDelete from '../utilities/client-delete.util';
import clientPatch from '../utilities/client-patch.util';
import BaseAPIMethodArgs from '../types/base-api-method-args.type';

const API_METHOD_SERVICE_MAPPING: {
  [key: string]: (
    args: BaseAPIMethodArgs,
  ) => Promise<AxiosResponse<unknown, unknown>>;
} = {
  [API_METHODS.GET]: clientGet,
  [API_METHODS.POST]: clientPost,
  [API_METHODS.PUT]: clientPut,
  [API_METHODS.DELETE]: clientDelete,
  [API_METHODS.PATCH]: clientPatch,
};

export default API_METHOD_SERVICE_MAPPING;
