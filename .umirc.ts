import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {},
  model: {},
  routes: [
    {
      path: "/",
      component: "home",
    },
  ],
  manifest: {
    basePath: "/",
  },
  fastRefresh: true,
  npmClient: "yarn",
  jsMinifierOptions: {
    target: ["chrome80", "es2020"],
  },
  hash: true,
  cssMinifier: "cssnano",
  metas: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    }
  ],
  scripts: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-5V5328KY76",
      async: true,
    },
    {
      src: "https://static.geetest.com/static/tools/gt.js",
      async: true,
    },
    {
      content: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5V5328KY76');
      `
    }
  ],
  links: [
    {
      rel: "icon",
      href: "/logo.png",
      type: "image/x-icon",
    },
  ],
});
