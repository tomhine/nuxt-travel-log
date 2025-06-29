<script setup lang="ts">
const props = defineProps<{
  label: string;
  to: string;
  icon: string;
}>();

const route = useRoute();
const sidebar = useSidebarStore();
</script>

<template>
  <div class="tooltip-right" :data-tip="label" :class="{ tooltip: !sidebar.open }">
    <NuxtLink
      :to="props.to"
      :class="{
        'bg-primary text-primary-content hover:bg-primary': route.path === props.to,
        // 'justify-center': !sidebar.open,
        // 'justify-start': sidebar.open,
      }"
      class="flex flex-nowrap rounded gap-2 py-2.5 px-2 cursor-pointer transition hover:bg-base-300"
      :aria-label="props.label"
    >
      <Icon :name="props.icon" size="24" />
      <Transition name="grow">
        <span v-if="sidebar.open && !sidebar.closing">
          {{ props.label }}
        </span>
      </Transition>
    </NuxtLink>
  </div>
</template>

<style scoped>
.grow-enter-active,
.grow-leave-active {
  transition: opacity 0.1s ease;
}

.grow-enter-from,
.grow-leave-to {
  opacity: 0;
}
</style>
