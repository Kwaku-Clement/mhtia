import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@pinia/nuxt", "@vueuse/nuxt"],
  css: ["~/assets/css/tailwind.css"],

  app: {
    head: {
      title: "MHTIA | Methodist Health Training Institute",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "MHTIA - Methodist Health Training Institute",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  compatibilityDate: "2025-02-03",
});