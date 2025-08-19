import { useQueryClient } from '@tanstack/react-query';
import {
  UseCustomInvalidateOptions,
  UseCustomInvalidateReturn,
} from './use-custom-invalidate.interface';

const useCustomInvalidate = (): UseCustomInvalidateReturn => {
  const queryClient = useQueryClient();

  const invalidateQueries = async (
    queryKeys: string[],
    options?: UseCustomInvalidateOptions,
  ): Promise<void> => {
    try {
      await queryClient.invalidateQueries({
        queryKey: queryKeys,
      });
      options?.onSuccess?.();
    } catch (error) {
      options?.onError?.(error);
    }
  };

  const invalidateQuery = async (
    queryKey: string,
    options?: UseCustomInvalidateOptions,
  ): Promise<void> => {
    try {
      await queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      options?.onSuccess?.();
    } catch (error) {
      options?.onError?.(error);
    }
  };

  return {
    invalidateQueries,
    invalidateQuery,
  };
};

export default useCustomInvalidate;
