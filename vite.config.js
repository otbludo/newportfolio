import { env } from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const socialImageUrl = env.VERCEL_URL
  ? `https://${env.VERCEL_URL}/profile.png`
  : "/profile.png";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "social-image-url",
      transformIndexHtml(html) {
        return html.replaceAll("__SOCIAL_IMAGE_URL__", socialImageUrl);
      },
    },
  ],
});
