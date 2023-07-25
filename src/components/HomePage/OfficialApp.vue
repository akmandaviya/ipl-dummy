<template>
    <div class="container">
        <div>
            <h1>
                GET THE OFFICIAL IPL APP
            </h1>
        </div>
        <div class="app-text">
            <p>
                Get the latest scores on the go. Find the latest content, including <br>
                match highlights, press conferences and recap all at your fingertips by <br>
                downloading the official IPL app.
            </p>

            <p>
                Available on both App store and Playstore.
            </p>
            <p>
                Download here for free.
            </p>
        </div>
        <div class="apps">
            <img style="margin-right: 20px; border: 1px solid white; border-radius: 6px;" :src=playStore alt="play store" />
            <img style="border: 1px solid white; border-radius: 6px;" :src=appStore alt="app store" />
        </div>
        <div class="hand-img">
            <img :src=hand alt="hand" />
        </div>
    </div>
</template>
<script>
import playStore from '../../assets/play-store.png'
import appStore from '../../assets/app-store.png'
import hand from '../../assets/hand.png'
export default {
    setup() {
        return {
            playStore,
            appStore,
            hand
        }
    },
}
</script>

<style scoped>
.container h1 {
    position: relative;
    left: 140px;
    top: 27px;
    width: fit-content;
}

.app-text {
    position: relative;
    left: 140px;
    top: 50px;
}

.app-text p {
    width: fit-content;
}
.apps {
    position: relative;
    top: 70px;
    left: 140px;
    width: fit-content;
}

.container {
    border-radius: 20px;
    height: 480px;
    margin-top: 10px;
}

.hand-img {
    position: relative;
    bottom: 331px;
    left: 770px;
    width: fit-content;
}
</style>