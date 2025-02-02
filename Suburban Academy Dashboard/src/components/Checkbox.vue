<template>
  <div class="flex items-start mb-4">
    <input
      type="checkbox"
      :id="id"
      v-model="modelValue"
      class="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
    />
    <label :for="id" class="ml-2 text-sm text-gray-700">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    modelValue: { type: Boolean, required: true },
  },
};
</script>

<style scoped></style>
