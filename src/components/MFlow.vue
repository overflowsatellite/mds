<script setup>
const processArray = [
  {
    percentage: "5%",
    title: "Initial Order",
    content: "Client places an order with Mirai Dev.",
  },
  {
    percentage: "10%",
    title: "Discussion Started",
    content: "Mirai Dev contacts the Client to discuss their requirements.",
  },
  {
    percentage: "15%",
    title: "Agreed Requirements",
    content: "Client and Mirai Dev agree on the Requirements and pricing.",
  },
  {
    percentage: "30%",
    title: "UI/UX Approved",
    content: "Client approves the UI/UX created by Mirai Dev.",
  },
  {
    percentage: "50%",
    title: "Frontend Implementation",
    content: "UI/UX is implemented by Mirai Dev's Frontend Team.",
  },
  {
    percentage: "70%",
    title: "Backend Integration",
    content:
      "The system's appearance is integrated with Backend and deployed to the server.",
  },
  {
    percentage: "90%",
    title: "Client Feedback Incorporated",
    content: "Mirai Dev implements Client's feedback.",
  },
  {
    percentage: "100%",
    title: "Delivery & Documentation",
    content:
      "The system and its documentation are delivered to the Client. Client is satisfied.",
  },
];
</script>

<template>
  <div class="relative flex flex-col gap-8 w-full">
    <h3
      class="font-bold text-center mx-auto w-full text-2xl lg:text-6xl text-black"
    >
      How Our Projects Flow?
    </h3>

    <div
      class="container w-full mx-auto bg-raisin p-10 min-h-screen animation-bg wavy"
    >
      <div
        class="bg-violet w-full xl:w-1/2 mx-auto p-10 mt-20 min-h-max rounded-tl-[5rem] rounded-br-[5rem]"
      >
        <ol class="relative border-l border-gray-200">
          <li
            class="mb-10 ml-4"
            v-for="process in processArray"
            :key="process.percentage"
          >
            <div
              class="absolute w-3 h-3 bg-bright rounded-full mt-1.5 -left-1.5 border border-bright"
            ></div>
            <time class="mb-1 text-2xl font-bold leading-none text-bright">{{
              process.percentage
            }}</time>
            <h3 class="text-xl sm:text-2xl font-semibold text-white">
              {{ process.title }}
            </h3>
            <p class="mb-4 text-lg font-normal text-white">
              {{ process.content }}
            </p>
          </li>
        </ol>
      </div>
      <div class="air air1"></div>
      <div class="air air2"></div>
      <div class="air air3"></div>
      <div class="air air4"></div>
    </div>
  </div>
</template>

<style>
.wavy {
  position: relative;
  overflow: hidden;
}
.wavy .air {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png);
  background-size: 1000px 100px;
  rotate: 180deg;
}
.wavy .air.air1 {
  animation: wave 30s linear infinite;
  z-index: 40;
  opacity: 1;
  animation-delay: 0s;
  top: 0;
}
.wavy .air.air2 {
  animation: wave2 15s linear infinite;
  z-index: 39;
  opacity: 0.5;
  animation-delay: -5s;
  top: 10px;
}
.wavy .air.air3 {
  animation: wave 30s linear infinite;
  z-index: 38;
  opacity: 0.2;
  animation-delay: -2s;
  top: 15px;
}
.wavy .air.air4 {
  animation: wave2 5s linear infinite;
  z-index: 37;
  opacity: 0.7;
  animation-delay: -5s;
  top: 20px;
}
@keyframes wave {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 1000px;
  }
}
@keyframes wave2 {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: -1000px;
  }
}
</style>
