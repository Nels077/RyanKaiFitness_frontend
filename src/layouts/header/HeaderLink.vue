<template>
  <router-link @click="menuStore.closeMenu" :to="href"
               class="flex lg:text-base text-6xl text-creamy_yellow font-bold hover:text-zinc-500 transition-colors items-center">
    {{ label }}
  </router-link>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
});
import {useMenuStore} from "@/stores/menuStore.js";

const menuStore = useMenuStore();
</script>