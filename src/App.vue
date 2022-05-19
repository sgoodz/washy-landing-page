<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="relative text-white bg-washy-blue header">
    <Navbar />
    <div class="inner-header">
      <div class="max-w-7xl mx-auto pt-10 md:pt-20 px-4 flex">
        <div class="w-4/5 md:w-1/2">
          <h1 class="text-5xl font-bold">Become a Provider for Washy UK</h1>
          <h2 class="text-xl pt-6">
            Click the link below to register and become a car wash provider for
            Washy.
          </h2>
          <button
            class="border-2 mt-6 px-6 py-2 hover:bg-white hover:text-black transition-colors duration-300"
          >
            Register
          </button>
        </div>
        <div class="absolute right-24 top-10">
          <img src="./assets/phone1-removebg-preview.png" alt="" />
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
  <!--Header ends-->
  <div class="max-w-7xl px-4 my-10 mx-auto">
    <div>
      <h1 class="text-center text-4xl font-bold">How Washy Works</h1>
      <p></p>
    </div>
  </div>
</template>

<style scoped></style>
