<template>
    <div>
        <TopBox/>
        <NavBar/>
        <div class="allMagic_container">
        <div class="card-box">
                <div v-for="(item, index) in allNewsItem" :key="index" class="main-card">
                    <div v-for="(microItem, microIndex) in item" :key="microIndex" class="sub-card">
                        <div v-for="(nanoItem, nanoIndex) in microItem" :key="nanoIndex" class="card-body">
                            <div style="width: fit-content;">
                                <img class="magik-img" :src=nanoItem.image />
                            </div>
                            <div class="card-data">
                                    <p class="card-content">{{ nanoItem.title}}...</p>
                                    <p class="card-date">{{ nanoItem.date }}</p>
                                </div>
                       
                        </div>
                    </div>
                </div>
        </div>
    </div>
        <Footer/>
    </div>
</template>
<script>
import NavBar from '../HomePage/NavBar.vue'
import TopBox from '../HomePage/TopBox.vue'
import Footer from '../HomePage/Footer.vue'
import {allNews} from '../../dummyData/allLatestNews.js'
import { ref} from 'vue'

export default {
    components: {
        NavBar,
        TopBox,
        Footer
    },
    setup() {
        const allNewsItem = ref(allNews)
        return {
            allNewsItem,
        }
    },
}
</script>
<style scoped>
.card-content { 
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 800;
}
.img-box {
    background: white;
    height: 160px;
    border-bottom-left-radius: 130px;
    border-bottom-right-radius: 130px;
    box-shadow: 8.0px 16.0px 16.0px hsla(0, 23%, 5%, 0.25);
}

.magik-img { 
    width: 313px;
    height: 180px
}

.card-body {
    width: 340px;
}

.main-card { 
    position: relative;
    left: 50px;
    top: 20px;
    display: flex;
    width: fit-content;
}

.sub-card {
    height: 285px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
}
.card-box { 

}
</style>
