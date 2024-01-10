import { defineConfig } from "astro/config";
import vercelServerless from '@astrojs/vercel/serverless';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercelServerless(),
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), react()]
});