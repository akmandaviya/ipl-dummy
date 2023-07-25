<template>
    <TopBox />
    <NavBar />
    <AllTeamsSlider />
    <div class="left-section">
        <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Logooutline/KKRoutline.png" />
        <p class="team_name">Kolkatta Knight Riders</p>
        <font-awesome-icon class="trophy" icon="trophy" />
        <div class="year-box">
            <p class="years">2012,2014</p>
        </div>
        <a href="https://www.kkr.in/"
            onclick="window.open('https://www.kkr.in/', '_blank'); return false;">
            <button class="site_btn">Official Team Site</button>
        </a>

        <font-awesome-icon icon="up-right-from-square" class="share" />
    </div>
    <div class="right-section">
        <div class="owner">
            <p style="color: #ffc52f; margin-left: 15px; position: relative;top: 7px;font-weight: 700;">Owner</p>
            <p style="color: white; margin-left: 15px; position: relative;top: 7px;font-weight: 700;"> - Knight Riders Sport Pvt. Ltd.</p>
        </div>
        <div class="coach">
            <p style="color: #ffc52f; margin-left: 15px; position: relative;top: 7px;font-weight: 700;">Coach</p>
            <p style="color: white; margin-left: 15px; position: relative;top: 7px;font-weight: 700;"> - Chandrakant Pandit</p>
        </div>
        <div class="venue">
            <p style="color: #ffc52f; margin-left: 15px ; position: relative;top: 7px;font-weight: 700;">Venue</p>
            <p style="color: white; margin-left: 15px; position: relative;top: 7px;font-weight: 700;"> - Eden Gardens
                Stadium</p>
        </div>
        <div class="captain">
            <p style="color: #ffc52f; margin-left: 15px ; position: relative;top: 7px;font-weight: 700;">Captain</p>
            <p style="color: white; margin-left: 15px; position: relative;top: 7px;font-weight: 700;"> - Nitish Rana</p>
        </div>
    </div>
    <div class="teamplayers">
        <div class="batters">
            <p class="batter-text">Batters</p>
            <div v-for="(team, teamIndex) in batterData" :key="teamIndex" class="player-card-box">
                <div v-for="(players, playersIndex) in team" :key="playersIndex" class="player-card">
                    <div v-for="(player, playerIndex) in players" :key="playerIndex">
                        <img class="cskPlayer" :src=player.player_image :alt="player.player_name" />
                        <h3 class="player-name">{{ player.player_name }}</h3>
                        <p class="player-role">{{ player.player_roles }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bowlers">
            <p class="bowler-text">Bowlers</p>
            <div v-for="(team, teamIndex) in bowlerData" :key="teamIndex" class="player-card-box">
                <div v-for="(players, playersIndex) in team" :key="playersIndex" class="player-card">
                    <div v-for="(player, playerIndex) in players" :key="playerIndex">
                        <img class="cskPlayer" :src=player.player_image :alt="player.player_name" />
                        <h3 class="player-name">{{ player.player_name }}</h3>
                        <p class="player-role">{{ player.player_roles }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="allrounders">
            <p class="all-text">All Rounders</p>
            <div v-for="(team, teamIndex) in allRoundData" :key="teamIndex" class="player-card-box">
                <div v-for="(players, playersIndex) in team" :key="playersIndex" class="player-card">
                    <div v-for="(player, playerIndex) in players" :key="playerIndex">
                        <img class="cskPlayer" :src=player.player_image :alt="player.player_name" />
                        <h3 class="player-name">{{ player.player_name }}</h3>
                        <p class="player-role">{{ player.player_roles }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer style="margin-top: -400px;"/>
</template>
<script>
import TopBox from '@/components/HomePage/TopBox.vue';
import NavBar from '@/components/HomePage/NavBar.vue';
import Footer from '@/components/HomePage/Footer.vue';
import AllTeamsSlider from '../AllTeamsSlider.vue';
import {batter,bowler, allRounder} from '../../../dummyData/playerDetails/teamKKR.js'
import { ref } from 'vue';

export default {
    components: { 
        TopBox,
        NavBar,
        Footer,
        AllTeamsSlider
    },
    setup() {
        const batterData = ref(batter)
        const bowlerData = ref(bowler)
        const allRoundData = ref(allRounder)
        return {
            batterData,
            bowlerData,
            allRoundData
        }

    },
}
</script>
<style scoped>

.allrounders { 
    position: relative;
    bottom: 470px;
}
.bowlers {
    position: relative;
    bottom: 470px;
}
.all-text {
    position: relative;
    top: 15px;
    left: 207px;
    width: fit-content;
    font-size: 35px;
    font-weight: 700;
    font-style: italic;
}
.bowler-text{ 
    position: relative;
    top: 15px;
    left: 195px;
    width: fit-content;
    font-size: 35px;
    font-weight: 700;
    font-style: italic;
} 
.batter-text{ 
    position: relative;
    top: 15px;
    left: 205px;
    width: fit-content;
    font-size: 35px;
    font-weight: 700;
    font-style: italic;
}
.batters {
    position: relative;
    bottom: 466px;
}
.player-card-box { 
  display: flex;
  justify-content: center;
}

.player-card { 
border: 1px solid rgb(164, 164, 164);
margin-right: 20px;
margin-top: 20px;
box-shadow: 8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);

}
.cskPlayer { 
    position: relative;
    top: 18px;
    height: 200px;
    width: 200px;
}

.player-name { 
    position: relative;
    top: 7px;
    margin-top: 10px;
    text-transform: uppercase;
    font-size: 15px;
    text-align: center;
    font-weight: 700;
    border-top: 1px solid rgb(186, 186, 186);
}
.player-role {
    text-align: center;
    font-size: 12px;
}
.owner {
    display: flex;
    background: #031945;
    width: 370px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-bottom: 4px;
}

.captain {
    display: flex;
    background: #031945;
    width: 370px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

.coach {
    display: flex;
    background: #031945;
    width: 370px;
    margin-bottom: 4px;
}

.venue {
    display: flex;
    background: #031945;
    width: 370px;
    margin-bottom: 4px;
}

.left-section {
    position: relative;
    bottom: 328px;
}
.left-section img {
    position: relative;
    top: 83px;
    left: 316px;
    height: 117px;
}

.team_name {
    position: relative;
    bottom: 70px;
    color: white;
    left: 450px;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 700;
    width: fit-content;
}

.trophy {
    position: relative;
    left: 450px;
    bottom: 62px;
    height: 40px;
    color: yellow;
}

.year-box {
    position: relative;
    left: 474px;
    bottom: 105px;
    background: #FFFFFF1A;
    width: -moz-fit-content;
    width: 251px;
    border-bottom-right-radius: 26px;
    height: 40px;
}

.years {
    position: relative;
    left: 26px;
    top: 7px;
    color: white;
}

.site_btn {
    position: relative;
    bottom: 77px;
    left: 456px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 15px;
    width: 250px;
    background: #dc5034;
    border: #dc5034;
    color: white;
    height: 40px;
    font-size: 17px;
    font-weight: 700;
}

.share {
    position: relative;
    bottom: 77px;
    left: 417px;
    color: white;
}

.right-section {
    position: relative;
    bottom: 578px;
    left: 800px;
    width: 370px
}
</style>
