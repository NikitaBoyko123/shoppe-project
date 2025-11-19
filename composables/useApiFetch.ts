export const useApiFetch = <T>(url: string, options: any = {}) => {
  const config = useRuntimeConfig();

  return useFetch<T>(url, {
    baseURL: config.public.apiBase || "http://localhost:3001/api",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
};
