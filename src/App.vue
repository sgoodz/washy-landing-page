<script setup>
import Navbar from "./components/Navbar.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
</script>

<template>
  <kinesis-container>
    <div class="relative text-white bg-washy-blue header">
      <Navbar />
      <div class="inner-header">
        <div class="max-w-8xl mx-auto pt-10 md:pt-52 px-4 flex">
          <div class="w-4/5 md:w-1/2">
            <h1 class="text-5xl font-bold">Become a Provider for Washy UK</h1>
            <h2 class="text-xl pt-6">
              Click the link below or download our app to register and become a
              car wash provider for Washy.
            </h2>
            <button
              class="border-2 mt-6 px-6 py-2 hover:bg-white hover:text-black transition-colors duration-300"
            >
              Register
            </button>
            <img src="./assets/dload-app.png" alt="" width="150" />
          </div>

          <div class="absolute right-[23rem] top-[10rem]">
            <kinesis-element
              tag="img"
              src="./src/assets/washyPhone.png"
              :strength="30"
              width="750"
            />
          </div>
        </div>
      </div>

      <!--Waves Container-->
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <!--Waves end-->
    </div>
  </kinesis-container>
  <!--Header ends-->
  <div class="max-w-8xl px-4 my-10 mx-auto">
    <div>
      <h1 class="text-center text-4xl font-bold">How Washy Works</h1>
      <p class="text-center text-xl pt-4">
        Follow our simple guide below to become a certified provider for Washy
        UK
      </p>
      <div class="w-full mx-auto flex mt-20">
        <div class="w-1/3 p-4">
          <div class="flex flex-col items-center">
            <div
              class="text-xl font-bold bg-white border-2 border-blue-900 rounded py-6 px-8 block cursor-pointer hover:bg-blue-400"
            >
              1
            </div>
            <h3 class="text-center text-2xl font-bold pt-4">
              Fill out our registration form
            </h3>
            <p class="pt-4 text-center">
              Download our app or register online to be added to our list of
              providers and be shown to customers who want their car washed.
            </p>
          </div>
          <div class="flex flex-col items-center pt-10">
            <div
              class="text-xl font-bold bg-white border-2 border-blue-900 rounded py-6 px-8 block cursor-pointer hover:bg-blue-400"
            >
              2
            </div>
            <h3 class="text-2xl text-center font-bold pt-4">
              Configure your location and payment rate
            </h3>
            <p class="pt-4 text-center">
              Next you will need to add your hourly rate and also the radius of
              where you're willing to go.
            </p>
          </div>
        </div>
        <img
          class="mx-auto px-6"
          src="./assets/flatPhone.png"
          alt=""
          width="350"
        />
        <div class="w-1/3 p-4">
          <div class="flex flex-col items-center">
            <div
              class="font-bold text-xl bg-white border-2 border-blue-900 rounded py-6 px-8 block cursor-pointer hover:bg-blue-400"
            >
              3
            </div>
            <h3 class="text-center text-2xl font-bold pt-4">
              Wait until a customer books your services
            </h3>
            <p class="pt-4 text-center">
              Now you will be shown to our customers, they will book you and you
              will get a notifcation on your phone.
            </p>
          </div>
          <div class="flex flex-col items-center pt-10">
            <div
              class="font-bold text-xl bg-white border-2 border-blue-900 rounded py-6 px-8 block cursor-pointer hover:bg-blue-400"
            >
              4
            </div>
            <h3 class="text-2xl text-center font-bold pt-4">
              Work and get paid!
            </h3>
            <p class="pt-4 text-center">
              Once you have done a great job, you will be paid instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-24 p-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-xl text-white"
    >
      <h2 class="font-bold text-3xl">More Information</h2>
      <p class="pt-6 text-xl">
        Washy is a review based system. Meaning that the better job you do, the
        better ratings you'll get and the higher priority you will get with
        customers. Essentially, somebody wants their car washed but doesn't want
        to travel to a car wash or leave their car and find something to do
        whilst it gets cleaned, that is where we step in, they will simply open
        the app and search for providers near them, they will click your profile
        and book a time and place, specify the service they want e.g interior &
        exterior, they will then pay for the service in advance. The customer
        will also leave the car unlocked for you to simply turn up, do your job
        and leave without a trace.
      </p>
      <h3 class="pt-6 text-2xl font-bold">
        Sounds good?
        <a class="underline" href="/register"
          >Register to become a service provider today!</a
        >
      </h3>
    </div>
  </div>
</template>

<style scoped></style>
