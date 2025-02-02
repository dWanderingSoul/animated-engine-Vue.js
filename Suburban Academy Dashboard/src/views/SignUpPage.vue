<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
      <h1 class="text-2xl font-bold text-primary mb-6">Welcome to Suburban Academy!</h1>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-2 gap-4">
          <InputField
            id="first-name"
            label="First Name"
            v-model="form.firstName"
            placeholder="Enter your first name"
            :errorMessage="errors.firstName"
          />
          <InputField
            id="last-name"
            label="Last Name"
            v-model="form.lastName"
            placeholder="Enter your last name"
            :errorMessage="errors.lastName"
          />
        </div>
        <InputField
          id="email"
          label="Email Address"
          type="email"
          v-model="form.email"
          placeholder="Enter your email"
          :errorMessage="errors.email"
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          v-model="form.password"
          placeholder="Enter your password"
          :errorMessage="errors.password"
        />
        <InputField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          v-model="form.confirmPassword"
          placeholder="Re-enter your password"
          :errorMessage="errors.confirmPassword"
        />
        <Checkbox id="terms" v-model="form.agreeToTerms">
          I agree to the <span class="text-primary cursor-pointer">Terms & Conditions</span>
        </Checkbox>
        <Button type="submit">Sign Up</Button>
      </form>
      <p class="text-sm text-center mt-4">
        Already have an account?
        <span class="text-primary cursor-pointer" @click="navigateToLogin">Sign in</span>
      </p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import InputField from "@/components/InputField.vue";
import Checkbox from "@/components/Checkbox.vue";
import Button from "@/components/Button1.vue";

export default {
  components: { InputField, Checkbox, Button },
  setup() {
    const form = reactive({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    });

    const errors = reactive({});

    const validateForm = () => {
      errors.firstName = form.firstName ? null : "First name is required.";
      errors.lastName = form.lastName ? null : "Last name is required.";
      errors.email = /\S+@\S+\.\S+/.test(form.email) ? null : "Invalid email address.";
      errors.password =
        form.password.length >= 6
          ? null
          : "Password must be at least 6 characters.";
      errors.confirmPassword =
        form.password === form.confirmPassword
          ? null
          : "Passwords do not match.";
      errors.agreeToTerms = form.agreeToTerms
        ? null
        : "You must agree to the terms.";
    };

    const handleSubmit = () => {
      validateForm();
      if (Object.values(errors).every((error) => !error)) {
        console.log("Form submitted:", form);
      }
    };

    const navigateToLogin = () => {
      console.log("Navigate to login page");
    };

    return { form, errors, handleSubmit, navigateToLogin };
  },
};
</script>

<style scoped></style>
