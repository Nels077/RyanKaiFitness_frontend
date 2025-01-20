<template>
  <div class="trainingServicesSection p-16 bg-blue-200 flex flex-col gap-12">
    <h1 class="flex text-center items-center font-bold gap-6 huge:text-9xl lg:text-6xl mid:text-3xl md:text-2xl text-2xl">
      <div class="arrowBlock bg-creamy_yellow flex items-center justify-center rounded-full huge:p-8 lg:p-6 p-3 huge:w-52 lg:w-20 mid:w-16 w-12 huge:h-52 lg:h-20 mid:h-16 h-12 rotate-90">
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.117 18.918 161.766 162.164"
             viewBox="19.117 18.918 161.766 162.164" xmlns="http://www.w3.org/2000/svg"
             data-type="shape" aria-hidden="true" fill="red">
          <g>
            <path
                d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z"></path>
          </g>
        </svg>
      </div>
      Training Services
    </h1>
    <div class="servicesPiece flex flex-wrap gap-16">
      <TrainingServiceBlock title="One-on-One Personal Training"
                            description="Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book."
      />
      <TrainingServiceBlock title="Group Fitness Sessions"
                            description="Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book."
      />
      <TrainingServiceBlock title="Online Coaching"
                            description="Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book."
      />
      <TrainingServiceBlock title="Corporate Wellness Programs"
                            description="Describe the service and how customers or clients can benefit from it. This is the place to add a short description with relevant details, like pricing, duration and how to book."
      />
    </div>
  </div>
</template>

<script setup>
import TrainingServiceBlock from "@/components/trainingServices/TrainingServiceBlock.vue";
</script>