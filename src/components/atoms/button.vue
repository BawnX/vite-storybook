<template>
  <button :class="wrapperClass">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  isRounded: {
    type: Boolean,
    default: false,
  },
});

const staticClass =
  "inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0";

const wrapperClass = computed(() => {
  const rounded = props.isRounded ? "rounded-full" : "rounded";
  if (props.type === "primary") {
    return `${staticClass} ${rounded} bg-dark-color hover:bg-dark-color bg-primary text-light-color`;
  }
  return `${staticClass} ${rounded}`;
});
</script>
