<template>
  <section class="bg-black text-creamy_yellow">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
          class="w-full bg-zinc-800 rounded-lg shadow border border-creamy_yellow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an Account
          </h1>
          <form @submit.prevent="register" class="space-y-4 md:space-y-6">
            <div>
              <label for="name" class="block mb-2 text-sm font-medium">First Name</label>
              <input
                  v-model="name"
                  type="text"
                  id="name"
                  class="bg-input_bg text-creamy_yellow rounded-lg placeholder-creamy_yellow focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your first name"
                  required
              />
            </div>
            <div>
              <label for="last_name" class="block mb-2 text-sm font-medium">Last
                Name</label>
              <input
                  v-model="last_name"
                  type="text"
                  id="last_name"
                  class="bg-input_bg rounded-lg placeholder-creamy_yellow focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your last name"
                  required
              />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium">Email</label>
              <input
                  v-model="email"
                  type="email"
                  id="email"
                  class="bg-input_bg text-gray-900 rounded-lg placeholder-creamy_yellow focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
              />
            </div>
            <div>
              <label for="password"
                     class="block mb-2 text-sm font-medium">Password</label>
              <input
                  v-model="password"
                  type="password"
                  id="password"
                  class="bg-input_bg text-gray-900 rounded-lg placeholder-creamy_yellow focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your password"
                  required
              />
            </div>
            <button
                type="submit"
                class="w-full bg-creamy_yellow text-black px-4 py-2 rounded-full">
              Register
            </button>
            <p class="text-sm font-light ">
              Already have an account?
              <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import {$axios} from "@/plugins/axios.js";
import {useRouter} from "vue-router";

const name = ref("");
const last_name = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();

const register = async () => {
  try {
    const response = await $axios.post("auth/register", {
      first_name: name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
    });

    console.log("Registration successful:", response.data);
    alert("Register successful!");
    await router.push("/login");
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    alert("Registration failed: " + (error.response?.data.message || "Unknown error"));
  }
};
</script>
