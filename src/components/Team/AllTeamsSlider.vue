<template>
    <div class="slider-box" >
            <div class="image-wrapper">
            <div class="team-image-card" v-for="(item, index) in displayedLogo" :key="index" >
                <router-link :to="item.team_routes">
                    <img :src="item.team_logo"/>
                </router-link>
            </div>
        </div>
            <font-awesome-icon icon="chevron-left" class="left-btn" @click="handleLeftChange"/>
            <font-awesome-icon icon="chevron-right" class="right-btn" @click="handleRightChange"/>
        </div>
</template>
<script>
import { ref, computed } from 'vue'
import {teamCard} from '../../dummyData/teamCardDetails'
export default {
    setup() {
        const teamImage = ref(teamCard)
        const currentIndex = ref(0)

        // to limit 4 teams point table to display at a time
        const displayedLogo = computed(() => {
            const start = currentIndex.value;
            const end = currentIndex.value + 7;
            return teamImage.value.slice(start, end);
        });


        // handling the prev button for point table
        function handleLeftChange() {
            if (currentIndex.value >= 1) {
                currentIndex.value--;
            }
        }

        // handling the next button for point table
        function handleRightChange() {
            if (currentIndex.value + 4 < teamImage.value.length) {
                currentIndex.value++;
            }else { 
                currentIndex.value = 0
            }
        }
        return {
            teamImage,
            handleLeftChange,
            handleRightChange,
            displayedLogo
        }
    },
}
</script>
<style scoped>

.slider-box {
    background: #071628;
    height: 500px;
}
.team-image-card {
    background: #031537;
    margin-left: 10px;
    width: fit-content;
    width: 100px;
    height: 100px;
}

.team-image-card img {
    position: relative;
    top: 12px;
    left: 15px; 
    width: 70px;
    height: 70px;
}

.image-wrapper { 
    position: relative;
    left: 330px;
    top: 17px;
    display: flex;
    width: fit-content;
}

.left-btn  { 
    position: relative;
    bottom: 50px;
    left: 250px;
    color: white;
    height: 25px;
    cursor: pointer;
}

.right-btn{ 
    position: relative;
    bottom: 50px;
    left: 1150px;
    color: white;
    height: 25px;
    cursor: pointer;
}
</style>
