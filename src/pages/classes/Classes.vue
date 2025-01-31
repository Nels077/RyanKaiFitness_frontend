<template>
  <Header/>
  <div class="classesSection w-full bg-black color-creamy_yellow flex flex-col items-center gap-12 p-12">
    <h1 class="font-bold text-creamy_yellow text-center text-7xl mt-12">Classes</h1>
    <div class="classesBlock w-full flex flex-wrap items-center justify-center gap-8">
      <ClassBlock
          v-for="fitnessClass in fitnessClasses"
          :key="fitnessClass.id"
          :title="fitnessClass.title"
          :workingDays="fitnessClass.working_days"
          :duration="fitnessClass?.duration || 'Duration Varies'"
          :price="fitnessClass.price"
      />
    </div>
  </div>
  <Footer/>
</template>

<script setup>
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
import ClassBlock from "@/pages/classes/ClassBlock.vue";
import {$axios} from "@/plugins/axios";
import {onMounted, ref} from "vue";

const fitnessClasses = ref([]);

const formatWorkingDays = (days) => {
  if (!days) return [];
  if (Array.isArray(days)) return days;
  return days.split(",").map(day => day.trim());
};

const fetchFitnessClasses = async () => {
  try {
    const response = await $axios.get("fitnessClasses");

    if (response.data && Array.isArray(response.data)) {
      fitnessClasses.value = response.data.map((fitnessClass) => ({
        ...fitnessClass,
        working_days: formatWorkingDays(fitnessClass?.working_days),
      }));
    } else {
      console.error("Invalid API response format:", response.data);
    }
  } catch (error) {
    console.error("Failed to fetch fitnessClasses:", error.response?.data || error.message);
  }
};

onMounted(fetchFitnessClasses);

</script>