import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { UseCustomQueryProps } from './use-custom-query.interface';

const useCustomQuery = ({
  onSuccess,
  onError,
  queryKey,
  ...queryOptions
}: UseCustomQueryProps) => {
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
      onSuccess?.(data as object | undefined);
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
    ...useQueryParams
  };
};

export default useCustomQuery;
