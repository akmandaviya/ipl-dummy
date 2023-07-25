<template>
    <div style="margin-top: 20px;" class="footer-container">
        <div class="partner-section">
            <div class="title-partner">
                <p>TITLE SPONSORS</p>
                <a href="https://www.tata.com/" onclick="window.open('https://www.tata.com/', '_blank'); return false;"><img :src=tata alt="" /></a>
            </div>
            <div class="all-partner">
                <p class="offical-partner">OFFCIAL PARTNERS</p>
                <ul class="official-list">
                    <li style="position: relative; left: 10px; top: 10px; "><img :src=dream11 alt="" /></li>
                    <li style="position: relative; left: 171px; top: -33px;"><img :src=cred alt="" /></li>
                    <li style="position: relative; left: 333px; top: -76px;"><img :src=upstox alt="" /></li>
                    <li style="position: relative; left: 8px; top: -67px;"><img :src=rupay alt="" /></li>
                    <li style="position: relative; left: 173px; top: -109px;"><img :src=saudi alt="" /></li>
                    <li style="position: relative; left: 336px; top: -153px;"><img :src=herbalife alt="" /></li>
                </ul>

                <div class="vertical-divider"></div>

                <div class="right-side-partner">
                    <div style="position: relative; left: 607px; top: -58px;">
                        <p style="text-align: center;">OFFCIAL ORANGE CAP <br>
                            AND PURPLE CAP PARTNER
                        </p>
                        <img :src=aramco alt="" style="width: 130px; height: 48px; position: absolute; bottom: 100px; left: -20px;" />
                    </div>
                    <div class="pay-tm">
                        <p style="position: relative; bottom: 51px; left: -6px; text-align: center;">OFFCIAL UMPIRE <br> PARTNER</p>
                        <div class="paytm-box"><img :src=paytm alt="" style="width: 81px; height: 25px;" /></div>
                    </div>
                    <div class="ceat">
                        <p style="text-align: center; position: relative; top: -11px; left: -8px;">OFFCIAL STRATERGIC <br>TIMEOUT PARTNER</p>
                       <div class="ceat-box"><img :src=ceat alt="" style="width: 74px; height: 22px;" /></div> 
                    </div>
                    <div class="star">
                        <p style="position: relative; top: -17px; left: 16px;">OFFCIAL <br>BROADCASTER</p>
                        <img :src=star alt="" style="position: relative; bottom: 14px; width: 100px; height: 80px;" />
                    </div>
                    <div class="jio-cinema">
                        <p style="position: relative; top: -26px; left: -193px;">OFFCIAL DIGITAL <br>STREAMING PARTNER</p>
                        <img :src=jiocinema alt="" style="position: relative; right: 190px; width: 100px; height: 80px; bottom: 17px;" />
                    </div>
                </div>
            </div>
        </div>
        <div class="data-item">
          <ul class="data-item-list">
            <li class="list-heading">TEAM
                <ul class="team-list">
                   <router-link style="text-decoration: none;" to="/teams/CSK"><li>Chennai Super King</li> </router-link>
                   <router-link style="text-decoration: none;" to="/teams/DC"><li>Delhi Capitals</li></router-link>
                   <router-link style="text-decoration: none;" to="/teams/GT"><li>Gujarat Titans</li></router-link>
                   <router-link style="text-decoration: none;" to="/teams/KKR"><li>Kolkata Knight Riders</li></router-link>
                   <router-link style="text-decoration: none;" to="/teams/LSR"><li>Lucknow Super Giants</li></router-link>
                   <router-link style="text-decoration: none;" to="/teams/MI"><li>Mumbai Indians</li></router-link>
                   <router-link style="text-decoration: none;" to="/teams/PBKS"><li>Punjab Kings</li></router-link>
                   <router-link style="text-decoration: none;" to="/teams/RR"><li>Rajasthan Royals</li></router-link>
                   <router-link style="text-decoration: none;" to="/teams/RCB"><li>Royal Challengers Banglore</li></router-link>  
                   <router-link style="text-decoration: none;" to="/teams/SRH"><li>Sunrisers Hyderabad</li> </router-link>
                </ul>
            </li>
            <li class="list-heading">ABOUT
                <ul class="team-list">
                    <router-link style="text-decoration: none;" to="/about"><li>About Us</li></router-link>
                    <li>Anti Corruption Policy</li>
                    <li>Anti Doping Policy</li>
                    <li>TUE Application Form</li>
                    <li>Anti Discrimination Policy</li>
                    <li>Clothing and Equipment Regulations</li>
                    <li>Code of Conduct For Players And Teams Officials</li>
                    <li>News Action Regulations</li>
                    <li>Image Use Terms</li>
                </ul>
            </li>
            <li class="list-heading">GUIDELINES
                <ul class="team-list">
                    <li>IPL Code of Conduct For Match Officials</li>
                    <li>Brand and Protection Guidelines</li>
                    <li>Governing Council</li>
                    <li>Match Playing Conditions</li>
                    <li>PMOA Minimum Standard</li>
                    <li>Suspect Action Policy</li>
                </ul>
            </li>
            <li class="list-heading">CONTACT
                <ul class="team-list">
                    <li>Contact Us</li>
                    <li>Sponsorship</li>
                    <li>Privacy Policy</li>
                </ul>
            </li>
          </ul>

        </div>
        <div class="copyright">
            <span>Copyright &copy; By AbdulKarim Mandaviya - IPL Demo</span>
        </div>
    </div>
</template>
<script>
import tata from '../../assets/tata.png'
import dream11 from '../../assets/dream11.png'
import cred from '../../assets/cred.png'
import upstox from '../../assets/upstox.png'
import rupay from '../../assets/rupay.png'
import saudi from '../../assets/saudi.png'
import herbalife from '../../assets/herbalife.png'
import aramco from '../../assets/aramco.png'
import paytm from '../../assets/paytm.webp'
import ceat from '../../assets/ceat.webp'
import star from '../../assets/star.png'
import jiocinema from '../../assets/jiocinema.png'

export default ({
    setup() {
        return {
            tata,
            dream11,
            cred,
            upstox,
            rupay,
            saudi,
            herbalife,
            aramco,
            paytm,
            ceat,
            star,
            jiocinema
        }
    },
})
</script>
<style scoped>
.data-item{
 margin-left: 90px;
 margin-top: 20px;
}

.data-item-list{
    display: flex;
    justify-content: space-between;
}

.team-list {
    list-style-type: none;
    position: relative;
    right: 9px;
    padding: 10px;
}

.team-list li {
    font-size: 13px;
    line-height: 40px;
    color: #777777;
    transition: 0.3s ease;
}
.team-list li:hover {
    border-bottom: 1px solid #777777;
    margin-bottom: -5px;
    cursor: pointer;
    width: fit-content;
}
.data-item-list .list-heading {
    list-style-type: none;
    font-weight: bold;
}
.jio-cinema {
    position: relative;
    bottom: 112px;
}

.star {
    position: relative;
    bottom: 121px;
}
.copyright {
    width: 1519;
    height: 48px;
    background-color: rgb(24, 21, 21)
}

.copyright span {
    color: white;
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    position: relative;
    top: 14px;
}

.title-partner {
    display: flex;
    justify-content: center;
    height: 150px;
    background-color: #131010;
}

.title-partner p {
    font-weight: 600;
    font-size: 9px;
    height: 30px;
    position: relative;
    top: 19px;
    left: 86px;
    color: white;
    letter-spacing: 1px;
    margin-inline: 4px;
    font-family: Rubik,sans-serif;
}

.title-partner img {
    height: 78.64px;
    width: 90px;
    position: relative;
    right: 6px;
    top: 45px;
}

.all-partner {
    height: 203px;
    width: 1519;
    background: rgb(0, 0, 0);
}

.all-partner img {
    height: 42.88px;
    width: 153.71px;
}

.all-partner .offical-partner {
    position: relative;
    left: 268px;
    top: 15px;
    margin-bottom: 38px;
    color: #8c8c8c;
    font-weight: 600;
    font-size: 9px;
    letter-spacing: 1px;
    font-family: Rubik,sans-serif;
}

.data-item {
    height: 456px;
    width: 1305px;
    color: rgb(50, 45, 45);
}

.official-list {
    list-style-type: none;
    margin-left: 44px;
}

.official-list li {
    width: fit-content;
}

.offical-partner{
   width: fit-content;
}

.right-side-partner {
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 300px;
    left: 58px;
    width: 1462px;
}

.right-side-partner p {
    position: relative;
    bottom: 80px;
    left: -22px;
    color: #8c8c8c;
    font-weight: 600;
    font-size: 9px;
    letter-spacing: 1px;
    font-family: Rubik,sans-serif;
}

.vertical-divider {
    position: relative;
    bottom: 296px;
    left: 610px;
    height: 140px;
    width: 1px;
    background: #8c8c8c;
}

.paytm-box {
    position: relative;
    bottom: 40px;
    width: 104px;
    background: white;
    border: 1px solid #9a9a9a;
    padding: 10px;
    border-radius: 100px;
}

.pay-tm {
    position: relative;
    right: -390px;
    bottom: 87px;
}

.ceat { 
    position: relative;
    bottom: 127px;
    right: -200px;
}

.ceat-box {
    width: 104px;
    background: white;
    border: 1px solid #9a9a9a;
    padding: 10px;
    border-radius: 100px;
}
</style>
