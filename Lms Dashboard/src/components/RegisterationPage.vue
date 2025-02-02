<template>
  <div class="grid min-h-screen lg:grid-cols-2">
    <!-- Background Image Section -->
    <div 
      class="relative hidden lg:block" 
      :style="{
        backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Login_and_Dashboard-0oSqY5GQ4tgfWRXS5n5804CiiDI9PQ.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    >
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <!-- Form Section -->
    <div class="flex items-center justify-center p-8">
      <div class="mx-auto w-full max-w-md space-y-8">
        <!-- Logo and Title -->
        <div class="space-y-2 text-center">
          <div class="flex justify-center items-center gap-1 text-2xl font-bold">
            <div class="flex items-center">
              <span class="text-[#ff0000]">Suburban</span>
              <span>Academy</span>
            </div>
          </div>
          <h1 class="text-3xl font-bold">Welcome to Suburban Academy!</h1>
        </div>

        <!-- Sign Up Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Name Fields -->
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label for="firstName" class="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                v-model="form.firstName"
                type="text"
                placeholder="First Name"
                required
                class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div class="space-y-2">
              <label for="lastName" class="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="lastName"
                v-model="form.lastName"
                type="text"
                placeholder="Last Name"
                required
                class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </div>

          <!-- Email Field -->
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Email Address"
              required
              class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <!-- Password Field -->
          <div class="space-y-2">
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                required
                class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <EyeOff class="h-4 w-4" />
              </button>
            </div>
          </div>

          <!-- Terms Checkbox -->
          <div class="flex items-center space-x-2">
            <input
              id="terms"
              v-model="form.acceptTerms"
              type="checkbox"
              required
              class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label for="terms" class="text-sm text-gray-700">
              I agree to the 
              <a href="#" class="text-[#ff0000] hover:underline">Terms & Conditions</a>
            </label>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full py-2 px-4 bg-[#ff0000] hover:bg-[#ff0000]/90 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign Up
          </button>

          <!-- Sign In Link -->
          <div class="text-center text-sm text-gray-700">
            Already have an account?
            <a href="#" class="text-[#ff0000] hover:underline ml-1">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { EyeOff } from 'lucide-vue-next'

// Form state
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  acceptTerms: false
})

// Password visibility state
const showPassword = ref(false)

// Toggle password visibility
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Form submission handler
const handleSubmit = () => {
  // Here you would typically handle the form submission
  console.log('Form submitted:', form)
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>