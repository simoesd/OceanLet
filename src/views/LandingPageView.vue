
<template>
    <div class="container">
        <div class="my-4">
            <div class="slider-title my-3">
                <i className="icon bi-water text-primary"></i>
                Activities
            </div>
            <ActivitySlider/>
        </div>
        <hr style="opacity: 0;">
        <div class="my-4">
            <div class="slider-title my-3">
                <i className="icon bi-geo-alt-fill text-danger"></i>
                Locations
            </div>
            <LocationSlider/>
        </div>
        <hr style="opacity: 0;">
        <div class="my-4">     
            <div class="slider-title my-3">
                <i className="icon bi-lightbulb-fill text-warning"></i>
                Recent Listings
            </div>
            <RecentSlider/>
        </div>
    </div>
</template>

<script setup>
    import ActivitySlider from '../components/ActivitySlider.vue';
    import LocationSlider from '../components/LocationSlider.vue';
    import RecentSlider from '../components/RecentSlider.vue';
</script>
<style scoped>
</style>
