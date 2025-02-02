<template>
    <button
      :type="type"
      class="w-full bg-primary-red text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors"
      @click="onClick"
    >
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    name: "Button",
    props: {
      type: {
        type: String,
        default: "button",
      },
    },
    emits: ["click"],
    methods: {
      onClick(event) {
        this.$emit("click", event);
      },
    },
  };
  </script>
  