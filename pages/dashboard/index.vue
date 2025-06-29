<script setup lang="ts">
const sidebar = useSidebarStore();
</script>

<template>
  <div class="flex-1 flex">
    <section class="bg-base-200 transition-all duration-300" :class="{ 'w-64': (sidebar.open && !sidebar.closing) || sidebar.opening, 'w-14': !sidebar.open || (sidebar.open && sidebar.closing) }">
      <header class="flex justify-end p-2">
        <button class="btn btn-circle" aria-label="Toggle sidebar" @click="sidebar.toggle">
          <Icon name="tabler:chevron-left" size="32" class="transition" :class="{ 'rotate-180': !sidebar.open }" />
        </button>
      </header>
      <nav class="flex flex-col px-2">
        <SidebarLink label="Locations" to="/dashboard" icon="tabler:map" />
        <SidebarLink label="Add location" to="/dashboard/new" icon="tabler:circle-plus-filled" />

        <div class="divider m-0" />

        <SidebarLink label="Log out" to="/log-out" icon="tabler:logout-2" />
      </nav>
    </section>
    <section class="flex-1" />
  </div>
</template>
