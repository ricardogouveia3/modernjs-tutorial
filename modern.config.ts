import { appTools, defineConfig } from '@modern-js/app-tools';
import statePlugin from "@modern-js/plugin-state";
import {tailwindcssPlugin} from "@modern-js/plugin-tailwindcss";

export default defineConfig({
  runtime: {
    router: true,
    state: true,
  },
  server: {
    ssr: true,
  },
  plugins: [appTools(), statePlugin(), tailwindcssPlugin()],
});