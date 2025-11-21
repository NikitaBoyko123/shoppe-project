export const useApiFetch = <T>(url: string, options: any = {}) => {
  const config = useRuntimeConfig();

  const fetchOptions = {
    ...options,
  };

  if (config.public.apiBase) {
    fetchOptions.baseURL = config.public.apiBase;
  }

  return useFetch<T>(url, {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
};
