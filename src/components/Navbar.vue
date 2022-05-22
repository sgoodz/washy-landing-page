<script></script>

<template>
  <header
    class="w-full sticky top-0 backdrop-blur transition-colors duration-500 z-30"
  >
    <nav class="max-w-8xl mx-auto p-4 flex items-center justify-between">
      <router-link to="/">
        <h3 class="text-xl font-bold">Washy</h3>
      </router-link>

      <ul class="flex items-center text-l gap-5">
        <a
          href="#sec-1"
          v-smooth-scroll="{ duration: 1000, offset: -50 }"
          class="hover:font-bold focus:font-bold"
        >
          <li class="hidden md:inline-block">More Info</li>
        </a>
        <a
          href="#sec-2"
          v-smooth-scroll="{ duration: 1000 }"
          class="hover:font-bold focus:font-bold"
        >
          <li class="hidden md:inline-block">FAQ</li>
        </a>
        <a
          href="#sec-3"
          v-smooth-scroll="{ duration: 1000, offset: -50 }"
          class="hover:font-bold focus:font-bold"
        >
          <li class="hidden md:inline-block">Contact Us</li>
        </a>
        <button
          class="border-2 px-6 py-2 hover:bg-white hover:text-black transition-colors duration-300"
        >
          Sign In
        </button>
      </ul>
    </nav>
  </header>
</template>
