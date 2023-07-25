<template>
    <div class="magic-container">
        <h1>Latest News</h1>
        <router-link to="/allNews"><button type="button" class="btn btn-success">See More</button></router-link>
        <div class="news-nav">
            <font-awesome-icon icon="chevron-left" @click="handleLeftChange" style="margin-right: 15px; cursor: pointer; color: #eb2a08;" />
            <font-awesome-icon icon="chevron-right" @click="handleRightChange" style="cursor: pointer; color: #eb2a08;" />
        </div>
        <div style="display: flex;">
            <div class="card" v-for="(item,index) in displayedNewsData" :key="index" style="width: 18rem;
                         margin-left: 36px; 
                         position: relative; left: 80px;">
            <img :src=item.image
                class="card-img-top" alt="">
            <div class="card-body">
                <p class="card-title">{{ item.title.slice(0,27) }}...</p>
                <hr class="hr" />
                <p>{{item.date}}</p>
            </div>
        </div>
        </div>
        
    </div>
</template>
<script>
import {latestNews} from '../../dummyData/latestNews'
import {ref, computed} from 'vue'
export default ({
    setup() {
        const newsData = ref(latestNews)
        const currentIndex = ref(0)

        const displayedNewsData = computed(() => {
            const start = currentIndex.value;
            const end = currentIndex.value + 4;
            return newsData.value.slice(start, end);
        });

        function handleLeftChange() {
            if (currentIndex.value >= 1) {
                currentIndex.value--;
            }
        }
        function handleRightChange() {
            if (currentIndex.value + 4 < newsData.value.length) {
                currentIndex.value++;
            }
        }
        return {
            newsData,
            displayedNewsData,
            handleLeftChange,
            handleRightChange,
        }
    },
})
</script>
<style scoped>
.hr {
    width: 260px;
    position: relative;
    bottom: 10px;
    right: 5px;
}

.magic-container {
    background: #10172b;
    width: 100%;
    height: 430px;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
}

.magic-container h1 {
    position: relative;
    top: 20px;
    color: white;
    font-style: italic;
    font-weight: 600;
    font-size: 28px;
    margin-left: 120px;
    margin-top: 30px;
    font-weight: bold;
}

.card {
    border-radius: 10px;
    margin-left: 100px;
    margin-top: -30px;
}

.card img {
    border-radius: 10px;
}

.card-text {
    color: rgb(17 20 28 / 100%);
    width: calc(100% - 50px) !important;
    font-size: 20px;
    line-height: 24px;
    font-family: 'Hind', sans-serif;
    margin-top: 5px;
    margin-left: 21px;
    text-align: center;
}

.card-body {
 height: 130px;
}

.card-title {
    text-transform: uppercase;
    font-weight: bold;
}
.btn-success {
    position: relative;
    left: 1200px;
    top: -25px;
    border: 1px solid white;
    background: none;
    color: white;
    transition: 0.5s;
}

.btn-success:hover {
    background: #ef4123;
}

.news-nav {
    display: flex;
    position: relative;
    left: 1340px;
    top: -53px;
    height: fit-content;
    color: white;
    color: grey;
    width: 0px;
}
</style>
