<script setup>
import { ref } from "vue";
import NavbarLogo from "../assets/images/navbar_logo.png";

const showMenu = ref(false);

function toggleMobileMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <nav class="bg-white shadow-lg sticky inset-x-0 top-0 z-50">
    <div class="2xl:container mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <!-- Website Logo -->
            <a href="#" class="flex items-center">
              <img :src="NavbarLogo" alt="Logo" />
            </a>
          </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center gap-8">
          <a
            href="#about"
            class="py-2 px-2 font-roboto font-bold text-xl text-black hover:text-bright transition duration-300"
            >About</a
          >
          <a
            href="#services"
            class="py-2 px-2 font-roboto font-bold text-xl text-black hover:text-bright transition duration-300"
            >Services</a
          >
          <a
            href="#clients"
            class="py-2 px-2 font-roboto font-bold text-xl text-black hover:text-bright transition duration-300"
            >Clients</a
          >
          <a
            href="#contact"
            class="py-2 px-2 font-roboto font-bold text-xl text-black hover:text-bright transition duration-300"
            >Contact</a
          >
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            class="outline-none mobile-menu-button"
          >
            <svg
              class="w-6 h-6 text-gray-500 hover:text-violet transition duration-300"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div :class="[{ hidden: !showMenu }, 'md:hidden mobile-menu']">
      <ul class="">
        <li>
          <a
            href="#about"
            class="block text-right text-sm pl-2 pr-4 py-4 hover:bg-violet hover:text-white transition duration-300"
            >About</a
          >
        </li>
        <li>
          <a
            href="#services"
            class="block text-right text-sm pl-2 pr-4 py-4 hover:bg-violet hover:text-white transition duration-300"
            >Services</a
          >
        </li>
        <li>
          <a
            href="#clients"
            class="block text-right text-sm pl-2 pr-4 py-4 hover:bg-violet hover:text-white transition duration-300"
            >Clients</a
          >
        </li>
        <li>
          <a
            href="#contact"
            class="block text-right text-sm pl-2 pr-4 py-4 hover:bg-violet hover:text-white transition duration-300"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
