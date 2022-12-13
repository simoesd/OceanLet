

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
        icon: "paddle-board.svg"
      },
      {
        text: 'Kayaking',
        icon: "kayak.svg"
      },
      {
        text: 'Canoeing',
        icon: "canoe.svg"
      },
      {
        text: 'Surf',
        icon: "surfboard.svg"
      },
      {
        text: 'Windsurf',
        icon: "windsurfing.svg"
      },
      {
        text: 'Fishing',
        icon: "fishing.svg"
      },
      {
        text: 'Rowing',
        icon: "rowing.svg"
      },
      {
        text: 'Wakeboarding',
        icon: "wakeboarding.svg"
      },
    ]);
</script>