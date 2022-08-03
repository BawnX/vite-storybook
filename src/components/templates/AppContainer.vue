<template>
  <div
    class="bg-light-color dark:bg-dark-color body-font font-balooChettan text-primary dark:text-light-color"
    style="height: 100vh"
  >
    <header>
      <navbar-component :change-mode-theme="setDarkMode" :links="links" />
    </header>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from "@/services/commons/useTheme";
import NavbarComponent from "@/components/organisms/navbar.vue";

const { setDarkMode } = useTheme();
const links = [
  {
    text: "link",
    redirect: "/",
  },
];
</script>
