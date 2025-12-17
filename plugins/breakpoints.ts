import { defineNuxtPlugin, useNuxtApp } from "nuxt/app";
import { ref, type Ref } from "vue";

interface Breakpoints {
  m: Ref<boolean>;
  l: Ref<boolean>;
  xl: Ref<boolean>;
  xxl: Ref<boolean>;
}

export default defineNuxtPlugin((nuxtApp) => {
  const m = ref(false);
  const l = ref(false);
  const xl = ref(false);
  const xxl = ref(false);

  const breakpoints: Breakpoints = { m, l, xl, xxl };

  if (import.meta.client) {
    const BP_M = 768,
      BP_L = 1024,
      BP_XL = 1280,
      BP_XXL = 1440;

    const onResize = () => {
      const w = window.innerWidth;
      m.value = w >= BP_M;
      l.value = w >= BP_L;
      xl.value = w >= BP_XL;
      xxl.value = w >= BP_XXL;
    };

    window.addEventListener("resize", onResize);
    onResize();
  }

  nuxtApp.provide("breakpoints", breakpoints);
});

export const useBreakpointsTyped = (): Breakpoints => {
  return useNuxtApp().$breakpoints as Breakpoints;
};
