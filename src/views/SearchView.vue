
<template>
  <div class="container">
      <div class="slider-title my-3">
          <i className="icon bi-water text-primary"></i>
          Search Results for: "{{ searchTerm }}"
      </div>
      <div class="slider-wrapper vertical my-2" v-if="getListings">
          <RouterLink :to="'/listing/' + listing.id" v-for="listing in getListings" :key="listing">
              <div class="location-item" :style="'background-image: url(\'/OceanLet/assets/' + listing.icon + '\')'">
                  <div class="bottom-gradient-filter">
                    <div class="location-label">{{ listing.text }}</div>
                    <div class="location-distance">{{ listing.distance }}</div>
                  </div>
              </div>
          </RouterLink>
        </div>
        <h3 v-else> We couldn't find any results for your search. </h3>
  </div>
</template>

<script setup>
    import { ref, toRefs, computed } from 'vue';

    const props = defineProps({
        searchTerm: String
      }
    )
    const { searchTerm } = toRefs(props)

    const getListings = computed(() => {
      if (!searchTerm.value) {
        return listings.value;
      } else {
        return listings.value.filter(listing => hasSearchTerms(listing))
      }
    })

    const hasSearchTerms = (listing) => {
        return (
            listing.text.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            listing.categories.filter((category) => category.includes(searchTerm.value.toLowerCase())).length > 0||
            listing.location.includes(searchTerm.value.toLowerCase()) ||
            listing.author.includes(searchTerm.value.toLowerCase())
        )
    }

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
        categories: ["Surf"],
      },
      {
        id:'5',
        text: 'Windsurf',
        icon: "windsurf1.svg",
        distance: "8 Km",
        categories: ["Windsurf"],
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
      {
        id: '12',
        text: 'Wakeboard',
        icon: "wakeboard.png",
        distance: "20 Km",
        categories: ["Wakeboarding"],
      },
      {
        id: '13',
        text: 'Fishing rod set',
        icon: "fishingrods.jpg",
        distance: "15 Km",
        categories: ["Rowing", "Fishing"],
      },
      {
        id: '14',
        text: 'Canoe',
        icon: "canoe2.svg",
        distance: "8 Km",
        categories: [ "canoeing"],
      },
      {
        id: '15',
        text: 'Canoe',
        icon: "canoe3.svg",
        distance: "8 Km",
        categories: [ "canoeing"],
      },
      {
        id: '16',
        text: 'Canoe',
        icon: "canoe4.svg",
        distance: "0 Km",
        categories: [ "canoeing"],
      },
    ]);
</script>
<style scoped>
</style>
