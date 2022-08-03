<template>
  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <link-component
      v-for="link in links"
      :key="link.text"
      :redirect="link.redirect"
      class="mr-5 hover:text-gray-900"
    >
      <span>{{ link.text }}</span>
    </link-component>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import LinkComponent from "@/components/atoms/link.vue";

defineProps({
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
