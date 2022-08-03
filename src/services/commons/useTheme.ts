import { ref } from "vue";

const isDarkMode = ref(false);

const setDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  }
  if (!isDarkMode.value) {
    document.documentElement.classList.remove("dark");
  }
};

export const useTheme = () => {
  return {
    isDarkMode,
    setDarkMode,
  };
};
