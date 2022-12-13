

<template>
  <div class="slider-wrapper">
    <RouterLink :to="'/activity/' + activity.text" v-for="activity in activities" :key="activity">
      <div class="activity-item">
        <div class="activity-icon mx-auto"><img :src="'/OceanLet/assets/' + activity.icon" :alt="activity.text" /></div>
        <div class="activity-label mx-auto">{{ activity.text }}</div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    const activities = ref([
      {
        text: 'Paddleboard',
        icon: "paddle-board.png"
      },
      {
        text: 'Kayaking',
        icon: "kayak.png"
      },
      {
        text: 'Canoeing',
        icon: "canoe.png"
      },
      {
        text: 'Surf',
        icon: "surfboard.png"
      },
      {
        text: 'Windsurf',
        icon: "windsurving.png"
      },
      {
        text: 'Fishing',
        icon: "fishing.png"
      },
      {
        text: 'Rowing',
        icon: "rowing.png"
      },
      {
        text: 'Snorkeling',
        icon: "snorkel.png"
      },
    ]);
</script>