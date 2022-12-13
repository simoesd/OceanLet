<template>
  <div class="slider-wrapper vertical">
    <RouterLink :to="'/listing/' + listing.id" v-for="listing in getListings" :key="listing">
        <div class="location-item" :style="'background-image: url(\'/OceanLet/assets/' + listing.icon + '\')'">
          <div class="bottom-gradient-filter">
            <div class="location-label">{{ listing.text }}</div>
            <div class="location-distance">{{ listing.distance }}</div>
          </div>
        </div>
    </RouterLink>
  </div>
</template>

<script setup>
    import { ref, toRefs, computed } from 'vue';
    const props = defineProps({
        activity: String
      }
    )
    const { activity } = toRefs(props)

    const getListings = computed(() => {
      if (!(activity.value)) {
        return listings.value;
      } else {
        return listings.value.filter(listing => listing.categories.includes(activity.value))
      }
    })

    const listings = ref([
      {
        id:'1',
        text: 'Windsurfing',
        icon: "windsurf1.svg",
        distance: "8 Km",
        categories: ["Windsurfing"],
      },
      {
        id:'2',
        text: 'Canoeing',
        icon: "canoe1.svg",
        distance: "8 Km",
        categories: ["Canoeing"],
      },
      {
        id:'3',
        text: 'Paddleboard',
        icon: "paddle1.svg",
        distance: "8 Km",
        categories: ["Paddleboard"],
      },
      {
        id:'4',
        text: 'Surfing',
        icon: "surf1.svg",
        distance: "8 Km",
        categories: ["Surfing"],
      },
      {
        id:'5',
        text: 'Rowing',
        icon: "rowing1.svg",
        distance: "8 Km",
        categories: ["Rowing"],
      },
      {
        id:'6',
        text: 'Kayaking',
        icon: "kayak1.svg",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'7',
        text: 'Kayaking',
        icon: "kayak2.svg",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
    ]);
</script>