import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2025-11-18",

  css: ["~/assets/scss/main.scss"],

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: `${process.env.NUXT_APP_BASE_URL || "/"}favicon.ico`,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap",
        },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/scss/variables";',
        },
      },
    },
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: () => false,
        },
      },
    },
    plugins: [
      svgLoader({
        defaultImport: "component",
      }),
    ],
  },
});
