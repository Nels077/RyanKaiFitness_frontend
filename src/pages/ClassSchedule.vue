<template>
  <Header/>
  <section class="bg-black w-full flex flex-col items-center gap-6 p-12">
    <h1 class="text-7xl text-center text-creamy_yellow font-bold">Class Schedule</h1>
    <p class="text-creamy_yellow"> Filter by: Services
      <select name="filter" id="filter" class="bg-black select-none border-none text-center border border-creamy_yellow">
        <option class="bg-transparent" value="all">All</option>
        <option class="bg-transparent" value="boxing">Boxing</option>
        <option class="bg-transparent" value="functional training">Functional Training</option>
        <option class="bg-transparent" value="strength & conditioning">Strength & Conditioning</option>
      </select>
    </p>
  </section>
  <Footer/>
</template>

<script setup>
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
import axios from "@/plugins/axios.js";
import {ref} from "vue";

const optionValue = ref()
</script>