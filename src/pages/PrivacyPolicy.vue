<template>
  <Header/>
  <section class="bg-black text-creamy_yellow pb-24">
    <h1 class="text-6xl font-bold p-12">Privacy Policy</h1>
    <article class="bg-zinc-800 w-5/6 p-12 flex flex-col gap-10 rounded-r-xl">
      <div class="flex flex-col gap-3">
        <h2 class="text-2xl">A legal disclaimer</h2>
        <p class="text-base leading-6">
          The explanations and information provided on this page are only general and high-level explanations and
          information on how to write your own document of a Privacy Policy. You should not rely on this article as
          legal advice or as recommendations regarding what you should actually do, because we cannot know in advance
          what are the specific privacy policies you wish to establish between your business and your customers and
          visitors. We recommend that you seek legal advice to help you understand and to assist you in the creation of
          your own Privacy Policy.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <h2 class="text-2xl">Privacy Policy - the basics</h2>
        <p class="text-base leading-6">
          Having said that, a privacy policy is a statement that discloses some or all of the ways a website collects,
          uses, discloses, processes, and manages the data of its visitors and customers. It usually also includes a
          statement regarding the website’s commitment to protecting its visitors’ or customers’ privacy, and an
          explanation about the different mechanisms the website is implementing in order to protect privacy.
        </p>
        <p>
          Different jurisdictions have different legal obligations of what must be included in a Privacy Policy. You are
          responsible to make sure you are following the relevant legislation to your activities and location.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <h2 class="text-2xl">What to include in the Privacy Policy</h2>
        <p>
          Generally speaking, a Privacy Policy often addresses these types of issues: the types of information the
          website is collecting and the manner in which it collects the data; an explanation about why is the website
          collecting these types of information; what are the website’s practices on sharing the information with third
          parties; ways in which your visitors an customers can exercise their rights according to the relevant privacy
          legislation; the specific practices regarding minors’ data collection; and much much more.
        </p>
        <p>
          To learn more about this, check out our article “<a class="underline"
                                                              href="https://support.wix.com/en/article/creating-a-privacy-policy">Creating
          a Privacy Policy</a>”.
        </p>
      </div>
    </article>
  </section>
  <Footer/>
</template>

<script setup>
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
</script>