<template>
  <div class="slider-wrapper vertical">
    <RouterLink :to="'/listing/' + listing.id" v-for="listing in getListings" :key="listing">
        <div class="location-item" :style="'background-image: url(\'/src/assets/' + listing.icon + '\')'">
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
        text: 'Copenhagen Lakes',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'2',
        text: 'Bellevue Beach',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'3',
        text: 'Amager Strand',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'4',
        text: 'Lyngby Lake',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'4',
        text: 'Charlotte Lund',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'5',
        text: 'Fishing',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["Paddleboard", "Kayaking"],
      },
      {
        id:'6',
        text: 'Rowing',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
      {
        id:'7',
        text: 'Wakeboarding',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["Kayaking"],
      },
    ]);
</script>