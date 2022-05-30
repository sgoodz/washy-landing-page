<script setup>
import { ref } from "vue";
const submitted = ref(false);
const formData = ref({});
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000));
  submitted.value = true;
};
</script>

<template>
  <FormKit
    type="form"
    v-model="formData"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Submit"
    @submit="submitHandler"
  >
    <FormKit
      type="text"
      name="name"
      label="Your name"
      placeholder="Jane Doe"
      help="What do people call you?"
      validation="required"
    />
    <FormKit
      type="text"
      name="email"
      label="Your email"
      placeholder="jane@example.com"
      help="What email should we use?"
      validation="required|email"
    />
    <FormKit
      type="number"
      name="phone"
      label="Your Number"
      placeholder="07567..."
      help="Your phone number"
      validation="required"
    />
  </FormKit>
  <div v-if="submitted">
    <h2>Submission successful!</h2>
  </div>
  <pre wrap>{{ formData }}</pre>
</template>

<style></style>
