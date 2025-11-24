import type { UseFetchOptions } from "#app";

export const useApiFetch = (
  url: string,
  options: UseFetchOptions<unknown> = {}
) => {
  const config = useRuntimeConfig();

  const fetchOptions: UseFetchOptions<unknown> = {
    ...options,
  };

  if (config.public.apiBase) {
    fetchOptions.baseURL = config.public.apiBase;
  }

  fetchOptions.headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  return useFetch<unknown>(url, fetchOptions);
};
