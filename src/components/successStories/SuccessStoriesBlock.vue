<template>
  <article class="flex flex-col gap-6 border border-creamy_yellow p-10 text-creamy_yellow rounded-2xl">
    <p class="text-base">{{ description }}</p>
    <div class="flex gap-3 items-center">
      <img :src="posterAvatar" :alt="posterName+' avatar'" class="w-16 h-16 object-cover rounded-full">
      <h5 class="font-bold">{{ posterName }}</h5>
    </div>
  </article>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    required: true,
  },
  posterName: {
    type: String,
    required: true,
  },
  posterAvatar: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>

</style>