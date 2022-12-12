<template>
    <nav class="nav row align-items-center px-5 py-1" style="background-color: #3473BF;">
        <div class="img-container col">
            <RouterLink to="/">
                <img alt="Ocean Let logo" class="logo link" src="@/assets/ol-logo-white.png" />
            </RouterLink>
            </div>
        <div class="input-group d-flex w-25 h-100">
            <input type="text" class="form-control" placeholder="Kayak" style="border: none" v-model="searchText" @keyup="checkEnter">
            <div class="input-group-append">
                <span class="input-group-text search-bar-icon" id="basic-addon1">
                    <i className="icon bi-search text-dark"></i>
                </span>
            </div>
        </div>
        <DatePicker range v-model="date" class="col-2 pull-right"></DatePicker>
    </nav>
    <RouterView></RouterView>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import DatePicker from '@vuepic/vue-datepicker';
    import router from './router'
    import { ref } from 'vue';

    const date = ref([]);
    const searchText = ref('');
    const checkEnter = (e) => {
       if(e.keyCode === 13)
       {
         router.replace(`/search/${searchText.value}`)
       }
    }

</script>