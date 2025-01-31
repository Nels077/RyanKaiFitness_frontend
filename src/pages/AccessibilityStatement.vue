<template>
  <Header/>
  <section>
    <article class="text-black bg-creamy_yellow p-20 flex flex-col gap-8">
      <p class="md:w-1/2 w-full">
        The purpose of the following template is to assist you in writing your accessibility statement. Please note that
        you are responsible for ensuring that your site's statement meets the requirements of the local law in your area
        or region.
      </p>
      <p class="md:w-1/2 w-full">
        *Note: This page currently has several sections. Once you complete editing the Accessibility Statement below,
        you need to delete this section.
      </p>
      <p class="md:w-1/2 w-full">
        To learn more about this, check out our article “<a class="underline"
          href="https://support.wix.com/en/article/accessibility-adding-an-accessibility-statement-to-your-site">
        Accessibility: Adding an Accessibility Statement to Your Site
      </a>”.
      </p>
    </article>
    <article class="bg-black text-creamy_yellow p-16 flex flex-col gap-24">
      <div class="flex flex-col gap-8 md:w-1/2 w-full">
        <h1 class="md:text-6xl text-4xl font-bold">Accessibility Statement</h1>
        <p>
          This statement was last updated on [enter relevant date].
        </p>
        <p>
          We at [enter organization / business name] are working to make our site [enter site name and address]
          accessible to people with disabilities.
        </p>
      </div>
      <div class="flex flex-col gap-8 md:w-1/2 w-full">
        <h2 class="font-bold text-3xl">
          What web accessibility is
        </h2>
        <p>
          An accessible site allows visitors with disabilities to browse the site with the same or a similar level of
          ease and enjoyment as other visitors. This can be achieved with the capabilities of the system on which the
          site is operating, and through assistive technologies.
        </p>
      </div>
      <div class="flex flex-col gap-8 md:w-1/2 w-full">
        <h2 class="font-bold text-3xl">
          Accessibility adjustments on this site
        </h2>
        <p>
          We have adapted this site in accordance with WCAG [2.0 / 2.1 / 2.2 - select relevant option] guidelines, and
          have made the site accessible to the level of [A / AA / AAA - select relevant option]. This site's contents
          have been adapted to work with assistive technologies, such as screen readers and keyboard use. As part of
          this effort, we have also [remove irrelevant information]:
        </p>
        <ul>
          <li>Used the Accessibility Wizard to find and fix potential accessibility issues</li>
          <li>Set the language of the site</li>
          <li>Set the content order of the site’s pages</li>
          <li>Defined clear heading structures on all of the site’s pages</li>
          <li>Added alternative text to images</li>
          <li>Implemented color combinations that meet the required color contrast</li>
          <li>Reduced the use of motion on the site</li>
          <li>Ensured all videos, audio, and files on the site are accessible</li>
        </ul>
      </div>
      <div class="flex flex-col gap-8 md:w-1/2 w-full">
        <h2 class="font-bold text-3xl">
          Declaration of partial compliance with the standard due to third-party content [only add if relevant]
        </h2>
        <p>
          The accessibility of certain pages on the site depend on contents that do not belong to the organization, and
          instead belong to [enter relevant third-party name]. The following pages are affected by this: [list the URLs
          of the pages]. We therefore declare partial compliance with the standard for these pages.
        </p>
      </div>
      <div class="flex flex-col gap-8 md:w-1/2 w-full">
        <h2 class="font-bold text-3xl">
          Accessibility arrangements in the organization [only add if relevant]
        </h2>
        <p>
          [Enter a description of the accessibility arrangements in the physical offices / branches of your site's
          organization or business. The description can include all current accessibility arrangements - starting from
          the beginning of the service (e.g., the parking lot and / or public transportation stations) to the end (such
          as the service desk, restaurant table, classroom etc.). It is also required to specify any additional
          accessibility arrangements, such as disabled services and their location, and accessibility accessories (e.g.
          in audio inductions and elevators) available for use]
        </p>
      </div>
      <div class="flex flex-col gap-8 md:w-1/2 w-full">
        <h2 class="font-bold text-3xl">
          Requests, issues and suggestions
        </h2>
        <p>
          If you find an accessibility issue on the site, or if you require further assistance, you are welcome to
          contact us through the organization's accessibility coordinator:
        </p>
        <ul>
          <li>[Name of the accessibility coordinator]</li>
          <li>[Telephone number of the accessibility coordinator]</li>
          <li>[Email address of the accessibility coordinator]</li>
          <li>[Enter any additional contact details if relevant / available]</li>
        </ul>
      </div>
    </article>
  </section>
  <Footer/>
</template>

<script setup>
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
</script>