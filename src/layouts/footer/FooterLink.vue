<template>
  <router-link :to="href" class="hover:text-zinc-500 transition-colors text-sm">
    {{ label }}
  </router-link>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>