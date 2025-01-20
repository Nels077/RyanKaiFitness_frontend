<template>
  <article class="w-96 min-h-96 text-creamy_yellow z-99 flex flex-col justify-between border border-creamy_yellow rounded-3xl p-8">
    <div class="topPart pt-2">
      <h2 class="flex flex-wrap text-4xl font-bold mb-6">{{ title }}</h2>
      <p class="pb-4" v-if="subTitle">{{subTitle}}</p>
      <div class="titleUnderline w-full h-px bg-creamy_yellow opacity-15"></div>
      <div class="information mt-6 leading-8">
        <div class="workingDays flex">
          <p v-for="(day, index) in workingDays" :key="index">{{ day }}</p>
        </div>
        <p v-if="duration">{{ duration }}</p>
        <p>${{ price }}</p>
      </div>
    </div>
    <button class="w-28 h-10 text-base text-black text-center rounded-full bg-red-600 cursor-pointer">Book Now</button>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
  },
  workingDays: {
    type: Array,
    required: true
  },
  duration: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
})
</script>

<style scoped>
@media (max-width: 500px) {
  h2 {
    font-size: 2rem;
  }
}
</style>