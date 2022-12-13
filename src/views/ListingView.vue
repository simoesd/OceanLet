
<template>
    <div class="container listing-container my-4 pb-4">
        <div class="listing-header my-auto mx-4">{{ listingInfo[listing].rating }} <i className="icon bi-star-fill"></i> {{ listingInfo[listing].location }} </div>
        <div class="listing-image mx-4" :style="'background-image: url(\'/OceanLet/assets/' + listingInfo[listing].icon + '\')'" >
        </div>
        <div class="author-block">
            <img :src="'/OceanLet/assets/author-logo.png'" :alt="listingInfo[listing].author" class="author-image mx-auto"/>
            <div class="author-name">
                {{ listingInfo[listing].author }} <small style="font-size: 0.8rem">{{ listingInfo[listing].authorRating }} <i className="icon bi-star-fill"></i></small>
            </div>
            <div class="author-description">
                {{ listingInfo[listing].authorDescription }}
            </div>
        </div>
        <div class="listing-info">
            <div class="listing-title">
                {{ listingInfo[listing].text }}
            </div>
            <div class="listing-description">
                {{ listingInfo[listing].description }}
            </div>
        </div>
        <div class="listing-price ms-5 mt-2">
            From: {{listingInfo[listing].basePrice}} DKK/hour
            <div v-if="showingError" class="rent-message">Renting is disabled for this Demo, but thank you for your interest!</div>
        </div>
            <div class="listing-date">
            <DatePicker inline range auto-apply v-model="dateRange" :enable-time-picker="false"></DatePicker>
        </div>
        <div class="listing-time" v-if="dateRange">
            <div class="row">
                <div class="col my-auto">
                    {{ `${dateRange[0].getDate()}/${dateRange[0].getMonth() +1}/${dateRange[0].getFullYear()}` }}
                </div>
                <div class="col my-auto">
                    <input type="time" class="form-control" v-model="startTime" />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    {{ `${dateRange[1].getDate()}/${dateRange[1].getMonth() + 1}/${dateRange[1].getFullYear()}` }}
                </div>
                <div class="col">
                    <input type="time" class="form-control" v-model="endTime"/>
                </div>
            </div>
            
        </div>
        <div class="button-wrapper">
            <button class="btn btn-info rent-button" @click="() => {showingError = !showingError}">
                Rent
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from'vue';
    import DatePicker from '@vuepic/vue-datepicker';
    defineProps({
        listing: {
            required: true,
        }
    })

    const dateRange = ref();
    const startTime = ref();
    const endTime = ref();
    const showingError = ref(false);
    
    onMounted(() => {
            const startDate = new Date(new Date().setDate(new Date().getDate() + 1));
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            dateRange.value = [startDate, endDate];
    })

    const listingInfo = ref({
        '1' : {
            text: 'Copenhagen Lakes',
            icon: "bike.jfif",
            distance: "8 Km",
            categories: ["Kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '2': {
            text: 'Bellevue Beach',
            icon: "bike.jfif",
            distance: "8 Km",
            categories: ["Kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '3': {
            text: 'Amager Strand',
            icon: "bike.jfif",
            distance: "8 Km",
            categories: ["Kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '4': {
            text: 'Lyngby Lake',
            icon: "bike.jfif",
            distance: "8 Km",
            categories: ["Kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '5': {
            text: 'Charlotte Lund',
            icon: "bike.jfif",
            distance: "8 Km",
            categories: ["Kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '6': {
            text: 'Fishing',
            icon: "bike.jfif",
            distance: "8 Km",
            categories: ["Paddleboard", "Kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '7': {
            text: 'Rowing',
            icon: "bike.jfif",
            distance: "8 Km",
            categories: ["Kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '8': {
            text: 'Wakeboarding',
            icon: "bike.jfif",
            distance: "8 Km",
            categories: ["Kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
    });

</script>
<style scoped>
</style>
