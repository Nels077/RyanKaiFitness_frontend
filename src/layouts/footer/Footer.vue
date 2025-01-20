<template>
  <footer class="w-full flex mid:flex-row flex-col flex-wrap items-start text-creamy_yellow mid:p-20 p-4 bg-zinc-800">
    <div class="leftBlock flex flex-col mid:w-1/2 w-full gap-4 pb-10">
      <h2 class="font-bold mid:text-4xl min:text-3xl text-2xl">Ryan Kai Fitness</h2>
      <p class="mid:w-1/2 w-full text-sm">
        This is a paragraph. Click to edit and add your own text. Add any information you want to share with users.
        Change the font, size or scale to get the look you want.
      </p>
    </div>
    <div class="rightBlock mid:w-2/5 w-full flex flex-wrap items-start justify-between">
      <article class="flex flex-col p-2 gap-4">
        <h2 class="font-bold min:text-4xl text-2xl">Menu</h2>
        <FooterLink label="About" href="/" @click="scrollToSection(router, '/', 'about')"/>
        <FooterLink label="Classes" href="/classes"/>
        <FooterLink label="Membership" href="/membership"/>
        <FooterLink label="Contact" href="/" @click="scrollToSection(router, '/', 'contacts')"/>
      </article>
      <article class="flex flex-col p-2 gap-4">
        <h2 class="font-bold min:text-4xl text-2xl">Policy</h2>
        <FooterLink label="Privacy Policy" href="/privacy-policy"/>
        <FooterLink label="Terms & Conditions" href="/terms-and-conditions"/>
        <FooterLink label="Cookie Policy" href="/cookie-policy"/>
        <FooterLink label="Accessibility Statement" href="/accessibility-statement"/>
      </article>
      <article class="flex flex-col p-2 gap-4">
        <h2 class="font-bold min:text-4xl text-2xl">Social</h2>
        <a href="https://www.facebook.com" class="text-sm hover:text-zinc-500 transition-colors">Facebook</a>
        <a href="https://www.instagram.com" class="text-sm hover:text-zinc-500 transition-colors">Instagram</a>
        <a href="https://www.tiktok.com" class="text-sm hover:text-zinc-500 transition-colors">TikTok</a>
      </article>
    </div>
    <div class="bottomBlock w-full text-sm">
      <p class="mt-14">
        © 2035 by Ryan Kai Fitness. Built on
        <a class="underline hover:text-zinc-500 transition-colors" href="https://www.wix.com/studio">Wix
          Studio
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import FooterLink from "@/layouts/footer/FooterLink.vue";
import {scrollToSection} from "@/stores/scrollToSection.js";
import {useRouter} from "vue-router";

const router = useRouter();
</script>