import type { Cart } from "~/types/api";

export const useAddNewCart = () => {
  const config = useRuntimeConfig();

  return useFetch<Cart>("/carts", {
    baseURL: config.public.apiBase || "http://localhost:3001/api",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
