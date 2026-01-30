<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const { slides } = useSliderImages()

const modules = [Pagination, Autoplay]
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
          <BaseButton class="home-slider__button">
            <text>V<span class="home-slider__button-span">iew </span> P<span class="home-slider__button-span">roduct</span></text>
          </BaseButton>
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
  margin-bottom: 24px;
  overflow: hidden;

  @media (width < $breakpoints-m) {
    margin-top: 12px;
    margin-bottom: 20px;
  }

  @media (width < $breakpoints-s) {
    margin-top: 8px;
    margin-bottom: 16px;
  }

  &__swiper {
    box-sizing: border-box;
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
    overflow: hidden;

    @media (width <= 474px) {
      overflow: visible;
    }
  }

  &__image {
    box-sizing: border-box;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 646px;
    object-fit: cover;
    border-radius: 16px;

    @media (width < $breakpoints-m) {
      height: 400px;
      max-height: 400px;
      border-radius: 12px;
    }

    @media (width < $breakpoints-s) {
      height: 354px;
      max-height: 354px;
      border-radius: 8px;
    }
  }

  &__content {
    position: absolute;
    top: 226px;
    left: 39px;
    z-index: 1;

    @media (width <= 474px) {
      top: 235px !important;
      left: 8px !important;
      overflow: visible;
    }

    @media (width >= 475px) and (width <= 767px) {
      top: 120px;
      left: 20px;
    }
  }


  &__title {
    margin: 0;
    font-family: $font-dm-sans;
    font-size: 33px;
    font-weight: 500;
    line-height: 43px;
    color: $color-white;
    text-transform: capitalize;
    letter-spacing: 0%;

    @media (width < $breakpoints-m) {
      font-size: 24px;
      line-height: 32px;
    }

    @media (width <= 474px) {
      font-size: 20px;
      font-weight: 500;
      line-height: 26px;
      text-transform: capitalize;
    }
  }

  &__price {
    margin: 0;
    margin-top: 16px;
    font-family: $font-dm-sans;
    font-size: 26px;
    font-weight: 400;
    line-height: 35px;
    color: $color-white;
    letter-spacing: 0%;

    @media (width < $breakpoints-m) {
      margin-top: 12px;
      font-size: 20px;
      line-height: 28px;
    }

    @media (width <= 474px) {
      margin-top: 3px;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
  }

  &__button {
    box-sizing: border-box;
    width: 193px;
    height: 62px;
    padding: 16px 8px;
    margin-top: 48px;
    font-family: $font-dm-sans;
    font-size: 20px;
    font-weight: 700;
    line-height: 100%;
    color: $color-white;
    text-transform: uppercase;
    letter-spacing: 0%;
    background-color: transparent !important;
    border: 2px solid $color-white;
    border-radius: 6px;

    @media (width < $breakpoints-m) {
      width: 160px;
      height: 50px;
      padding: 12px 8px;
      margin-top: 32px;
      font-size: 16px;
    }

    @media (width <= 474px) {
      position: absolute;
      top: 61px;
      left: 0;
      z-index: 10;
      width: 92px;
      height: 32px;
      padding: 0;
      margin-top: 0;
      margin-left: 0;
      font-family: $font-dm-sans;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      border: 1px solid $color-white;
      border-radius: 4px;
    }

    &:hover {
      background-color: transparent !important;
    }

    &:active {
      background-color: transparent !important;
    }
  }

  &__button-span {
    text-transform: lowercase;
  }
}

:deep(.swiper-pagination) {
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.swiper-pagination-bullet) {
  margin-right: 13.71px;
  margin-bottom: 0;
  vertical-align: middle;

  &:last-child {
    margin-right: 0;
  }

  @media (width <= 474px) {
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }
}

:deep(.swiper-pagination-bullet:not(.swiper-pagination-bullet-active)) {
  width: 9.14px;
  height: 9.14px;
  background-color: $color-white;
  border: 1px solid transparent;
  opacity: 1;
  transform: translateY(1.145px);

  @media (width < $breakpoints-m) {
    width: 7px;
    height: 7px;
  }

  @media (width <= 474px) {
    width: 4px;
    height: 4px;
    transform: none;
  }
}

:deep(.swiper-pagination-bullet-active) {
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: 1px solid $color-white;
  border-radius: 50%;
  opacity: 1;

  @media (width < $breakpoints-m) {
    width: 12px;
    height: 12px;
  }

  @media (width <= 474px) {
    width: 7px;
    height: 7px;
    border: 0.75px solid $color-white;
  }
}


:deep(.swiper-wrapper) {
  box-sizing: border-box;
  width: 100%;
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
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}
</style>
