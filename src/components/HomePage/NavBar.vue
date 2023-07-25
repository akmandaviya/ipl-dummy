<template>
    <div :class="isSearchMode === true ? 'isSearchMode' : 'nav-back'">
        <div class="nav-box">
       <img :src=logo alt="icon"  />
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" to="/">HOME</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link  to="/allMagicMoments" class="nav-link active" aria-current="page" >VIDEOS</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link  to="/stats" class="nav-link active" aria-current="page" >STATS</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link  class="nav-link active"  to="/pointstable" aria-current="page" >POINT TABLE</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/teams">TEAMS</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/allMagicMoments" class="nav-link" >NEWS</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/fantasy" class="nav-link" >FANTASY</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    MORE
                                </a>
                                <ul class="dropdown-menu">
                                    <li><router-link class="dropdown-item" to="/about">ABOUT</router-link></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><router-link class="dropdown-item" to="/mobileproducts">MOBILE PRODUCTS</router-link></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><router-link class="dropdown-item" to="/photos">PHOTOS</router-link></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><router-link class="dropdown-item" to="/venue">VENUES</router-link></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><router-link class="dropdown-item" to="/fancontest">FAN CONTEST</router-link></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><router-link class="dropdown-item" to="/auction">AUCTION</router-link></li>
                                </ul>
                            </li>
                        </ul>

                        <div class="search-box">
                            <font-awesome-icon icon="fa-magnifying-glass" class="search-icon" @click="openSearchBox()"
                                data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
                                aria-controls="collapseExample">
                            </font-awesome-icon>
                        </div>

                    </div>
                </div>
            </nav>
            <SearchBar @close="showPopup = false" v-model="showPopup" />

        </div>

    </div>
</template>
<script>
import { ref } from 'vue'
import SearchBar from '../HomePage/SearchBar.vue'
import logo from '../../assets/logo.png'
export default {
    components: {
    SearchBar,
},
    setup() {
        const showPopup = ref(false)
        const isSearchMode = ref(false)

        function openSearchBox() {
            showPopup.value = true
            toggleSearchMode()
        }

        function toggleSearchMode() {
            isSearchMode.value = !isSearchMode.value
        }

        return {
            openSearchBox,
            showPopup,
            isSearchMode,
            logo:logo
        }
    },
}
</script>

<style scoped>
.container-fluid {
    position: relative;
    top: -51px;
}

.nav-back {
    border: 1px solid #19398a;
    background: #19398a;
    height: 70px;
}

.isSearchMode {
    border: 1px solid #19398a;
    background: #19398a;
    height: 130px;
}

.nav-box img {
    height: 47.5px;
    width: 95px;
    margin-top: 46px;
    margin-left: -200px;
}

.nav-box {
    position: absolute;
    top: 5px;
    left: 300px;
}

.nav-item {
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
}

ul li a {
    color: white;
}

.navbar-nav .nav-item {
    margin-right: 10px;
    padding-right: 20px;
}

.dropdown-menu {
    margin-top: 17px;
}

.dropdown-item {
    color: black;
    font-weight: bold;
    font-family: 'Kanit', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    font-size: 15px;
    padding: 10px;
    height: 40px;
}

.dropdown-item:hover {
    background: #ef4123;
    color: white;
    box-shadow: 8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);
    text-align: center;
}

.search-box {
    margin-left: 110px;
}

.search-box .search-icon {
    width: 25px;
    height: 25px;
    position: absolute;
    left: 1100px;
    bottom: 13px;
    color: white;
    cursor: pointer;
}
</style>