<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(slide, index) in imageSlides" class="carousel-item" :class="{ active: index === 0 }" :key="index">
        <img :src="slide.image" class="d-block w-100 opacity-image" :alt="slide.alt">
        <div class="carousel-caption d-none d-md-block">
          <h1>{{ slide.content.slice(0,60) }}...</h1>
        </div>
        <p>read more..</p>
      </div>
    </div>
    <button style="height: fit-content; margin-top: 120px;" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button style="height: fit-content; margin-top: 120px;" class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { ref } from "vue"
import { slides } from "../../dummyData/mainSlides"
export default {
  setup() {
    const imageSlides = ref(slides)
    return {
      imageSlides
    }
  },
}
</script>

<style scoped>
.carousel-inner {
  width: 100%;
  height: 600px;
}

.carousel-indicators {
  position: absolute;
  right: 900px;
  top: 13px
}

.carousel-item h1 {
  margin-bottom: 600px;
  margin-right: 552px;
  opacity: 0.8;
  width: fit-content;
  text-align: center;
  color: white;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid black;
  background: black;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
}

.opacity-image {
  opacity: 0.9;
  position: relative;
  bottom: 80px;
}
</style>
