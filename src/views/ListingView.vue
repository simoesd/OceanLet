
<template>
    <div class="container listing-container my-4 pb-4">
        <div class="listing-header my-auto mx-4">{{ listingInfo[listing].rating }} <i className="icon bi-star-fill"></i> {{ listingInfo[listing].location }} </div>
        <div class="listing-image mx-4" :style="'background-image: url(\'/OceanLet/assets/' + listingInfo[listing].icon + '\')'" data-bs-toggle="modal" data-bs-target="#imageBackdrop" >
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
            <DatePicker inline range auto-apply v-model="dateRange" :enable-time-picker="false" :min-date="new Date()" :disabled-dates="disabledDateRange" no-disabled-range prevent-min-max-navigation six-weeks/>
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

    
    <!-- Modals -->
    <div class="modal fade" id="imageBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content w-fit-content h-fit-content mx-auto" style="background-color: transparent;">
                <img :src="'/OceanLet/assets/' + listingInfo[listing].icon" id="imagepreview" class="image-modal" >
                <!-- <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                </div>
                <div class="modal-body">                    
                    <div class="modal-body">
                    </div>  
                </div> -->
            </div>
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
    const disabledDateRange = ref([])
    
    onMounted(() => {
            const startDate = new Date(new Date().setDate(new Date().getDate() + 1));
            const endDate = new Date(new Date().setDate(startDate.getDate() + 3));
            dateRange.value = [startDate, endDate];
            getDisabledDates();
    })

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    const getDisabledDates = () => { 
        const startDate = new Date(new Date().setDate(dateRange.value[1].getDate() + 1 + Math.round(Math.random() * 4)));
        const stopDate = new Date(new Date().setDate(startDate.getDate() + 1 + Math.round(Math.random() * 4))); 
        var currentDate = startDate;
        while (currentDate <= stopDate) {
            disabledDateRange.value.push(new Date (currentDate));
            currentDate = currentDate.addDays(1);
        }
    }

    const listingInfo = ref({
        '1' : {
            text: 'Paddleboard',
            icon: "paddle1.svg",
            distance: "2 Km",
            categories: ["paddleboard"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '2': {
            text: 'Kayak',
            icon: "kayak1.svg",
            distance: "4 Km",
            categories: ["kayaking"],
            location: 'Dyrehavevej 18, 2930 Klampenborg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '250',
            rating: '5/5',
            author: 'Charis',
            authorRating: '4.9/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '3': {
            text: 'Canoe',
            icon: "canoe1.svg",
            distance: "8 Km",
            categories: [ "canoeing"],
            location: 'Jens Juels Gade 2-52, 2100 København',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '4': {
            text: 'Surfboard',
            icon: "surf1.svg",
            distance: "8 Km",
            categories: ["surf"],
            location: 'Dyrehavevej 18, 2930 Klampenborg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '5': {
            text: 'Windsurf',
            icon: "windsurf1.svg",
            distance: "5 Km",
            categories: ["windsurf"],
            location: 'Jens Juels Gade 2-52, 2100 København',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '6': {
            text: 'Kayak',
            icon: "kayak2.svg",
            distance: "3 Km",
            categories: ["kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '7': {
            text: 'Row boat',
            icon: "rowing1.svg",
            distance: "4 Km",
            categories: ["rowing", "fishing"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '8': {
            text: 'Kayak',
            icon: "kayak3.svg",
            distance: "20 Km",
            categories: ["kayaking"],
            location: 'Dyrehavevej 18, 2930 Klampenborg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '9': {
            text: 'Kayak',
            icon: "kayak4.svg",
            distance: "20 Km",
            categories: ["kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '10': {
            text: 'Kayak',
            icon: "kayak5.svg",
            distance: "20 Km",
            categories: ["kayaking"],
            location: 'Dyrehavevej 18, 2930 Klampenborg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '11': {
            text: 'Kayak',
            icon: "kayak6.svg",
            distance: "20 Km",
            categories: ["kayaking"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '12': {
            text: 'Wakeboard',
            icon: "wakeboard.png",
            distance: "20 Km",
            categories: ["wakeboarding"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '13': {
            text: 'Fishing rod set',
            icon: "fishingrods.jpg",
            distance: "15 Km",
            categories: ["Rowing", "Fishing"],
            location: 'Jægersborg Alle 1A, 2920 Charlottenlund',
            description: 'Set of 7 fishing rods, perfect for a day of fishing with your friends. Like new, lines, bait etc. provided.',
            basePrice: '400',
            rating: '5/5',
            author: 'Jim',
            authorRating: '4.7/5',
            authorDescription: 'Passionate about fishing, with to share it with others.',
        },
        '14': {
            text: 'Canoe',
            icon: "canoe2.svg",
            distance: "8 Km",
            categories: [ "canoeing"],
            location: 'Jens Juels Gade 2-52, 2100 København',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '15': {
            text: 'Canoe',
            icon: "canoe3.svg",
            distance: "8 Km",
            categories: [ "canoeing"],
            location: 'Jens Juels Gade 2-52, 2100 København',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.',
            basePrice: '300',
            rating: '5/5',
            author: 'John',
            authorRating: '4.7/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
        '16': {
            text: 'Canoe',
            icon: "canoe4.svg",
            distance: "0 Km",
            categories: [ "canoeing"],
            location: 'Centrifugevej 374, 2800 Kongens Lyngby',
            description: 'My Canoe is in a very good condition. I am using it only a couple of days mostly in summer nowadays. It the paddles are very high quality, and the canoe itself has  extra paddings.',
            basePrice: '300',
            rating: '5/5',
            author: 'Charis',
            authorRating: '4.9/5',
            authorDescription: 'I am a water sports enthusiast passionate about aquatic sports. I love kayaking and therefore I have bought myself some amazing equipment. I am willing to rent my amazing equipment to fellow kayak lovers. :)',
        },
    });

</script>
<style scoped>
</style>
