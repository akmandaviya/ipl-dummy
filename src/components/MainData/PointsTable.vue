<template>
    <div class="points-container">
        <div class="point-text">
            <h1>Points Table</h1>
        </div>
        <div class="point-button">
            <font-awesome-icon icon="chevron-left" @click="handleLeftChange" style="margin-right: 15px; cursor: pointer; color: #eb2a08;" />
            <font-awesome-icon icon="chevron-right" @click="handleRightChange" style="cursor: pointer; color: #eb2a08;" />
        </div>
        <div class="card" v-for="(item, index) in displayedTeamPoints" :key="index" style="width: 20rem;">
            <h1>{{ item.s_no }}</h1>
            <p class="s_no-clone">{{ item.s_no }}</p>
            <h5 class="card-title">{{ item.team_name }}</h5>
            <img style="width: 150px; height: 150px;" :src=item.team_logo class="card-img-top" alt="">
            <div class="card-body">
                <div style="margin-right: 7px;">
                    <label>Points</label>
                    <p class="card-point">{{ item.points }}</p>
                </div>
                <div style="margin-right: 7px;">
                    <label>Played</label>
                    <p class="card-point">{{ item.played }}</p>
                </div>
                <div style="margin-right: 7px;">
                    <label>Won</label>
                    <p class="card-point">{{ item.won }}</p>
                </div>
                <div style="margin-right: 7px;">
                    <label>NRR</label>
                    <p style="color: green;" class="card-point">{{ item.nrr }}</p>
                </div>

            </div>
            <!-- <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> -->
        </div>
    </div>
</template>
<script>

import { pointsData } from '../../dummyData/pointsTable'
import { ref, computed } from 'vue'
export default {
    setup() {
        const teamPoints = ref(pointsData)// reference of team pointd from dummy data
        const currentIndex = ref(0)

        // to limit 4 teams point table to display at a time
        const displayedTeamPoints = computed(() => {
            const start = currentIndex.value;
            const end = currentIndex.value + 4;
            return teamPoints.value.slice(start, end);
        });


        // handling the prev button for point table
        function handleLeftChange() {
            if (currentIndex.value >= 1) {
                currentIndex.value--;
            }
        }



        // handling the next button for point table
        function handleRightChange() {
            if (currentIndex.value + 4 < teamPoints.value.length) {
                currentIndex.value++;
            }
        }

        return {
            teamPoints,
            handleLeftChange,
            handleRightChange,
            displayedTeamPoints,
            currentIndex,
        }
    },
}
</script>
<style scoped>
.point-button {
    display: flex;
    position: relative;
    left: 1140px;
    top: 10px;
    height: fit-content;
    color: grey;
    font-size: larger;
}

.points-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 10px;
}

.point-text {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
    width: 20% !important;
    text-align: center;
}

.point-text h1 {
    position: relative;
    left: 135px;
    top: -30px;
    font-style: italic;
    font-weight: 600;
    font-size: 30px;
    color: #1d1d1d;
    font-family: 'Hind', sans-serif;
    margin-top: 10px;
}

.card-title {
    position: relative;
    bottom: 240px;
    left: 65px;
    font-weight: bolder;
    text-align: center;
    font-size: 27px;
    font-family: 'Hind', sans-serif;
    font-family: 'Poppins', sans-serif;
}

.card-body {
    position: relative;
    bottom: 217px;
    display: flex;
    justify-content: space-around;
    text-align: center;
}

.card-body label {
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;
    font-family: Rubik, sans-serif;
    color: rgb(185, 178, 178);
}

.card-body p {
    font-family: 'Bebas Neue';
    font-weight: 300;
    font-size: 18px;
    line-height: 29px;
    color: #11141c;
    margin-right: 4px;
    font-family: 'Hind', sans-serif;
}

.card {
    position: relative;
    right: 150px;
    margin-left: 40px;
    margin-top: 80px;
    margin-bottom: 20px;
    width: 300px;
    padding: 10px 10px;
    border-radius: 20px;
    height: 370px;
    transition: 0.8s ease;
}

.card:hover {
    border: 0.5px solid  #11141c;
    box-shadow: 8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);
    transform: scale(1.1)
}

.card img {
    position: relative;
    bottom: 225px;
    left: 52px;
}

.card h1 {
    font-size: 85px;
    font-family: 'Hind', sans-serif;
    width: fit-content;
    position: relative;
    left: 10px;
    bottom: 10px;
    z-index: 5;
}

.s_no-clone {
    font-size: 85px;
    width: fit-content;
    font-weight: lighter;
    color: #bbb8b8;
    position: relative;
    bottom: 140px;
    left: 20px;
}
</style>
