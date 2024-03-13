import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// import vercel from "@astrojs/vercel/serverless";

import { redirects } from "./redirects.js";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // output: "hybrid",
  // adapter: vercel(),
  redirects,
});
