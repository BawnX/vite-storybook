import messages from "@intlify/vite-plugin-vue-i18n/messages";
import routes from "virtual:generated-pages";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./assets/main.style.css";
import { ViteSSG } from "vite-ssg";

const i18n = createI18n({
  locale: localStorage.locale || "en",
  messages,
});

export const app = ViteSSG(App, { routes }, ({ app }) => {
  app.use(i18n);
});

export default app;
