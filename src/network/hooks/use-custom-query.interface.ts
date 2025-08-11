import { QueryOptions } from '@tanstack/react-query';

export interface UseCustomQueryProps extends QueryOptions {
  onSuccess?: (data?: object) => void;
  onError?: (error?: object) => void;
  queryKey: unknown[];
  queryFn: () => Promise<unknown>;
}
