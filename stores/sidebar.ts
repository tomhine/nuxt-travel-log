export const useSidebarStore = defineStore("useSidebarStore", () => {
  const open = ref(false);
  const opening = ref(false);
  const closing = ref(false);
  const key = "travel-log.sidebar-open";

  onMounted(() => {
    if (localStorage.getItem(key) === "false") {
      open.value = false;
    }
    else if (localStorage.getItem(key) === "true") {
      open.value = true;
    }
  });

  const toggle = () => {
    if (open.value) {
      closing.value = true;
      setTimeout(() => {
        open.value = false;
        closing.value = false;
      }, 250);
    }
    else {
      opening.value = true;
      setTimeout(() => {
        open.value = true;
        opening.value = false;
      }, 300);
    }

    localStorage.setItem(key, open.value ? "false" : "true");
  };

  return {
    open,
    toggle,
    opening,
    closing,
  };
});
