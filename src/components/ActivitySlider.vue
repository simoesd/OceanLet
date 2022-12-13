

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
        icon: "kitesurfing.svg"
      },
      {
        text: 'Kayaking',
        icon: "kitesurfing.svg"
      },
      {
        text: 'Canoeing',
        icon: "kitesurfing.svg"
      },
      {
        text: 'Surf',
        icon: "kitesurfing.svg"
      },
      {
        text: 'Windsurf',
        icon: "kitesurfing.svg"
      },
      {
        text: 'Fishing',
        icon: "kitesurfing.svg"
      },
      {
        text: 'Rowing',
        icon: "kitesurfing.svg"
      },
      {
        text: 'Wakeboarding',
        icon: "kitesurfing.svg"
      },
    ]);
</script>