<template>
  <Header/>
  <section class="w-full bg-black flex items-center justify-center p-4">
    <div class="mid:w-3/4 w-full bg-white flex flex-col p-10 huge:pl-36 huge:pr-36 gap-10">
      <h2 class="text-gray-500 text-3xl">Checkout</h2>
      <div class="w-full h-px bg-gray-500"></div>
      <div class="flex gap-10 huge:flex-row flex-col">
        <div class="flex flex-col gap-10 huge:w-2/3 w-full">
          <h3 class="text-2xl"><span class="mr-5">1</span>Sign Up</h3>
          <p>To purchase this plan and use its benefits in the future, log in to your account or sign up.</p>
          <div class="flex md:flex-row flex-col justify-between items-center gap-3">
            <router-link to="/register"
                         class="md:w-1/2 w-full h-12 flex items-center justify-center text-center bg-black text-white">
              Sign Up
            </router-link>
            <router-link to="/login"
                         class="md:w-1/2 w-full h-12 flex items-center justify-center text-center border border-black bg-white">
              Log in
            </router-link>
          </div>
          <div class="w-full h-px bg-gray-500"></div>
          <h2 class="text-2xl text-gray-500"><span class="mr-5">2</span>Payment</h2>
        </div>
        <div class="flex flex-col items-center gap-3 huge:w-1/3 w-full">
          <div class="huge:border border-gray-500 w-full flex flex-col gap-6 huge:p-6">
            <h2 class="text-2xl">Order summary</h2>
            <div class="flex justify-between">
              <div>
                <p>{{ title }}</p>
                <p class="text-gray-500">Duration: Until canceled</p>
              </div>
              <div>
                <p>{{ price }}</p>
              </div>
            </div>
            <div class="w-full h-px bg-gray-500"></div>
            <div class="flex justify-between">
              <h2 class="text-2xl">Total</h2>
              <div class="flex flex-col items-end">
                <h2 class="text-2xl">{{ price }}</h2>
                <p class="text-gray-500">every month</p>
              </div>
            </div>
            <p>You will be charged monthly until canceled.</p>
          </div>
          <p class="flex gap-3">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path fill-rule="evenodd"
                    d="M9,7 C9,5.346 10.346,4 12,4 C13.654,4 15,5.346 15,7 L15,10 L9,10 L9,7 Z M17.5,10 L16,10 L16,7 C16,4.794 14.206,3 12,3 C9.794,3 8,4.794 8,7 L8,10 L6.5,10 C5.673,10 5,10.673 5,11.5 L5,19.5 C5,20.327 5.673,21 6.5,21 L17.5,21 C18.327,21 19,20.327 19,19.5 L19,11.5 C19,10.673 18.327,10 17.5,10 L17.5,10 Z"></path>
            </svg>
            Secure Checkout
          </p>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<script setup>
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const title = ref(route.query.title);
const price = ref(route.query.price);
price.value = `$${parseFloat(route.query.price || 0).toFixed(2)}`;
</script>