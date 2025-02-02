<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="max-w-4xl w-full flex bg-white shadow-lg rounded-lg overflow-hidden">
        <!-- Left Section -->
        <div class="hidden md:block w-1/2 bg-cover bg-center relative" style="background-image: url('@/assets/signin-background.jpg');">
          <div class="absolute inset-0 bg-black opacity-40"></div>
        </div>
  
        <!-- Right Section -->
        <div class="w-full md:w-1/2 px-8 py-10">
          <h1 class="text-3xl font-bold text-primary-black mb-6">Welcome to XYZ Academy!</h1>
          <p class="text-gray-600 mb-4">Start your journey</p>
  
          <form @submit.prevent="handleSubmit">
            <FormInput
              id="email"
              label="Email Address"
              v-model="form.email"
              placeholder="Enter your email"
              :error="errors.email"
            />
  
            <FormInput
              id="password"
              label="Password"
              type="password"
              v-model="form.password"
              placeholder="Enter your password"
              :error="errors.password"
            />
  
            <div class="flex items-center justify-between mb-4">
              <label class="flex items-center text-sm text-gray-600">
                <input type="checkbox" class="form-checkbox mr-2 text-primary-red" />
                Remember Me
              </label>
              <a href="#" class="text-sm text-primary-red hover:underline">Forgot Password?</a>
            </div>
  
            <Button type="submit">Sign In</Button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import FormInput from "@/components/FormInput.vue";
  import Button from "@/components/Button2.vue";
  
  export default {
    name: "SignIn",
    components: { FormInput, Button },
    setup() {
      const form = ref({
        email: "",
        password: "",
      });
  
      const errors = ref({
        email: null,
        password: null,
      });
  
      const handleSubmit = () => {
        if (!form.value.email) {
          errors.value.email = "Email is required";
        } else {
          errors.value.email = null;
        }
  
        if (!form.value.password) {
          errors.value.password = "Password is required";
        } else {
          errors.value.password = null;
        }
  
        if (!errors.value.email && !errors.value.password) {
          console.log("Form submitted", form.value);
          // Perform authentication logic here
        }
      };
  
      return { form, errors, handleSubmit };
    },
  };
  </script>
  