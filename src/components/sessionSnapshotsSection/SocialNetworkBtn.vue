<template>
  <a :href="href" target="_blank" class="huge:w-20 lg:w-18 mid:w-14 md:w-12 w-10 huge:h-20 lg:h-18 md:h-12 h-10 bg-white rounded-full flex items-center justify-center">
    <img :src="src" class="bg-black w-full h-full object-cover rounded-full">
  </a>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  }
})
</script>