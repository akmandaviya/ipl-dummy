<template>
    <div>
        <div class="look-text">
            <h1>What Are You Looking For?</h1>
        </div>
        <div class="look-container">
            <router-link to="/pointstable" class="result-fix-box">
                <p>Fixtures & Results</p>
                <font-awesome-icon icon="calendar" class="res-icon"/>
            </router-link>
            <router-link to="/pointstable" class="point-table-box">
                <p>Points Table</p>
                <font-awesome-icon icon="chart-simple" class="points-icon"/>
            </router-link>
           <router-link to="/stats" class="stats-box">
                <p>Overall Stats</p>
                <font-awesome-icon icon="chart-line" class="stats-icon" />
            </router-link>
            <router-link  to="/teams" class="all-items-box">
                <p>All teams</p>
                <font-awesome-icon icon="users" class="all-item-icon" />
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    setup() {

    },
}
</script>

<style scoped>
.res-icon {
    width: 40px;
    height: 20px;
    position: relative;
    bottom: 41px;
    left: 10px;
}

.points-icon {
    width: 40px;
    height: 20px;
    position: relative;
    bottom: 41px;
    left: 33px;
}

.stats-icon {
    width: 40px;
    height: 20px;
    position: relative;
    bottom: 41px;
    left: 30px;
}


.all-item-icon {
    width: 40px;
    height: 20px;
    position: relative;
    bottom: 41px;
    left: 39px;
} 
.look-text {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
    width: 100% !important;
    text-align: center;
}

.look-text h1 {
    font-style: italic;
    font-weight: 600;
    font-size: 30px;
    color: #1d1d1d;
    font-family: 'Hind', sans-serif;
}

.look-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}

.look-container p {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
    margin-top: 11px;
    margin-left: 7px;
}

.result-fix-box {
    width: 260px;
    height: 60px;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s;
}

.result-fix-box:hover {
    border: 1px solid #ef4123;
    box-shadow: 8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);
    background: #ef4123;
    color: white;
    transform: scale(1.1);
}

.point-table-box {
    width: 260px;
    height: 60px;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s;
}

.point-table-box:hover {
    border: 1px solid #ef4123;
    box-shadow: 8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);
    background: #ef4123;
    color: white;
    transform: scale(1.1);
}

.stats-box {
    width: 260px;
    height: 60px;
    border: 1px solid black;
    cursor: pointer;
    color: black;
    text-decoration: none;
    transition: 0.5s;
}

.stats-box:hover {
    border: 1px solid #ef4123;
    box-shadow: 8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);
    background: #ef4123;
    color: white;
    transform: scale(1.1);
}

.all-items-box {
    width: 260px;
    height: 60px;
    border: 1px solid black;
    color: black;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;
}

.all-items-box:hover {
    border: 1px solid #ef4123;
    box-shadow: 8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);
    background: #ef4123;
    color: white;
    transform: scale(1.1);
}
</style>