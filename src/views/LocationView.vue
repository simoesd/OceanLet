
<template>
    <div class="mb-4 location-background" :style="'background-image: url(\'/OceanLet/assets/' + locationInfo[location.toLowerCase()].background + '\')'" >
        <div class="activity-background-filter p-3">
            <div style="position:relative; height: 100%;">
                <div style="position:absolute; bottom:0; height:fit-content">
                    <div class="activity-bg-label">{{ locationInfo[location.toLowerCase()].title }}</div>
                    <div class="activity-bg-description">{{ locationInfo[location.toLowerCase()].description }}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="container my-4">
        <div class="slider-title ms-3 mb-3">
            <i className="icon bi-water text-primary"></i>
            Listings relevant to this location:
        </div>
        <RecentSlider/>
    </div>
</template>

<script setup>
    import RecentSlider from '../components/RecentSlider.vue';
    defineProps({
        location: {
            required: true,
        }
    })

    const locationInfo = {
        '1': {
            title: 'Copenhagen Lakes',
            background: 'lakes.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.'
        },
        '2': {
            title: 'Bellevue Beach',
            background: 'bellevue.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.'
        },
        '3': {
            title: 'Amager Strand',
            background: 'amager.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.'
        },
        '4': {
            title: 'Lyngby Lakes',
            background: 'lyngby.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.'
        },
        '5': {
            title: 'Charlottenlund',
            background: 'charlottenlund.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.'
        },
        '6': {
            title: 'Christianshavn',
            background: 'christianshavn.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.'
        },
        '7': {
            title: 'Sydhavn',
            background: 'sydhavn.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.'
        },
        '8': {
            title: 'Vedbæk beach',
            background: 'vedbaek.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue eros, vulputate sit amet risus nec, tristique vestibulum nibh. Aliquam quis ex quis diam viverra sollicitudin. Nulla sed condimentum erat. Praesent placerat, sem eu sollicitudin ultrices, diam orci maximus massa, quis semper massa augue ut turpis.'
        },
    }

</script>
<style scoped>
</style>
