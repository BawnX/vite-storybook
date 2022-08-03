<template>
  <div
    class="mx-auto flex flex-wrap py-2.5 px-8 flex-col md:flex-row items-center font-medium"
  >
    <link-component redirect="/"><logo-component /></link-component>

    <navlink-component :links="links" />

    <button-component @click="changeModeTheme">
      button
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button-component>
  </div>
</template>

<script lang="ts" setup>
import LogoComponent from "@/components/molecules/logo.vue";
import LinkComponent from "@/components/atoms/link.vue";
import ButtonComponent from "@/components/atoms/button.vue";
import NavlinkComponent from "@/components/molecules/navLink.vue";
import { defineProps, PropType } from "vue";

defineProps({
  changeModeTheme: {
    type: Function,
  },
  links: {
    type: Array as PropType<
      Array<{
        text: string;
        redirect: string;
      }>
    >,
  },
});
</script>
