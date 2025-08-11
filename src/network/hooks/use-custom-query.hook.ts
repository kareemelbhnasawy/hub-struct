import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { UseCustomQueryProps } from './use-custom-query.interface';

const useCustomQuery = <TData = unknown, TError = unknown>({
  onSuccess,
  onError,
  queryKey,
  ...queryOptions
}: UseCustomQueryProps<TData, TError>) => {
  const {
    data,
    error,
    isSuccess,
    isError,
    status,
    fetchStatus,
    isFetched,
    ...useQueryParams
  } = useQuery({
    queryKey,
    retry: false,
    ...queryOptions,
  });

  useEffect(() => {
    if (isSuccess) {
      onSuccess?.(data as TData | undefined);
    }
  }, [isSuccess, data, onSuccess]);

  useEffect(() => {
    if (isError) {
      onError?.(error);
    }
  }, [isError, error, onError]);

  return {
    data,
    error,
    isSuccess,
    isError,
    status,
    fetchStatus,
    isFetched,
    ...useQueryParams,
  };
};

export default useCustomQuery;
