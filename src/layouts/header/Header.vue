<template>
  <header class="w-full bg-black text-white relative">
    <div
        v-if="menuStore.isMenuOpen"
        class="menuModal w-full h-screen bg-black-900 flex flex-col bg-black z-9999 absolute p-5 gap-5"
    >
      <svg
          @click="menuStore.closeMenu"
          class="closeBtn"
          data-bbox="33 33 133.333 133.333"
          viewBox="0 0 200 200"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
      >
        <g>
          <path
              d="M166.333 38.892 160.442 33 99.667 93.775 38.892 33 33 38.892l60.775 60.775L33 160.442l5.892 5.891 60.775-60.775 60.775 60.775 5.891-5.891-60.775-60.775 60.775-60.775Z"
              fill-rule="evenodd"
              fill="rgba(255, 252, 203, 1)"
          />
        </g>
      </svg>
      <div class="modalNavbar w-full flex flex-col gap-6">
        <HeaderLink label="About" href="/" @click="scrollToSection(router, '/', 'about'); menuStore.toggleMenu"/>
        <HeaderLink label="Classes" href="/classes"/>
        <HeaderLink label="Membership" href="/membership"/>
        <HeaderLink label="Contact" href="/" @click="scrollToSection(router, '/', 'contacts'); menuStore.toggleMenu"/>
      </div>
    </div>
    <div
        v-if="bookStore.isBookOpen"
        class="bookModalBg w-full h-screen top-0 absolute z-9997"
        @click="bookStore.closeBook"
    ></div>
    <div
        v-if="bookStore.isBookOpen"
        class="bookModal w-96 bg-black h-screen top-0 right-0 absolute p-4 z-9998"
    >
      <div class="modalTopPart flex items-center justify-between border-b border-creamy_yellow">
        <h2 class="text-creamy_yellow pb-4 text-base"><span>Cart </span>({{ cartCounter }} items)</h2>
        <svg
            @click="bookStore.closeBook"
            class="closeBtn cursor-pointer"
            data-bbox="33 33 133.333 133.333"
            viewBox="0 0 200 200"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            data-type="shape"
        >
          <g>
            <path
                d="M166.333 38.892 160.442 33 99.667 93.775 38.892 33 33 38.892l60.775 60.775L33 160.442l5.892 5.891 60.775-60.775 60.775 60.775 5.891-5.891-60.775-60.775 60.775-60.775Z"
                fill-rule="evenodd"
                fill="rgba(255, 252, 203, 1)"
            />
          </g>
        </svg>
      </div>
      <div class="modalItems w-full flex flex-col items-center">
        <h2 class="text-creamy_yellow" v-if="cartCounter == 0">Your cart is empty.</h2>

      </div>
    </div>

    <div class="topPart flex items-center justify-between mid:p-2 p-0 gap-1.5">
      <div class="loginBtn mid:w-4/5 w-full h-10 p-2 flex items-center justify-between bg-creamy_yellow text-black mid:rounded-full rounded-none">
        <p class="ml-4 mr-4">10% off online booking! Use the code STRONG</p>
        <router-link to="/login" class="ml-4 mr-4">Log In</router-link>
      </div>
      <router-link :to="'class-schedule'"
                   class="bookBtn w-1/5 h-10 gap-2 p-2 rounded-full lg:flex mid:flex hidden items-center bg-creamy_yellow text-black font-bold cursor-pointer transition-[.3s] hover:bg-[#FF3134]">
        <p class="ml-3">Book a Class</p>
        <svg class="bookArrow transition-[.3s]" data-bbox="19.117 18.918 161.766 162.164" viewBox="0 0 200 200"
             height="20" width="20"
             xmlns="http://www.w3.org/2000/svg" data-type="shape">
          <g>
            <path
                d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z"></path>
          </g>
        </svg>
      </router-link>
    </div>
    <div class="bottomPart flex items-center justify-between p-2">
      <router-link to="/" class="goToHomeBtn text-creamy_yellow lg:text-5xl mid:text-4xl text-3xl font-bold">
        Ryan Kai <span class="text-blue-200">Fitness</span>
      </router-link>
      <div class="navbar flex items-center">
        <nav class="flex md:hidden hidden lg:flex items-center justify-center gap-8 mr-8">
          <HeaderLink label="About" href="/" @click="scrollToSection(router, '/', 'about')"/>
          <HeaderLink label="Classes" href="/classes"/>
          <HeaderLink label="Membership" href="/membership"/>
          <HeaderLink label="Contact" href="/" @click="scrollToSection(router, '/', 'contacts')"/>
        </nav>
        <p
            @click="bookStore.toggleBook"
            class="bookCounter flex items-center justify-center bg-blue-200 text-black text-center cursor-pointer min-w-6 h-6 rounded-full"
        >
          {{ cartCounter }}
        </p>
        <svg
            @click="menuStore.toggleMenu"
            class="burgerMenu md:flex flex mid:flex lg:hidden ml-6 color-[#FF3134]"
            data-bbox="20.5 54 159 92"
            viewBox="0 0 200 200"
            height="40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
            data-type="shape"
            fill="creamy_yellow"
        >
          <g>
            <path fill="rgba(255, 252, 203, 1)"
                d="M179.5 54v9.517h-159V54h159z"
            />
            <path
                fill="rgba(255, 252, 203, 1)"
                d="M179.5 95.241v9.517h-159v-9.517h159z"
            />
            <path
                fill="rgba(255, 252, 203, 1)"
                d="M179.5 136.483V146h-159v-9.517h159z"
            />
          </g>
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useMenuStore} from "@/stores/menuStore.js";
import HeaderLink from "@/layouts/header/HeaderLink.vue";
import {useBookStore} from "@/stores/bookStore.js";
import {scrollToSection} from "@/stores/scrollToSection.js";
import {ref} from "vue";

const menuStore = useMenuStore();
const bookStore = useBookStore();
const cartCounter = ref(0);

const router = useRouter();
</script>

<style scoped>
header {
  border-bottom: 1px solid rgba(255, 252, 203, .4);
}

.bookBtn:hover .bookArrow {
  transform: rotate(360deg);
}

.bookModalBg {
  background-color: rgba(255, 252, 203, .3);
}

.modalTopPart span {
  font-weight: bold;
  font-size: 1.3rem;
}

.modalItems > h2 {
  font-size: 1.3rem;
  margin-top: 10rem;
}

@media (max-width: 500px) {
  .loginBtn > * {
    font-size: 0.7rem;
  }

  .goToHomeBtn {
    font-size: 1.5rem;
  }

  .bookModal {
    width: 100%;
  }
}
</style>