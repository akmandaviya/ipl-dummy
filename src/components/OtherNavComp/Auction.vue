<template>
    <TopBox/>
    <NavBar/>  
    <div class="info-box">
            <h3>TATA IPL 2023 Player Auction</h3>
            <p>The TATA IPL 2023 Player Auction saw a total of 80 players sold and INR 1,67,00,00,000 spent collectively amongst the ten franchises in Kochi. The auction was heavily dominated by the all-rounders,<br>
                who were in massive demand. English all-rounder Sam Curran, who was the buzz of the town even before his name went under the hammer, smashed an all-time record and became the most<br>
                 expensive player in the history of IPL auctions. The all-rounder announced his return to the Punjab Kings with a topmost bid of INR 18.50 Crore. Meanwhile, Cameron Green and Ben Stokes earned big <br>
                 after being bought by Mumbai Indians for INR 17.50 Crore and Chennai Super Kings for 16.25 Crore respectively. Indian batting star Mayank Agarwal made his way to the Sunrisers Hyderabad for INR <br>
                 8.25 crore along with explosive English batter Harry Brook who made merry at the auction too. Pace sensation Shivam Mavi became the most expensive bowler after defending champions Gujarat<br>
                  Titans acquired his services for INR 6 crores. The intriguing mind games and intense bidding wars were just glimpses of the upcoming action-packed TATA IPL 2023.
                </p>
        </div>
        <div class="content-box">
                <div class="left-section">
                <img src="https://www.insidesport.in/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-23-at-21.15.39.jpg?w=690"/>
                <div class="left-title">
                    <h4>Top buys from TATA IPL Player Auction 2023</h4>
                </div>
                
            </div>
            <div class="right-section">
                <h4>MOST EXPENSIVE PLAYER</h4>
                <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/franchises/1671188073_PBKSroundbig%20%282%29%201.png"/>
                <h5>Sam Curran</h5>
                <h2>&#8377; 18,50,00,000</h2>
                <div class="player-data">
                   <div class="num">
                    <h3>80</h3>
                    <p>Players Sold</p>
                   </div> 
                   <div class="oversea">
                    <h3>29</h3>
                    <p>OverSeas Players</p>
                   </div>
                   <div class="spent">
                    <h3>&#8377; 1,67,00,00,000</h3>
                    <p>Total Spent</p>
                   </div>
                </div>
            </div>
            </div>
        
    <Footer/>
</template>
<script>
import TopBox from '../HomePage/TopBox.vue';
import NavBar from '../HomePage/NavBar.vue';
import Footer from '../HomePage/Footer.vue';
export default {
    setup() {
    },
    components: { NavBar,TopBox,Footer }
}
</script>
<style scoped>
.info-box { 
    background: #3c3c4e;
}
.info-box h3 { 
    color: white;
    text-align: center;
    font-weight: 700;
}

.info-box p { 
    color: white;
    text-align:center;
}

.left-section {
   position: relative;
   left: 60px;
  width: 550px;
}

.left-title { 
    border-top: 5px solid rgb(212, 212, 6);
    background: rgb(25, 7, 96);
    width: 690px;
    height: 40px;
}
.left-title h4 { 
    color: white;
    text-align: center;
}
.right-section { 
    position: relative;
    left: 300px;
    border: 0.5px solid black;
    width: 600px;
    height: 460px;
}

.right-section h4 {
    position: relative;
    top: 10px;
    text-align: center;
    font-weight: 700;
    font-size: 30px;
}

.right-section h5 { 
    position: relative;
    top: 40px;
    text-align: center;
    font-size: 30px;
}

.right-section h2 { 
    position: relative;
    top: 60px;
    text-align: center;
    font-weight: 700;
    font-size: 70px;
}

.right-section img { 
    position: relative;
    top: 20px;
    width: 100px;
    margin: auto;
    display: block;
}
.content-box {
    display: flex;
}

.player-data { 
    position:relative;
    top: 95px;
    display: flex;
    justify-content: space-evenly;
    background: rgb(25, 7, 96);
    color: white;
    border-top: 5px solid rgb(212, 212, 6);
}
</style>
