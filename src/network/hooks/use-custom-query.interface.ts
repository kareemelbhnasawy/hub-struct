import { QueryOptions } from '@tanstack/react-query';

export interface UseCustomQueryProps<TData, TError> extends QueryOptions {
  onSuccess?: (data?: TData) => void;
  onError?: (error?: TError) => void;
  queryKey: unknown[];
  queryFn: () => Promise<TData>;
}
