<template>
  <button
    :type="type"
    class="w-full px-4 py-2 text-white bg-primary hover:bg-red-600 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "button" },
  },
};
</script>

<style scoped></style>
