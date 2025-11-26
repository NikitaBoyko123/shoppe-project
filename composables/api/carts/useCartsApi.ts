import type { Cart } from "~/types/api";

export const useAddNewCart = () => {
  return useApiFetch<Cart>("/carts", {
    method: "POST",
  });
};
