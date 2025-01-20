<template>
  <section class="bg-black text-creamy_yellow">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
          class="w-full rounded-lg shadow border border-creamy_yellow md:mt-0 sm:max-w-md xl:p-0 bg-zinc-800">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Sign in to your account
          </h1>
          <form @submit.prevent="login" class="space-y-4 md:space-y-6">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
              <input
                  v-model="email"
                  type="email"
                  id="email"
                  class="bg-input_bg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-creamy_yellow dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  class="bg-input_bg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-creamy_yellow dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your password"
                  required
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                      id="remember"
                      type="checkbox"
                      class="w-4 h-4 rounded bg-input_bg focus:ring-3 focus:ring-primary-300 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember">Remember me</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium hover:underline">Forgot
                password?</a>
            </div>
            <button
                type="submit"
                class="w-full bg-creamy_yellow text-black px-4 py-2 rounded-full">
              Sign in
            </button>
            <p class="text-sm">
              Don’t have an account yet?
              <a href="/register" class="font-medium hover:underline">Sign up</a>
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

const email = ref("");
const password = ref("");

const router = useRouter();

const login = async () => {
  try {
    const response = await $axios.post("http://127.0.0.1:8000/api/auth/login", {
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("token", response.data.token);
    alert("Login successful!");
    await router.push("/");

  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    alert("Login failed: " + (error.response?.data.message || "Unknown error"));
    password.value = "";
  }
};
</script>
