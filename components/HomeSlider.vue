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
        :key="index"
        class="home-slider__slide"
      >
        <img
          :src="slide"
          :alt="`Slide ${index + 1}`"
          class="home-slider__image"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.home-slider {
  width: 100%;
  max-width: 100%;
  position: relative;
  margin-top: 16px;
  box-sizing: border-box;
  overflow: hidden;

  &__swiper {
    width: 100%;
    max-width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__slide {
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  &__image {
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 16px;
    box-sizing: border-box;
  }
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: $color-white;
  background-color: rgba($color-black, 0.5);
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:after {
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
  opacity: 1;
  background-color: $color-white;
}

:deep(.swiper-wrapper) {
  max-width: 100%;
  box-sizing: border-box;
}

:deep(.swiper-container) {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

:deep(.swiper-slide) {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box;
}
</style>
