
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
            title: 'Bellevue Beach',
            background: 'canoe.jfif',
            description: 'Kayak 👍'
        },
        '2': {
            title: 'Copenhagen Lakes',
            background: 'canoe.jfif',
            description: 'Kayak 👍'
        },
        '3': {
            title: 'canoeing',
            background: 'canoe.jfif',
            description: 'Kayak 👍'
        },
        '4': {
            title: 'surf',
            background: 'canoe.jfif',
            description: 'Kayak 👍'
        },
        '5': {
            title: 'windsurf',
            background: 'canoe.jfif',
            description: 'Kayak 👍'
        },
        '6': {
            title: 'fishing',
            background: 'canoe.jfif',
            description: 'Kayak 👍'
        },
        '7': {
            title: 'rowing',
            background: 'canoe.jfif',
            description: 'Kayak 👍'
        },
        '8': {
            title: 'wakeboarding',
            background: 'canoe.jfif',
            description: 'Kayak 👍'
        },
    }

</script>
<style scoped>
</style>
