<script setup lang="ts">
const mainTitle = "Travel Log";
useHead({
  titleTemplate: (page) => {
    return page
      ? `${page} - ${mainTitle}`
      : mainTitle;
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
