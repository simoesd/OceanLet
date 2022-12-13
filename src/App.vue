<template>
    <nav class="nav row align-items-center px-5 py-2" style="background-color: #3473BF;">
        <div class="img-container col">
            <RouterLink to="/">
                <img alt="Ocean Let logo" class="logo link" src="@/assets/ol-logo-white.png" />
            </RouterLink>
            </div>
        <div class="input-group d-flex w-25 h-100 nav-search">
            <input type="text" class="form-control" placeholder="Kayak" style="border: none" v-model="searchText" @keyup="checkEnter">
            <div class="input-group-append">
                <span class="input-group-text search-bar-icon" id="basic-addon1">
                    <i className="icon bi-search text-dark"></i>
                </span>
            </div>
        </div>
        <DatePicker range v-model="date" class="col-2 pull-right nav-datepicker"></DatePicker>
        <div class="dropdown col-1 w-fit-content m-0">
            <a class="d-flex justify-content-center align-items-center outline-0" style="height:fit-content; width:fit-content; overflow: hidden;" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="icon bi-three-dots-vertical text-white"></i>
            </a>
            <ul class="dropdown-menu w-fit-content"  style="min-width: 1rem;" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item text-end w-100" href="#" data-bs-toggle="modal" data-bs-target="#faqStaticBackdrop">FAQ</a></li>
                <li><a class="dropdown-item text-end w-100" href="#" data-bs-toggle="modal" data-bs-target="#insuranceStaticBackdrop">Insurance</a></li>
                <li><a class="dropdown-item disabled text-end w-100" href="#">Add Listing</a></li>
            </ul>
        </div>
    </nav>
    <RouterView></RouterView>

    <!-- Modals -->
    <div class="modal fade" id="faqStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Frequently asked questions</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6 class="fw-bold">How does OceanLet work?</h6>
                    <p class="text-muted"> We help local aquatic sports enthusiasts rent their spare equipment, allowing others to use high quality equipment and enjoy a great experience even if they don't have their own gear with them.</p>
                    
                    <h6 class="fw-bold">I want to list my equipment for rental, how do I do it?</h6>
                    <p class="text-muted"> In the top-right menu (where you found this FAQ), you can find a page that will take you where you need to go. Simply fill out the information about your item, add an image and you're good to go!</p>
                    <p class="text-danger fw-bold"> Listing equipment is disabled for this Demo. </p>
                    
                    <h6 class="fw-bold">I'm looking for gear for my holiday, how do I can I find it?</h6>
                    <p class="text-muted"> If you know exactly what you're looking for, you can use the search bar. Otherwise, check out the activity page for the sport you want to do, and get some ideas!</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="insuranceStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Insurance</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Insurance is compulsory for everyone using OceanLet, and it's part of the displayed price. We work with insurance providers to make it as easy as possible for everyone. </p>
                    <p>This means you don't have to worry about a thing when renting your own equipment, or renting someone elses. Everything is taken care by us. </p>
                </div>
            </div>
        </div>
    </div>
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