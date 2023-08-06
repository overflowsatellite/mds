<script setup>
import MTFLogo from "../assets/images/mtf_logo.png";
import BlinkLogo from "../assets/images/logo_blink.svg";
import DinasLogo from "../assets/images/logo_dinas_peternakan_labuanbatu.png";
import FKMLogo from "../assets/images/logo_fkm_undip.png";
import KariadiLogo from "../assets/images/logo_kariadi.png";
import KemenkesLogo from "../assets/images/logo_kemenkes_semarang.png";
import LabBatuSelatanLogo from "../assets/images/logo_labuhanbatuselatan.png";
import TNIADLogo from "../assets/images/logo_zeni_tniad.png";

const clients = [
  {
    name: "PT Mandiri Tunas Finance",
    logo: MTFLogo,
  },
  {
    name: "Blink",
    logo: BlinkLogo,
  },
  {
    name: "Dinas Peternakan Labuhanbatu",
    logo: DinasLogo,
  },
  {
    name: "FKM Undip",
    logo: FKMLogo,
  },
  {
    name: "RSUP Dr. Kariadi",
    logo: KariadiLogo,
  },
  {
    name: "Kemenkes Semarang",
    logo: KemenkesLogo,
  },
  {
    name: "Labuhanbatu Selatan",
    logo: LabBatuSelatanLogo,
  },
  {
    name: "Zeni TNI AD",
    logo: TNIADLogo,
  },
];
</script>

<template>
  <div
    id="clients"
    class="relative min-h-screen bg-raisin w-full flex flex-col gap-8 pb-20 md:pb-0 -z-10"
  >
    <div class="absolute -top-48 min-h-screen bg-raisin w-full rounded-tr-full">
      <div class="flex flex-col items-center relative w-full container mx-auto">
        <h3 class="font-bold text-center text-4xl text-bright mt-48">
          Our Happy Clients
        </h3>

        <div
          class="grid grid-cols-2 md:grid-cols-4 items-stretch justify-center gap-8 min-h-max mt-12 px-8 lg:px-0"
        >
          <div
            v-for="client in clients"
            :key="client.name"
            class="bg-violet sm:w-40 lg:w-48 p-2 rounded-lg flex flex-col gap-4"
          >
            <div
              class="flex justify-center items-center bg-white h-full"
              :class="{ 'bg-violet': client.logo === BlinkLogo }"
            >
              <img
                :src="client.logo"
                :alt="client.name"
                class="p-2 w-24 lg:w-full"
                :class="{ invert: client.logo === BlinkLogo }"
                :title="client.name"
              />
            </div>
          </div>
        </div>

        <div class="p font-bold text-center text-2xl text-white mt-10">
          ... and many more
        </div>
      </div>
    </div>
  </div>
</template>
