<template>
    <div class="collapse" id="collapseExample">
        <input class="searchBar" type="text" placeholder="Search here" />
        <button class="src-btn" @click="searchAll()">Search</button>
        <font-awesome-icon icon="fa-magnifying-glass" class="search-icon" />

    </div>
</template>
<script>

export default {
    setup() {
        function searchAll() {
            console.log("seaching");
        }
        return {
            searchAll
        }
    },
}
</script>

<style scoped>
.searchBar {
    position: relative;
    top: -34px;
    width: 800px;
    height: 38px;
    border-radius: 50px;
    margin-left: 20px;
    text-indent: 20px;
}

.searchBar::placeholder {
    padding-left: 20px;
}

.src-btn {
    width: 129px;
    height: 36px;
    position: relative;
    top: -34px;
    right: 130px;
    border-radius: 50px;
    background: #ef4123;
    border: #ef4123;
    color: white;
}

.search-icon {
    color: white;
    position: relative;
    top: -34px;
    right: 244px;
}
</style>