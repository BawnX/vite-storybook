import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    isDarkMode: false,
  }),
  getters: {
    getIsDarkMode: (state) => state.isDarkMode,
  },
  actions: {
    setDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
      }
      if (!this.isDarkMode) {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});
