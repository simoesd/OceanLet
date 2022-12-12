
<template>
    <div class="container">
        <div class="slider-title my-3">
            <i className="icon bi-water text-primary"></i>
            Search Results for: {{ searchTerm }}
        </div>
        <div class="slider-wrapper vertical my-2">
            <RouterLink :to="'/listing/' + listing.id" v-for="listing in getListings" :key="listing">
                <div class="location-item" :style="'background-image: url(\'/src/assets/' + listing.icon + '\')'">
                    <div class="bottom-gradient-filter">
                    <div class="location-label">{{ listing.text }}</div>
                    <div class="location-distance">{{ listing.distance }}</div>
                </div>
            </div>
            </RouterLink>
        </div>
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
      if (!(searchTerm.value)) {
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
        text: 'Copenhagen Lakes',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["kayaking"],
        location: '',
        author: '',
      },
      {
        id:'2',
        text: 'Bellevue Beach',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["kayaking"],
        location: '',
        author: '',
      },
      {
        id:'3',
        text: 'Amager Strand',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["kayaking"],
        location: '',
        author: '',
      },
      {
        id:'4',
        text: 'Lyngby Lake',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["kayaking"],
        location: '',
        author: '',
      },
      {
        id:'4',
        text: 'Charlotte Lund',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["kayaking"],
        location: '',
        author: '',
      },
      {
        id:'5',
        text: 'Fishing',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["paddleboard", "kayaking"],
        location: '',
        author: '',
      },
      {
        id:'6',
        text: 'Rowing',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["kayaking"],
        location: '',
        author: '',
      },
      {
        id:'7',
        text: 'Wakeboarding',
        icon: "bike.jfif",
        distance: "8 Km",
        categories: ["kayaking"],
        location: '',
        author: '',
      },
    ]);
</script>
<style scoped>
</style>
