<template>
  <article class="w-144 flex flex-col gap-3">
    <h2 class="huge:text-5xl mid:text-4xl text-2xl font-bold">{{ title }}</h2>
    <p class="huge:text-base">{{ description }}</p>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>