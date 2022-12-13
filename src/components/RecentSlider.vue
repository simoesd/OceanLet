<template>
  <div class="slider-wrapper vertical" v-if="getListings.length > 0">
    <RouterLink :to="'/listing/' + listing.id" v-for="listing in getListings" :key="listing">
        <div class="location-item" :style="'background-image: url(\'/OceanLet/assets/' + listing.icon + '\')'">
          <div class="bottom-gradient-filter">
            <div class="location-label">{{ listing.text }}</div>
            <div class="location-distance">{{ listing.distance }}</div>
          </div>
        </div>
    </RouterLink>
  </div>
  <h3 v-else> There are no listings for this category yet. </h3>
</template>

<script setup>
    import { ref, toRefs, computed } from 'vue';
    const props = defineProps({
        activity: String,
        random: Boolean,
      }
    )
    const { activity, random } = toRefs(props)

    const getListings = computed(() => {
      let results = []
      if (!(activity.value)) {
        results = listings.value;
      } else {
        results = listings.value.filter(listing => listing.categories.includes(activity.value))
      }
      // if (random.value) {
      //   const n = Math.max(Math.min(2, results.length), Math.random() * results.length);
      //   const shuffled = results.sort(() => 0.5 - Math.random());

      //   results = shuffled.slice(0, n);
      // }
      return results
    })

    const listings = ref([
      {
        id:'1',
        text: 'Paddleboard',
        icon: "paddle1.svg",
        distance: "8 Km",
        categories: ["Paddleboard"],
      },
      {
        id:'2',
        text: 'Kayak',
        icon: "kayak1.svg",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'3',
        text: 'Canoe',
        icon: "canoe1.svg",
        distance: "8 Km",
        categories: ["Canoeing"],
      },
      {
        id:'4',
        text: 'Surfboard',
        icon: "surf1.svg",
        distance: "8 Km",
        categories: ["Surfing"],
      },
      {
        id:'5',
        text: 'Windsurf',
        icon: "windsurf1.svg",
        distance: "8 Km",
        categories: ["Windsurfing"],
      },
      {
        id:'6',
        text: 'Kayak',
        icon: "kayak2.svg",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'7',
        text: 'Row boat',
        icon: "rowing1.svg",
        distance: "8 Km",
        categories: ["Rowing", "Fishing"],
      },
      {
        id:'8',
        text: 'Kayak',
        icon: "kayak3.svg",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'9',
        text: 'Kayak',
        icon: "kayak4.svg",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'10',
        text: 'Kayak',
        icon: "kayak5.svg",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'11',
        text: 'Kayak',
        icon: "kayak6.svg",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
    ]);
</script>