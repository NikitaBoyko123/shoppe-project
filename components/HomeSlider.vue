<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { slides } = useSliderImages()

const modules = [Navigation, Pagination, Autoplay]
</script>

<template>
  <div class="home-slider">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :pagination="{ clickable: true }"
      class="home-slider__swiper"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="slide"
        class="home-slider__slide"
      >
        <img
          :src="slide"
          :alt="`Slide ${index + 1}`"
          class="home-slider__image"
        />
        <div class="home-slider__content">
          <h2 class="home-slider__title">Gold big hoops</h2>
          <p class="home-slider__price">$ 68,00</p>
          <BaseButton class="home-slider__button">View Product</BaseButton>
        </div>
        </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.home-slider {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  margin-top: 16px;
  overflow: hidden;

  &__swiper {
    width: 100%;
    max-width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__slide {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
  }

  &__image {
    box-sizing: border-box;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  &__content {
    position: absolute;
    top: 226px;
    left: 39px;
    z-index: 1;
  }

  &__title {
    margin: 0;
    color: $color-white;
    font-family: $font-dm-sans;
    font-size: 33px;
    font-weight: 500;
    line-height: 43px;
    letter-spacing: 0%;
  }

  &__price {
    margin: 0;
    margin-top: 16px;
    color: $color-white;
    font-family: $font-dm-sans;
    font-size: 26px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0%;
  }

  &__button {
    box-sizing: border-box;
    width: 193px;
    height: 62px;
    padding: 16px 8px;
    margin-top: 48px;
    border: 2px solid $color-white;
    border-radius: 6px;
  }
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 40px;
  height: 40px;
  color: $color-white;
  background-color: rgba($color-black, 0.5);
  border-radius: 50%;

  &::after {
    font-size: 16px;
    font-weight: 700;
  }

  &:hover {
    background-color: rgba($color-black, 0.7);
  }
}

:deep(.swiper-pagination-bullet) {
  background-color: $color-white;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: $color-white;
  opacity: 1;
}

:deep(.swiper-wrapper) {
  box-sizing: border-box;
  max-width: 100%;
}

:deep(.swiper-container) {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

:deep(.swiper-slide) {
  box-sizing: border-box;
  width: 100% !important;
  max-width: 100% !important;
}
</style>
