import type { UseFetchOptions } from "#app";

export const useApiFetch = <T = unknown>(
  url: string,
  options: UseFetchOptions<T> = {}
) => {
  const config = useRuntimeConfig();

  const fetchOptions: UseFetchOptions<T> = {
    ...options,
  };

  if (config.public.apiBase) {
    fetchOptions.baseURL = config.public.apiBase;
  }

  fetchOptions.headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  return useFetch(url, fetchOptions);
};
