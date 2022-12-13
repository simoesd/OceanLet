
<template>
    <div class="mb-4 activity-background" :style="'background-image: url(\'/OceanLet/assets/' + activityInfo[activity.toLowerCase()].background + '\')'" >
        <div class="activity-background-filter p-3">
            <div style="position:relative; height: 100%;">
                <div style="position:absolute; bottom:0; height:fit-content">
                    <div class="activity-bg-label">{{ activityInfo[activity.toLowerCase()].title }}</div>
                    <div class="activity-bg-description">{{ activityInfo[activity.toLowerCase()].description }}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="my-4">
            <RecentSlider class="my-5" :activity="activity"/>
        </div>
    </div>
</template>

<script setup>
    import RecentSlider from '../components/RecentSlider.vue';
    defineProps({
        activity: {
            required: true,
        }
    })

    const activityInfo = {
        'paddleboard': {
            title: 'paddleboard',
            background: 'paddle-board.png',
            description: 'Kayak 👍'
        },
        'kayaking': {
            title: 'Kayaking',
            background: 'kayak.png',
            description: 'Kayak 👍'
        },
        'canoeing': {
            title: 'canoeing',
            background: 'canoe.png',
            description: 'Kayak 👍'
        },
        'surf': {
            title: 'surf',
            background: 'surfboard.png',
            description: 'Kayak 👍'
        },
        'windsurf': {
            title: 'windsurf',
            background: 'windsurving.png',
            description: 'Kayak 👍'
        },
        'fishing': {
            title: 'fishing',
            background: 'fishing.png',
            description: 'Kayak 👍'
        },
        'rowing': {
            title: 'rowing',
            background: 'rowing.png',
            description: 'Kayak 👍'
        },
        'wakeboarding': {
            title: 'snorkeling',
            background: 'snorkel.png',
            description: 'Kayak 👍'
        },
    }

</script>
<style scoped>
</style>
