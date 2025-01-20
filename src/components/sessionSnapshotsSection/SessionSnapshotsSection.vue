<template>
  <section class="bg-black pb-20">
    <div class="huge:p-20 lg:p-18 mid:p-16 md:p-12 p-10 flex items-center justify-between">
      <h1 class="text-creamy_yellow huge:text-8xl lg:text-7xl mid:text-6xl md:text-4xl text-3xl font-bold">Session
        Snapshots</h1>
      <div class="flex items-center gap-4">
        <SocialNetworkBtn
            src="https://static.wixstatic.com/media/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png"
            href="https://www.instagram.com"
        />
        <SocialNetworkBtn
            src="https://static.wixstatic.com/media/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f4e3e7f537ff4762a1914aa14e3e36b9~mv2.png"
            href="https://www.facebook.com"
        />
        <SocialNetworkBtn
            src="https://static.wixstatic.com/media/11062b_7edd292d29b34c309100535a26dc5033~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_7edd292d29b34c309100535a26dc5033~mv2.png"
            href="https://www.tiktok.com"
        />
      </div>
    </div>
    <Carousel v-bind="config">
      <Slide v-for="image in images" :key="image.id" class="p-3">
        <img class="w-full h-full object-cover" :src="image.url" alt="image"/>
      </Slide>

      <template #addons>
        <Navigation/>
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import SocialNetworkBtn from "@/components/sessionSnapshotsSection/SocialNetworkBtn.vue";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

const carouselPictures = ["https://static.wixstatic.com/media/c837a6_85b7fb6289b94d7c82a87863d83c9935~mv2.jpeg/v1/fit/w_1128,h_921,q_90/c837a6_85b7fb6289b94d7c82a87863d83c9935~mv2.jpeg", "https://static.wixstatic.com/media/c837a6_85b7fb6289b94d7c82a87863d83c9935~mv2.jpeg/v1/fit/w_1128,h_921,q_90/c837a6_85b7fb6289b94d7c82a87863d83c9935~mv2.jpeg", "https://static.wixstatic.com/media/c837a6_f43243d7c0ab4edeba02b22504405dc5~mv2.jpeg/v1/fit/w_1381,h_921,q_90/c837a6_f43243d7c0ab4edeba02b22504405dc5~mv2.jpeg", "https://static.wixstatic.com/media/c837a6_7af07c98e14740ad83103304936fb4fa~mv2.jpeg/v1/fit/w_1382,h_921,q_90/c837a6_7af07c98e14740ad83103304936fb4fa~mv2.jpeg", "https://static.wixstatic.com/media/c837a6_12700397e8634160a65c6480bf30649a~mv2.jpeg/v1/fit/w_1746,h_921,q_90/c837a6_12700397e8634160a65c6480bf30649a~mv2.jpeg", "https://static.wixstatic.com/media/c837a6_4e1d0e4be2524187a4d13364d58b4c87~mv2.jpeg/v1/fit/w_1380,h_921,q_90/c837a6_4e1d0e4be2524187a4d13364d58b4c87~mv2.jpeg", "https://static.wixstatic.com/media/c837a6_223c94a090274be09ecfd2b7e5304020~mv2.jpeg/v1/fit/w_1746,h_921,q_90/c837a6_223c94a090274be09ecfd2b7e5304020~mv2.jpeg"];

const images = Array.from({length: carouselPictures.length - 1}, (_, index) => ({
  id: index + 1,
  url: carouselPictures[index + 1],
}));

const config = {
  height: '50%',
  itemsToShow: 2,
  wrapAround: true,
};
</script>