<template>
  <section class="bg-black p-16 flex flex-col gap-12">
    <h1 class="lg:text-8xl mid:text-6xl text-3xl mid:text-start text-center text-creamy_yellow font-bold">Success Stories</h1>
    <div class="w-full flex lg:flex-row flex-col items-center gap-6">
      <SuccessStoriesBlock
          description="Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors."
          posterName="Jake Hunter"
          posterAvatar="https://static.wixstatic.com/media/11062b_8e9c946d31924164a610d78b05d942f2~mv2.jpg"
      />
      <SuccessStoriesBlock
          description="Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors."
          posterName="Ryder Steele"
          posterAvatar="https://static.wixstatic.com/media/11062b_97853dc4e3444a498a4132cf86b272d1~mv2_d_4821_3252_s_4_2.jpg"
      />
      <SuccessStoriesBlock
          description="Use this space to share a testimonial quote about the business, its products or its services. Insert a quote from a real customer or client here to build trust and win over site visitors."
          posterName="Jane Lawson"
          posterAvatar="https://static.wixstatic.com/media/7b083de8701b430799c6217367071520.jpg"
      />
    </div>
  </section>
</template>

<script setup>
import SuccessStoriesBlock from "@/components/successStories/SuccessStoriesBlock.vue"
</script>