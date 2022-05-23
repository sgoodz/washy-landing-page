<template>
  <div
    class="bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-6"
  >
    <h1 class="text-xl font-bold text-white">Register with Washy</h1>

    <FormWizard :validation-schema="validationSchema" @submit="onSubmit">
      <FormStep>
        <Field name="fullName" type="text" placeholder="Type your Full name" />
        <ErrorMessage name="fullName" />

        <Field name="email" type="email" placeholder="Type your email" />
        <ErrorMessage name="email" />
      </FormStep>

      <FormStep>
        <Field
          name="password"
          type="password"
          placeholder="Type a strong one"
        />
        <ErrorMessage name="password" />

        <Field
          name="confirmPass"
          type="password"
          placeholder="Confirm your password"
        />
        <ErrorMessage name="confirmPass" />
      </FormStep>

      <FormStep>
        <Field name="favoriteDrink" as="select">
          <option>Select a drink</option>
          <option value="coffee">Coffee</option>
          <option value="tea">Tea</option>
          <option value="soda">Soda</option>
        </Field>
        <ErrorMessage name="favoriteDrink" />
      </FormStep>
    </FormWizard>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import FormWizard from "./FormWizard.vue";
import FormStep from "./FormStep.vue";

export default {
  name: "App",
  components: {
    FormWizard,
    FormStep,
    Field,
    ErrorMessage,
  },
  setup() {
    // break down the validation steps into multiple schemas
    const validationSchema = [
      yup.object({
        fullName: yup.string().required().label("Full Name"),
        email: yup.string().required().email().label("Email Address"),
      }),
      yup.object({
        password: yup.string().min(8).required(),
        confirmPass: yup
          .string()
          .required()
          .oneOf([yup.ref("password")], "Passwords must match"),
      }),
      yup.object({
        favoriteDrink: yup
          .string()
          .required()
          .oneOf(["coffee", "tea", "soda"], "Choose a drink"),
      }),
    ];

    /**
     * Only Called when the last step is submitted
     */
    function onSubmit(formData) {
      console.log(JSON.stringify(formData, null, 2));
    }

    return {
      validationSchema,
      onSubmit,
    };
  },
};
</script>

<style>
input,
select {
  margin: 10px 0;
  display: block;
}
</style>
