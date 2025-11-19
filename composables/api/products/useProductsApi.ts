import type { Product } from "~/types/api";

export const useGetAllProducts = () => {
  const config = useRuntimeConfig();

  return useFetch<Product[]>("/products", {
    baseURL: config.public.apiBase || "http://localhost:3001/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
