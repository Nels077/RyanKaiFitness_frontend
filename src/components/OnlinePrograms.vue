<template>
  <div class="onlineProgramsSection justify-between flex lg:flex-row flex-col w-full p-16 bg-red-600 gap-6">
    <div class="leftPart w-4/9 flex flex-col justify-between gap-6">
      <h1 class="mid:text-8xl text-6xl font-bold">Online<br>Programs</h1>
      <div class="loadingPiece w-full flex flex-col gap-6">
        <picture>
          <img fetchpriority="high" class="w-2xl object-cover animate-slow-spin"
               src="https://static.wixstatic.com/media/c837a6_1b426c722ced439385d63725de21c3ac~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ellipse%204.png"
               alt="Loading..."
          >
        </picture>
        <div class="loadingUnderline w-full h-px bg-black"></div>
        <p class="mid:text-5xl text-2xl">Select your plan and start achieving</p>
      </div>
      <router-link :to="'/classes'"
                   class="w-60 flex items-center justify-center text-center text-black-900 border border-black rounded-4xl p-1 font-bold">
        <svg data-bbox="40 20 120.851 160" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="20"
             width="20" data-type="shape">
          <g>
            <path d="M160.851 84h-49.439l10.986-64L40 116h49.44l-10.987 64z"></path>
          </g>
        </svg>
        Get started
      </router-link>
    </div>
    <div class="rightPart w-4/9">
      <img loading="lazy" class="object-cover w-full rounded-3xl"
           src="https://static.wixstatic.com/media/c837a6_7543e8bf2f7d4aad83fc2ba2a5d59ceb~mv2.jpeg/v1/fill/w_889,h_931,fp_0.36_0.43,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AdobeStock_652723396.jpeg"
           alt="Online Programs picture">
    </div>
  </div>
</template>