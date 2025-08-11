import { useCustomQuery } from '@/network/hooks';
import TEMPLATE_QUERY_KEYS from '../template.query-keys';
import getTemplateData from './get-template-data.service';

/**
 * Template hook to demonstrate custom query usage pattern
 * @param paramId - Optional parameter ID
 * @returns Query result containing template data
 */
const useGetTemplateData = (paramId?: string) =>
  useCustomQuery({
    queryKey: [TEMPLATE_QUERY_KEYS.GET_TEMPLATE_DATA, paramId],
    queryFn: () => getTemplateData(paramId),
    // Common optional configurations:
    // staleTime: 5 * 60 * 1000, // Data considered fresh for 5 minutes
    // retry: 2, // Number of retry attempts
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // enabled: !!paramId, // Only run query if paramId is provided
  });

export default useGetTemplateData;
