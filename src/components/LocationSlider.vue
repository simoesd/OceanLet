<template>
  <div class="slider-wrapper">
    <RouterLink :to="'/location/' + location.id" v-for="location in locations" :key="location">
        <div class="location-item" :style="'background-image: url(\'/OceanLet/assets/' + location.icon + '\')'">
          <div class="bottom-gradient-filter">
            <div class="location-label">{{ location.text }}</div>
            <div class="location-distance">{{ location.distance }}</div>
          </div>
        </div>
    </RouterLink>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    const locations = ref([
      {
        id: '1',
        text: 'Copenhagen Lakes',
        icon: "lakes.svg",
        distance: "2 Km",
      },
      {
        id: '2',
        text: 'Bellevue Beach',
        icon: "bellevue.svg",
        distance: "4 Km",
      },
      {
        id: '3',
        text: 'Amager Strand',
        icon: "amager.svg",
        distance: "8 Km",
      },
      {
        id: '4',
        text: 'Lyngby Lakes',
        icon: "lyngby.svg",
        distance: "8 Km",
      },
      {
        id: '5',
        text: 'Charlottenlund',
        icon: "charlottenlund.svg",
        distance: "5 Km",
      },
      {
        id: '6',
        text: 'Christianshavn',
        icon: "christianshavn.svg",
        distance: "3 Km",
      },
      {
        id: '7',
        text: 'Sydhavn',
        icon: "sydhavn.svg",
        distance: "4 Km",
      },
      {
        id: '8',
        text: 'Vedbæk',
        icon: "vedbaek.svg",
        distance: "20 Km",
      },
    ]);
</script>