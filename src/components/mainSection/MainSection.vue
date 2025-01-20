<template>
  <div class="mainSection w-full bg-black p-6">
    <h1 class="text-blue-200 font-bold text-8xl md:text-8xl mid:text-9xl lg:text-[13rem]">Push <span
        class="text-creamy_yellow">Your Limits</span></h1>
    <p class="text-creamy_yellow text-2xl md:text-2xl mid:text-4xl lg:text-5xl">Personal Training for Powerful
      Results</p>
    <div class="mainImgPiece flex lg:flex-row flex-col gap-6 justify-center lg:items-start items-center mt-4">
      <img fetchpriority="high" class="w-4/5 object-cover rounded-4xl"
           src="https://static.wixstatic.com/media/c837a6_67435fd22dfc48ca8550b8b32e17328f~mv2.jpeg/v1/fill/w_1532,h_999,fp_0.33_0.26,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_730093972.jpeg"
           alt="Main Section image"
      >
      <div
          class="bookLoading bg-red-600 lg:w-1/5 w-4/5 rounded-4xl text-white flex flex-col items-center justify-center gap-3 p-4">
        <div class="rotatingImg w-full h-[350px] flex items-center justify-center relative">
          <RotateImgLine class="left-0"/>
          <RotateImgLine class="right-0"/>
          <RotateImgLine class="top-5 rotate-90"/>
          <RotateImgLine class="bottom-6 rotate-90"/>
          <img fetchpriority="high" class="w-3/5 object-cover animate-slow-spin z-1 "
               src="https://static.wixstatic.com/media/c837a6_1b426c722ced439385d63725de21c3ac~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ellipse%204.png"
               alt="Loading..."
          >
        </div>
        <div class="bookLine w-full h-px bg-black"></div>
        <router-link :to="'class-schedule'"
                     class="flex items-center text-black font-bold gap-1 hover:bg-black-500 w-full">
          <svg data-bbox="40 20 120.851 160" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="20"
               width="20" data-type="shape">
            <g>
              <path d="M160.851 84h-49.439l10.986-64L40 116h49.44l-10.987 64z"></path>
            </g>
          </svg>
          Book a Class
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import RotateImgLine from "@/components/mainSection/RotateImgLine.vue"
</script>
