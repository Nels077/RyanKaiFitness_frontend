<template>
  <Header/>
  <div class="classesSection w-full bg-black color-creamy_yellow flex flex-col items-center gap-12 p-12">
    <h1 class="font-bold text-creamy_yellow text-center text-7xl mt-12">Classes</h1>
    <div class="classesBlock w-full flex flex-wrap items-center justify-center gap-8">
      <ClassBlock
          title="Strength & Conditioning"
          :working-days="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
          duration="Duration Varies"
          :price="13"
      />
      <ClassBlock
          title="Boxing"
          :working-days="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
          duration="1hr 30min"
          :price="13"
      />
      <ClassBlock
          title="Functional Training"
          :working-days="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
          duration="1hr 30min"
          :price="13"
      />
    </div>
  </div>
  <Footer/>
</template>

<script setup>
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
import ClassBlock from "@/pages/classes/ClassBlock.vue";
</script>