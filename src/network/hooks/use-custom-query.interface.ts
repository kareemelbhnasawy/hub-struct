import { UseQueryOptions } from '@tanstack/react-query';

export interface UseCustomQueryProps<TData, TError>
  extends Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> {
  onSuccess?: (data?: TData) => void;
  onError?: (error?: TError) => void;
  queryKey: unknown[];
  queryFn: () => Promise<TData>;
}
