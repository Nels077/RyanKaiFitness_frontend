<template>
  <Header/>
  <MainSection/>
  <About id="about"/>
  <ClassesSection/>
  <SessionSnapshotsSection/>
  <SuccessStoriesSection/>
  <TrainingServicesSection/>
  <OnlinePrograms/>
  <ContactForm id="contacts"/>
  <Footer/>
</template>

<script setup>
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
import MainSection from "@/components/mainSection/MainSection.vue";
import ContactForm from "@/components/contactForm/ContactForm.vue"
import About from "@/components/About.vue";
import OnlinePrograms from "@/components/OnlinePrograms.vue";
import TrainingServicesSection from "@/components/trainingServices/TrainingServicesSection.vue";
import SessionSnapshotsSection from "@/components/sessionSnapshotsSection/SessionSnapshotsSection.vue";
import SuccessStoriesSection from "@/components/successStories/SuccessStoriesSection.vue"
import ClassesSection from "@/components/ClassesSection.vue";
</script>
