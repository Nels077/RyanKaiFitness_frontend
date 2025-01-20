<template>
  <section class="bg-black flex lg:flex-row flex-col justify-between lg:items-start items-center lg:p-24 mid:p-20 md:p-16 p-12 gap-12">
    <div class="lg:w-2/5 w-full flex flex-col gap-3">
      <h1 class="font-bold lg:text-8xl mid:text-6xl md:text-5xl text-4xl text-blue-200 lg:text-start text-center">Classes</h1>
      <h2 class="lg:text-5xl mid:text-4xl md:text-3xl text-2xl text-creamy_yellow lg:text-start text-center">Choose from a range of workouts for maximum muscle growth</h2>
    </div>
    <div class="lg:w-3/5 w-full flex flex-col gap-6">
      <ClassBlock class="w-full lg:p-14"
          title="Strength & Conditioning"
          subTitle="Build Muscle, Boost Performance, Improve Stability"
          :working-days="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
          :price="13"
      />
      <ClassBlock class="w-full lg:p-14"
          title="Boxing"
          subTitle="Cardio Blast, Technique Training, Full-Body Workout"
          :working-days="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
          :price="13"
      />
      <ClassBlock class="w-full lg:p-14"
          title="Functional Training"
          subTitle="Real-World Movements, Flexibility & Mobility, Balance & Coordination"
          :working-days="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
          :price="13"
      />
    </div>
  </section>
</template>

<script setup>
import ClassBlock from "@/pages/classes/ClassBlock.vue";
</script>