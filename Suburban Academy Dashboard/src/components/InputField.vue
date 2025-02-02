<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      v-model="modelValue"
      :placeholder="placeholder"
      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
    <p v-if="errorMessage" class="text-red-500 text-sm mt-1">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, default: "text" },
    modelValue: { type: String, required: true },
    placeholder: { type: String, default: "" },
    errorMessage: { type: String, default: null },
  },
};
</script>

<style scoped></style>
