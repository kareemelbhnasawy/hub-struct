export interface UseCustomInvalidateOptions {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export interface UseCustomInvalidateReturn {
  invalidateQueries: (queryKeys: string[], options?: UseCustomInvalidateOptions) => Promise<void>;
  invalidateQuery: (queryKey: string, options?: UseCustomInvalidateOptions) => Promise<void>;
}
