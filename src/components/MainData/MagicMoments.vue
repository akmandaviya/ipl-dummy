<template>
    <div class="magic-container">
        <h1>Magic Moments</h1>
        <router-link to="/allMagicMoments"><button type="button" class="btn btn-success">See More</button></router-link>
        <div class="magic-nav">
            <font-awesome-icon icon="chevron-left" @click="handleLeftChange" style="margin-right: 15px; cursor: pointer; color: #eb2a08;" />
            <font-awesome-icon icon="chevron-right" @click="handleRightChange" style="cursor: pointer; color: #eb2a08;" />
        </div>
        <div class="card-container">
            <div class="card" v-for="(item,index) in displayedMagicMoments" 
                 :key="index" 
                  style="width: 18rem;
                         margin-left: 36px; 
                         position: relative; left: 80px;">
            <img :src=item.image
                class="card-img-top" alt="">
            <div class="card-body">
                <p class="card-text">{{ item.content.slice(0,40) }}...</p>
                <font-awesome-icon icon="share-nodes" class="shareIcon"/>
                <hr class="hr" />
                <p class="card-date">{{item.date}} |</p>
                <font-awesome-icon icon="eye" class="eyeViews" />
                <p class="card-views">{{ item.views }}</p>
            </div>
        </div>
        </div>
        
    </div>
</template>
<script>
import { magicData } from '../../dummyData/magicMoment'
import { ref, computed } from 'vue'
export default ({
    setup() {
        const magicMomemts = ref(magicData)
        const currentIndex = ref(0)

        const displayedMagicMoments = computed(() => {
            const start = currentIndex.value;
            const end = currentIndex.value + 4;
            return magicMomemts.value.slice(start, end);
        });

        function handleLeftChange() {
            if (currentIndex.value >= 1) {
                currentIndex.value--;
            }
        }
        function handleRightChange() {
            if (currentIndex.value + 4 < magicMomemts.value.length) {
                currentIndex.value++;
            }
        }
        return {
            magicMomemts,
            displayedMagicMoments,
            handleLeftChange,
            handleRightChange
        }
    },
})
</script>
<style scoped>
.hr {
    width: 260px;
    position: relative;
    bottom: 50px;
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

.card-container {
    display: flex;
}
.card-body {
 height: 140px;
}

.card {
    border-radius: 10px;
    margin-left: 100px;
    margin-top: -20px;
}

.card img {
    border-radius: 10px;
}

.card-text {
    color: rgb(17 20 28 / 100%);
    width: calc(100% - 50px) !important;
    font-size: 15px;
    line-height: 24px;
    font-family: 'Hind', sans-serif;
    margin-top: -6px;
    text-align: center;
    text-transform: uppercase;
    text-align: left;
}
.card-date {
    font-size: 15px;
    position: relative;
    bottom: 41px;
}

.eyeViews {
    position: relative;
    bottom: 80px;
    left: 100px;
}

.card-views {
    position: relative;
    bottom: 105px;
    left: 124px;
}
.shareIcon {
    position: relative;
    bottom: 53px;
    left: 225px;
    height: 25px;
    width: 25px;
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

.magic-nav {
    display: flex;
    position: relative;
    left: 1340px;
    top: -53px;
    height: fit-content;
    color: white;
    font-size: larger;
    color: grey;
    width: fit-content !important;
}
</style>
