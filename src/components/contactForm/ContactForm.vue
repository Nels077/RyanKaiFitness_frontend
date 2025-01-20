<template>
  <div class="contactUsSection w-full flex bg-black text-creamy_yellow">
    <div class="infoBlock flex flex-col">
      <h1 class="font-bold">Get in touch</h1>
      <p>
        This is the space to share the business's contact information. Let people know when the business is available,
        how long it will take to get a response, and what the best ways are to get in touch. Remind readers that the
        business is happy to answer their questions, and encourage them to reach out.
      </p>
      <p>123-456-7890<br>info@mysite.com</p>
      <p>500 Terry Francine St.<br>San Francisco, CA 94158</p>
    </div>
    <form @submit.prevent="handleSubmit" class="max-w-3xl space-y-6 bg-zinc-800">
      <div class="infoContainer wrap-wrap gap-6">
        <ContactFormInput
            label="First name *"
            id="firstname"
            v-model="form.firstname"
        />
        <ContactFormInput
            label="Last name *"
            id="lastname"
            v-model="form.lastname"
        />
        <ContactFormInput
            label="Email *"
            id="email"
            type="email"
            v-model="form.email"
        />
        <ContactFormInput
            label="Subject"
            id="subject"
            v-model="form.subject"
        />
      </div>
      <div class="inputParent flex flex-col">
        <label class="block text-sm font-medium">Message *</label>
        <textarea id="message" v-model="form.message"
                  class="w-full text-creamy_yellow bg-input_bg font-bold p-2 focus:outline-none focus:border-blue-500"
                  required>
        </textarea>
      </div>
      <button id="SubmitBtn" type="submit"
              class="w-full bg-creamy_yellow text-black py-2 px-4 rounded hover:bg-zinc-500 transition">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import ContactFormInput from "./ContactFormInput.vue";

const form = reactive({
  firstname: "",
  lastname: "",
  email: "",
  subject: "",
  message: "",
});

function handleSubmit() {
  console.log("Form Data:", {...form});
}
</script>
<style scoped>
.contactUsSection {
  justify-content: space-evenly;
  gap: 7rem;
  padding: 3rem;
}

.infoBlock {
  width: 45%;
  gap: 2rem;
}

.infoBlock h1 {
  font-size: 7rem;
}

form {
  width: 45%;
  padding: 2.7rem;
  border-radius: 1.5rem;
}

#SubmitBtn {
  border-radius: 1.5rem;
}

.inputParent {
  gap: 5px;
  padding: 1rem;
}

.inputParent textarea {
  border-radius: .5rem;
}

@media (max-width: 1600px) {
  .infoBlock h1 {
    font-size: 4.2rem;
  }
}

@media (max-width: 1000px) {
  .contactUsSection {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .infoBlock, form {
    width: 90%;
  }
}

@media (max-width: 620px) {
  .infoBlock h1 {
    font-size: 2.5rem;
  }
  form {
    padding: 1rem;
  }
}
</style>