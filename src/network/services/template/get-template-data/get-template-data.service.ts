import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import TEMPLATE_URLS from '../template.urls';

/**
 * Template service function to demonstrate API request pattern
 * @param paramId - Optional parameter ID
 * @returns Promise with API response
 */
const getTemplateData = (paramId?: string) => {
  const res = createAPIRequest({
    method: API_METHODS.POST,
    url: TEMPLATE_URLS.GET_TEMPLATE_DATA,
    data: {
      paramId,
      // Add more request parameters as needed
    },
  });
  return res;
};

export default getTemplateData;
