<template>
  <article class="text-creamy_yellow border border-creamy_yellow rounded-3xl">
    <div class="topPart flex flex-col items-center gap-4 p-12">
      <h2 class="text-center text-3xl">{{ title }}</h2>
      <div class="priceBlock flex flex-col items-center">
        <p class="flex items-start text-7xl"><span class="text-xl">$</span>{{ price }}</p>
        <p class="leading-10 text-sm">Every month</p>
        <p class="text-base">{{ description }}</p>
      </div>
      <router-link :to="{
        path: '/membership-checkout',
        query: {title, price}
      }"
                   class="w-64 h-10 flex items-center justify-center text-center text-black text-base cursor-pointer rounded-3xl bg-red-600 mt-12">
        Select
      </router-link>
    </div>
    <div class="bottomPart min-h-62 p-5 border-t border-creamy_yellow">
      <ul class="flex flex-col items-center gap-4">
        <li class="flex flex-wrap text-center text-sm" v-for="(benefit, index) in benefits" :key="index">{{
            benefit
          }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  benefits: {
    type: Array,
    required: true, 
  },
});
</script>