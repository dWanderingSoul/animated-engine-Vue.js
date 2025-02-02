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
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-red focus:outline-none"
      />
      <p v-if="error" class="text-sm text-red-500 mt-1">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "FormInput",
    props: {
      id: String,
      label: String,
      type: {
        type: String,
        default: "text",
      },
      modelValue: [String, Number],
      placeholder: String,
      error: String,
    },
    emits: ["update:modelValue"],
  };
  </script>
  