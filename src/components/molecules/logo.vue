<template>
  <div class="flex title-font font-bold items-center">
    <logo-icon
      width="48px"
      :wrapper-class="'stroke-dark-color fill-primary dark:fill-light-color dark:stroke-primary'"
    />
    <span class="font-bold text-3xl ml-1">Allian</span>
  </div>
</template>

<script lang="ts" setup>
import LogoIcon from "@/assets/svg/logo.vue";
</script>
