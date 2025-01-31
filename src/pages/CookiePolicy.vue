<template>
  <Header/>
  <section class="bg-black text-creamy_yellow pb-24">
    <h1 class="text-6xl font-bold p-12">Cookie Policy</h1>
    <article class="bg-zinc-800 w-5/6 p-12 flex flex-col gap-10 rounded-r-xl">
      <div class="flex flex-col gap-3">
        <h2 class="text-2xl">A legal disclaimer</h2>
        <p class="text-base leading-6">
          The explanations and information provided on this page are only general and high-level explanations and
          information on how to write your own document of a Cookie Policy. You should not rely on this article as legal
          advice or as recommendations regarding what you should actually do, because we cannot know in advance what are
          your specific cookie-related practices. We recommend that you seek legal advice to help you understand and to
          assist you in the creation of your own Cookie Policy.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <h2 class="text-2xl">Cookie Policy - the basics</h2>
        <p class="text-base leading-6">
          Having said that, in certain jurisdictions, you must inform your site visitors, in case your website tracks
          personal information through the use of cookies or similar technologies. In these jurisdictions, the local
          regulation often includes an obligation to be clear about what tracking tools (e.g. cookies, flash cookies,
          web beacons, etc.,) your website deploys, and what types of personal information these technologies gather.
          These policies often also tell the website visitors what is the website doing with the information that was
          collected.
        </p>
        <p>
          It's important to note that third-party services placing cookies or utilizing other tracking technologies
          through Wix´s services, may have their own policies regarding how they collect and store information. As these
          are external services, such practices are not covered by the Wix Privacy Policy.
        </p>
        <p>
          To learn more about this, check out our article "
          <a class="underline"
             href="https://support.wix.com/en/article/cookies-and-your-wix-site">
            Cookies and Your Wix Site
          </a>”.
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