import { UseMutationOptions } from '@tanstack/react-query';

export interface UseCustomMutationProps<TVariables, TData, TError> extends UseMutationOptions<TData, TError, TVariables, unknown> {
  mutationFn: (variables: TVariables) => Promise<TData>;
  onSuccess: (data: TData) => void;
  onError: (error: TError) => void;
}
