<template>
  <section
      class="bg-black flex lg:flex-row flex-col justify-between lg:items-start items-center lg:p-24 mid:p-20 md:p-16 p-12 gap-12">
    <div class="lg:w-2/5 w-full flex flex-col gap-3">
      <h1 class="font-bold lg:text-8xl mid:text-6xl md:text-5xl text-4xl text-blue-200 lg:text-start text-center">
        Classes</h1>
      <h2 class="lg:text-5xl mid:text-4xl md:text-3xl text-2xl text-creamy_yellow lg:text-start text-center">Choose from
        a range of workouts for maximum muscle growth</h2>
    </div>
    <div class="lg:w-3/5 w-full flex flex-col gap-6">
      <ClassBlock class="w-full lg:p-14"
                  v-for="fitnessClass in fitnessClasses"
                  :key="fitnessClass.id"
                  :title="fitnessClass.title"
                  :subTitle="fitnessClass.subtitle"
                  :workingDays="fitnessClass.working_days"
                  :price="fitnessClass.price"
      />
    </div>
  </section>
</template>

<script setup>
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