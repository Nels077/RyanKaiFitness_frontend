<template>
  <Header/>
  <section class="membershipSection">
    <h1>Membership Plans</h1>
    <div class="plansBlock">
      <MembershipPlan
          v-for="membership in memberships"
          :key="membership.id"
          :title="membership.title"
          :price="membership.price"
          :description="membership.description"
          :benefits="membership.benefits"
      />
    </div>
  </section>
  <Footer/>
</template>

<script setup>
import {ref, onMounted} from "vue";
import Header from "@/layouts/header/Header.vue";
import Footer from "@/layouts/footer/Footer.vue";
import MembershipPlan from "@/pages/membership/MembershipPlan.vue";
import {$axios} from "@/plugins/axios";

const memberships = ref([]);

const fetchMemberships = async () => {
  try {
    const response = await $axios.get("memberships");
    memberships.value = response.data;
  } catch (error) {
    console.error("Failed to fetch memberships:", error.response?.data || error.message);
  }
};

onMounted(fetchMemberships);
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
