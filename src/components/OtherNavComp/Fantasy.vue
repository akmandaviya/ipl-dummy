<template>
    <div class="fantasy-box">
        <router-link to="/" class="link">
            <div class="backIcon">
                <font-awesome-icon class="backTo" icon="circle-left" />
                <p>Back to <br>home</p>
            </div>
        </router-link>
        <img class="fan_ipl" src="https://fantasy.iplt20.com/pages/images/logo.svg" alt="" />
        <div class="btn-grp">
            <button class="login-btn">Login</button>
            <button class="regi-btn">Register</button>
        </div>
        <div class="left-container">
            <div class="left-box">
                <h2>Win a TATA Nexon SUV, official IPL 2023 <br> merchandise and more!</h2>
                <button>Play Season Long</button>
                <div style="background-color: #f7f5f5; height: 80px;">
                    <img src="https://fantasy.iplt20.com/pages/images/prize-season.png" alt="" />
                    <p>TATA Nexon SUV, Autographed Jerseys and more.</p>
                </div>

            </div>
            <div class="left-shadow">
                <h2>Season Long</h2>
                <p>Create team for the whole league!</p>
            </div>
            <font-awesome-icon class="trophy" icon="trophy" />
        </div>
        <div class="right-container">
            <div class="right-box">
                <h2>Join daily contests to win your favourite <br>team's autographed jersey!</h2>
                <button>Play Daily Fantasy</button>
                <div style="background-color: #f7f5f5; height: 80px;">
                    <img src="https://fantasy.iplt20.com/pages/images/prize-daily.png" alt="" />
                    <p>Autographed Jerseys & Tata Neu Coins.</p>
                </div>
            </div>
            <div class="right-shadow">
                <h2>Daily Fantasy</h2>
                <p>Create team for every match!</p>
            </div>
            <font-awesome-icon class="award" icon="award" />
        </div>
    </div>
    <Footer />
</template>
<script>
import Footer from '../HomePage/Footer.vue';
export default {
    components: {
        Footer
    },

    setup() {
    },
}
</script>
<style scoped>
.trophy {
    position: relative;
    height: 60px;
    color: #fffe0c;
    bottom: 475px;
    left: 350px;
    z-index: 2;
}

.award {
    position: relative;
    bottom: 480px;
    left: 360px;
    height: 60px;
    z-index: 2;
    color: #fffe0c;
}

.left-container {
    position: relative;
    top: 90px;
    left: 128px;
    width: fit-content;
}

.right-container {
    position: relative;
    bottom: 370px;
    left: 750px;
    width: fit-content;
}

.left-box {
    position: relative;
    left: 20px;
    top: 29px;
    height: 300px;
    width: 500px;
    background: white;
    border-radius: 20px;
    z-index: 2;
}

.left-box h2 {
    font-size: 22px;
    font-weight: 700;
    position: relative;
    top: 21px;
    left: 28px;
}

.left-box button {
    position: relative;
    left: 18px;
    top: 130px;
    background-color: #19398a;
    color: white;
    width: 460px;
    height: 60px;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
}

.left-box img {
    position: relative;
    left: 40px;
    top: 15px;
    width: 70px;
    height: 40px;
}

.left-box p {
    position: relative;
    left: 130px;
    bottom: 15px;
    font-size: 14px;
}

.right-box {
    position: relative;
    left: 20px;
    top: 29px;
    height: 300px;
    width: 500px;
    background: white;
    border-radius: 20px;
    z-index: 2;
}

.right-box img {
    position: relative;
    left: 40px;
    top: 15px;
    width: 70px;
    height: 40px;
}

.right-box p {
    position: relative;
    left: 130px;
    bottom: 15px;
    font-size: 14px;
}
.right-box h2 {
    font-size: 22px;
    font-weight: 700;
    position: relative;
    top: 21px;
    left: 28px;
}

.right-box button {
    position: relative;
    left: 18px;
    top: 130px;
    background-color: #19398a;
    color: white;
    width: 460px;
    height: 60px;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;

}


.left-shadow {
    position: relative;
    left: 20px;
    top: -350px;
    border-radius: 20px;
    height: 100px;
    width: 420px;
    background: #4161b2;
    border-top-right-radius: 78px;
}

.left-shadow h2 {
    margin-left: 25px;
    color: white;
    font-weight: 800;
}

.left-shadow p {
    margin-left: 25px;
    font-weight: 800;
    font-size: 18px;
    color: white;
}

.right-shadow {
    position: relative;
    left: 20px;
    top: -350px;
    border-radius: 20px;
    height: 100px;
    width: 420px;
    background: #4161b2;
    border-top-right-radius: 78px;
}

.right-shadow h2 {
    margin-left: 25px;
    color: white;
    font-weight: 800;
}

.right-shadow p {
    margin-left: 25px;
    font-weight: 800;
    font-size: 18px;
    color: white;
}

.backTo {
    position: relative;
    left: 20px;
    top: 20px;
    height: 50px;
    color: white;
}

.fantasy-box {
    background: rgb(20 39 94);
    height: 700px;
}

.backIcon {
    position: relative;
    top: 60px;
    display: flex;
    margin-left: 120px;
}

.backIcon p {
    position: relative;
    left: 38px;
    top: 20px;
    font-size: 16px;
    font-style: oblique;
    font-weight: 600;
    color: white;
}
.link { 
    text-decoration: none;
}
.fan_ipl {
    position: relative;
    left: 700px;
    top: -22px;
}

.btn-grp {
    position: relative;
    left: 1120px;
    top: -90px;
    width: fit-content;
}

.login-btn {
    margin-right: 10px;
    width: 122px;
    height: 40px;
    text-transform: uppercase;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    background: #8383f3;
    border: 1px solid #4161b2;
    ;
    color: white;
}

.regi-btn {
    width: 122px;
    height: 40px;
    text-transform: uppercase;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    background: #ffffff;
    border: 1px solid #ffffff;
    color: #8383f3;
}</style>
