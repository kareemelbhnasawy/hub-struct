import { useMutation } from '@tanstack/react-query';
import { UseCustomMutationProps } from './use-custom-mutation.interface';

const useCustomMutation = <
  TVariables = unknown,
  TData = unknown,
  TError = unknown
>({
  mutationFn,
  onSuccess,
  onError,
  ...queryOptions
}: UseCustomMutationProps<TVariables, TData, TError>) => {
  const mutation = useMutation<TData, TError, TVariables>({
    mutationFn,
    onSuccess,
    onError,
    ...queryOptions,
  });

  return mutation;
};

export default useCustomMutation;
