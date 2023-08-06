<script setup>
import JumbotronLogo from "../assets/images/jumbotron_logo.png";
import JumbotronLeft from "../assets/images/jumbotron_left.png";
import JumbotronRight from "../assets/images/jumbotron_right.png";
</script>
<template>
  <header
    class="relative container mx-auto flex flex-col justify-center items-center gap-8 h-screen"
  >
    <img :src="JumbotronLogo" alt="Logo" />

    <h2 class="text-deep text-xl md:text-2xl text-center">
      “The <b class="font-bold">ultimate solution</b> to simplify your business
      with <b class="font-bold">Technology</b>”
    </h2>

    <img
      :src="JumbotronLeft"
      class="absolute bottom-8 left-8 w-1/4 md:w-1/5 lg:w-1/12"
      alt=""
    />
    <img
      :src="JumbotronRight"
      class="absolute top-8 right-8 w-1/4 md:w-1/5 lg:w-1/12"
      alt=""
    />
  </header>
</template>
