
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
            background: 'paddle-board.svg',
            description: 'Looking for a fun and challenging way to get in shape and enjoy the great outdoors? Paddle boarding is the perfect activity for you! This exciting water sport involves standing on a large board, similar to a surfboard, and using a paddle to propel yourself through the water. Paddle boarding provides a full-body workout that will improve your balance, strength, and endurance. It can be done in both ocean and freshwater environments, and is a popular activity for people of all ages. So why not give it a try? Grab a board and hit the water today!'
        },
        'kayaking': {
            title: 'kayaking',
            background: 'kayak.svg',
            description: 'If you love being on the water and enjoy a good upper-body workout, kayaking is the perfect activity for you! This exciting water sport involves sitting in a small boat, known as a kayak, and using a paddle to move through the water. Kayaks are narrow and long, making them easy to maneuver and perfect for exploring the outdoors. Whether you want to leisurely paddle through a calm lake or tackle rough ocean waves, kayaking has something to offer for everyone. So why not give it a try? Grab a kayak and hit the water today!'
        },
        'canoeing': {
            title: 'canoeing',
            background: 'canoe.svg',
            description: 'Canoeing is a fun and exciting way to explore the outdoors and get a great upper-body workout at the same time! This popular water sport involves sitting or kneeling in a small, narrow boat known as a canoe, and using a single-bladed paddle to move through the water. Canoes are open on top, allowing you to easily enjoy the scenery and wildlife around you. Whether you want to leisurely paddle through a calm lake or tackle rough river rapids, canoeing has something to offer for everyone. So why not give it a try? Grab a canoe and hit the water today!'
        },
        'surf': {
            title: 'surf',
            background: 'surfboard.svg',
            description: 'Are you ready to experience the thrill of gliding across the water on a surfboard? Surfing is an exhilarating water sport that will provide you with a full-body workout, improve your balance and strength, and connect you with the natural beauty of the ocean. Whether you\'re a seasoned pro or a beginner looking to try something new, surfing has something to offer for everyone. So why wait? Grab a board and hit the waves today!'
        },
        'windsurf': {
            title: 'windsurf',
            background: 'windsurfing.svg',
            description: 'Windsurfing is an exciting and challenging water sport that combines the thrill of surfing with the power of the wind. This popular activity involves standing on a board, similar to a surfboard, and using a sail to catch the wind and propel yourself across the water. Windsurfing provides a great full-body workout and can improve balance, strength, and endurance. It can be done in both ocean and freshwater environments, and is a popular activity for people of all ages. So why not give it a try? Grab a board and hit the water today!'
        },
        'fishing': {
            title: 'fishing',
            background: 'fishing.svg',
            description: 'Fishing is a relaxing and enjoyable way to connect with nature and spend time outdoors. This popular activity involves catching fish using a variety of methods, such as angling with a fishing rod and reel or using a net. Fishing can be done in both freshwater and saltwater environments, and can be either recreational or competitive. In addition to providing a peaceful and enjoyable experience, fishing can also provide a healthy source of food. So why not give it a try? Grab a fishing rod and hit the water today!'
        },
        'rowing': {
            title: 'rowing',
            background: 'rowing.svg',
            description: 'Rowing is a popular water sport that provides a great full-body workout and can improve strength, endurance, and coordination. This activity involves sitting in a boat, known as a rowboat or shell, and using oars to move through the water. Rowing can be done in both ocean and freshwater environments, and can be either recreational or competitive. In addition to providing a challenging and enjoyable workout, rowing also provides a peaceful and scenic way to explore the outdoors. So why not give it a try? Grab an oar and hit the water today!'
        },
        'wakeboarding': {
            title: 'wakeboarding',
            background: 'wakeboarding.svg',
            description: 'Wakeboarding is an exciting and challenging water sport that combines the thrill of surfing with the power of a boat. This popular activity involves standing on a board, similar to a surfboard, and using a rope attached to a boat to ride across the water. Wakeboarding provides a great full-body workout and can improve balance, strength, and coordination. It can be done in both ocean and freshwater environments, and is a popular activity for people of all ages. So why not give it a try? Grab a board and hit the water today!'
        },
    }

</script>
<style scoped>
</style>
