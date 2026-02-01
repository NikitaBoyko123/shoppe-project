import type { Cart } from "~/types/api";
import { useApiFetch } from "~/composables/api/useApiFetch";

export const useAddNewCart = () => {
  return useApiFetch<Cart>("/carts", {
    method: "POST",
  });
};
