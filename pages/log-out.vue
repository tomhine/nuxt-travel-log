<script setup lang="ts">
onMounted(() => {
  useAuthStore().signOut();
  navigateTo("/");
});
</script>

<template>
  <section class="container mx-auto max-w-2xl grid place-items-center p-16 gap-8">
    <span class="loading loading-spinner loading-xl" />
  </section>
</template>
