<script setup>
import WebDevImage from "../assets/images/webdev.png";
import MobileDevImage from "../assets/images/mobiledev.png";
</script>

<template>
  <div
    id="services"
    class="relative container mx-auto min-h-screen flex flex-col gap-8 p-8 lg:py-20 w-full mt-40 sm:mt-0 md:mt-20 lg:mt-40"
  >
    <h3
      class="uppercase font-bold text-2xl lg:text-5xl text-black text-center md:text-left"
    >
      OUR MAIN SERVICES
    </h3>

    <h4
      class="uppercase font-bold text-2xl lg:text-4xl text-black text-center md:text-left"
    >
      WEB DEVELOPMENT
    </h4>
    <div
      class="relative flex flex-col lg:flex-row items-start justify-between bg-raisin rounded-xl p-5 lg:p-10"
    >
      <div class="w-full lg:w-1/2">
        <img :src="WebDevImage" alt="Web Development" class="rounded-xl" />
      </div>

      <div class="w-full lg:w-1/2 pt-5 lg:pt-0 lg:px-8 lg:mr-5">
        <p class="text-lg lg:text-xl text-white">
          Empower your digital presence with our premium web development
          services tailored for large institutions, including private companies
          and government organizations. Our skilled team creates captivating
          websites, incorporating cutting-edge technologies to ensure you stand
          out from the crowd. Seamless user experiences and expert solutions
          catered to your unique needs. Elevate your online presence with us
          today!
        </p>
      </div>

      <div class="hidden lg:block">
        <div class="dot"></div>
        <div class="dot2"></div>
        <div class="dot3"></div>
      </div>
    </div>

    <h4 class="uppercase font-bold text-2xl lg:text-4xl text-black">
      MOBILE DEVELOPMENT
    </h4>
    <div
      class="relative flex flex-col lg:flex-row items-start justify-between bg-raisin rounded-xl p-5 lg:p-10"
    >
      <div class="w-full lg:w-1/2">
        <img :src="MobileDevImage" alt="Web Development" class="rounded-xl" />
      </div>

      <div class="w-full lg:w-1/2 pt-5 lg:pt-0 lg:px-8 lg:mr-5">
        <p class="text-lg lg:text-xl text-white">
          Elevate your business with our top-tier mobile app development
          services. We specialize in crafting exceptional Android and iOS
          applications that resonate with your target audience. Our skilled team
          of developers ensures seamless functionality and a user-friendly
          experience to keep your users engaged. Whether it's a custom
          enterprise app or a consumer-facing solution, we've got you covered.
          Embrace the power of cutting-edge technology and personalized
          solutions to take your mobile presence to new heights. Transform your
          ideas into reality with our expert mobile app development services
          today!
        </p>
      </div>

      <div class="hidden lg:block">
        <div class="dot"></div>
        <div class="dot2"></div>
        <div class="dot3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dot {
  height: 25px;
  width: 25px;
  background-color: #ffd569;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%);
}

.dot2 {
  height: 25px;
  width: 25px;
  background-color: #ffd569;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* translate the code  */

.dot3 {
  height: 25px;
  width: 25px;
  background-color: #ffd569;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 60%;
  transform: translate(-50%, -50%);
}
</style>
