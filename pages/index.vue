<script setup lang="ts">
useHead({
  title: "Home",
});

const authStore = useAuthStore();
</script>

<template>
  <div class="hero bg-base-300">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Keep track of your travels and adventures. Add locations, photos and notes to create a digital journal of your journeys.
        </p>
        <NuxtLink v-if="authStore.user" to="/dashboard" class="btn btn-primary">
          <Icon
            name="tabler:arrow-right"
            size="24"
          />
          Get started
        </NuxtLink>
        <AuthButton v-else />
      </div>
    </div>
  </div>
</template>
