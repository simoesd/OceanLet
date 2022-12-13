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
        icon: "canoe.jfif",
        distance: "8 Km",
      },
      {
        id: '2',
        text: 'Bellevue Beach',
        icon: "canoe.jfif",
        distance: "8 Km",
      },
      {
        id: '3',
        text: 'Amager Strand',
        icon: "canoe.jfif",
        distance: "8 Km",
      },
      {
        id: '4',
        text: 'Lyngby Lake',
        icon: "canoe.jfif",
        distance: "8 Km",
      },
      {
        id: '5',
        text: 'Charlotte Lund',
        icon: "canoe.jfif",
        distance: "8 Km",
      },
      {
        id: '6',
        text: 'Fishing',
        icon: "canoe.jfif",
        distance: "8 Km",
      },
      {
        id: '7',
        text: 'Rowing',
        icon: "canoe.jfif",
        distance: "8 Km",
      },
      {
        id: '8',
        text: 'Wakeboarding',
        icon: "canoe.jfif",
        distance: "8 Km",
      },
    ]);
</script>