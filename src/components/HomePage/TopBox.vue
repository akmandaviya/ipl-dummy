<template>
    <div class="top-box">
      <img class="bcci-icon" :src=bcci alt="bcci" /> <span>BCCI.TV</span>
      <img class="wpl-icon" src="https://www.wplt20.com/static-assets/images/svg/womens-premier-league-logo.svg?v=30.16"
        alt="wpl" />
      <span style="position: relative;left: 990px;font-weight: 800;font-size: medium;">Follow us</span>
      <div class="social-box">
        <a href="https://twitter.com/IPL" onclick="window.open('https://twitter.com/IPL', '_blank'); return false;">
          <img class="twt" :src=twt alt="twitter" />
        </a>
        <a href="https://www.instagram.com/iplt20/"
          onclick="window.open('https://www.instagram.com/iplt20/', '_blank'); return false;">
          <img class="insta" :src=insta alt="insta" />
        </a>
        <a href="https://www.facebook.com/IPL/"
          onclick="window.open('https://www.facebook.com/IPL/', '_blank'); return false;">
          <img class="fb" :src=fb alt="fb" />
        </a>
      </div>

    </div>
    
</template>
<script>
import bcci from '../../assets/bcci.png'
import twt from '../../assets/twt.svg'
import insta from '../../assets/insta.svg'
import fb from '../../assets/fb.svg'
export default{
    
    setup() {
        return {
            bcci: bcci,
            twt: twt,
            insta: insta,
            fb: fb,
        }
    },
}
</script>
<style scoped>
.top-box {
  width: 1519;
  height: 41px;
  background: #061e59;
}

.top-box span {
  color: white;
  position: relative;
  left: 100px;
  top: 3px;
  font-size: small;
}

.social-box {
  position: relative;
  left: 1325px;
  top: -29px;
  width: fit-content;
}

.insta {
  margin-left: 10px;
}

.fb {
  margin-left: 10px;
}

.bcci-icon {
  position: relative;
  left: 100px;
  top: 2px;
  width: 22px;
  height: 22px;
}

.wpl-icon {
  width: 45px;
  height: 35px;
  margin-left: 130px;
}

</style>
