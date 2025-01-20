<template>
  <Header/>
  <section class="membershipSection">
    <h1>Membership Plans</h1>
    <div class="plansBlock">
      <MembershipPlan
          title="Premium Plan"
          :price="79"
          description="Personalized Fitness Experience"
          :benefits="[
          'All Basic Plan Features',
          'Personalized Training Programs',
          'One-on-One Coaching Sessions',
          'Access to Specialized Group Classes'
        ]"
      />
      <MembershipPlan
          title="Basic Plan"
          :price="49"
          description="Essential Fitness Access"
          :benefits="[
          'Access to Group Sessions',
          'Standard Workout Programs',
          'Basic Fitness Resources',
        ]"
      />
      <MembershipPlan
          title="VIP Plan"
          :price="129"
          description="Ultimate Fitness Package"
          :benefits="[
          'All Premium Plan Features',
          'Unlimited One-on-One Coaching Sessions',
          'Exclusive Workshops and Advanced Group Sessions',
          'Nutrition Consultations',
          'Priority Support'
        ]"
      />
    </div>
  </section>
  <Footer/>
</template>

<script setup>
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
import MembershipPlan from "@/pages/membership/MembershipPlan.vue";
</script>

<style scoped>
.membershipSection {
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  gap: 3rem;
}

h1 {
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  color: rgba(255, 252, 203, 1);
}

.plansBlock {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

@media (max-width: 750px) {
  h1 {
    font-size: 3rem;
  }
}
</style>
