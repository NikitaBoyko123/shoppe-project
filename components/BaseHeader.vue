<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "nuxt/app";
import ShoppeIcon from "@/assets/icons/shoppe.svg?component";

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);

if (import.meta.client) {
  const route = useRoute();
  watch(
    () => route.fullPath,
    () => {
      isMenuOpen.value = false;
    }
  );
}

const linksDesktop = [
  { label: "Shop", to: "/shop" },
  { label: "Blog", to: "/blog" },
  { label: "Our Story", to: "/about" },
];

const linksMobile = [
  { label: "Contact", to: "/" },
  { label: "Terms Of Services", to: "/" },
  { label: "Shipping And Returns", to: "/" },
];

const links = linksDesktop.concat(linksMobile);
</script>

<template>
  <header class="header container">
    <div class="header__content">
      <NuxtLink to="/" class="logo">
        <ShoppeIcon class="logo__icon" />
      </NuxtLink>

      <div class="header__right">
        <DesktopMenu :links="linksDesktop" />

        <div class="header__actions">
          <MobileMenuButtons :is-open="isMenuOpen" @toggle="toggleMenu" />
        </div>
      </div>
    </div>
  </header>

  <BaseDrawer v-model="isMenuOpen">
    <MobileMenu :links="links" @close="isMenuOpen = false" />
  </BaseDrawer>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  margin-top: 15px;
  background-color: $color-white;

  @media (min-width: $breakpoints-m) {
    margin-top: 64px;
  }

  &__content {
    display: flex;
    gap: 4px;
    width: 100%;
    align-items: center;
    min-height: 42px;
    overflow: visible;

    @media (min-width: $breakpoints-m) {
      gap: 48px;
      height: 42px;
    }

    @media (min-width: $breakpoints-xxl) {
      gap: 64px;
      height: 48px;
    }
  }

  &__right {
    display: flex;
    flex-shrink: 1;
    gap: 4px;
    align-items: center;
    min-width: 0;
    margin-left: auto;

    @media (min-width: $breakpoints-m) {
      gap: 48px;
    }

    @media (min-width: $breakpoints-xxl) {
      gap: 64px;
    }
  }

  &__actions {
    display: flex;
    flex-shrink: 0;
    gap: 6px;
    align-items: center;

    @media (min-width: $breakpoints-m) {
      display: none;
    }
  }
}

.logo {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  overflow: visible;
  line-height: 1;
  text-decoration: none;

  &__icon {
    display: block;
    flex-shrink: 0;
    width: 80px;
    height: 20px;
    overflow: visible;

    svg {
      display: block;
      width: 80px;
      max-width: 100%;
      height: 20px;
      max-height: 100%;
    }

    @media (min-width: $breakpoints-m) {
      width: 129px;
      height: 27px;

      svg {
        width: 129px;
        height: 27px;
      }
    }

    @media (min-width: $breakpoints-xxl) {
      width: 160px;
      height: 34px;

      svg {
        width: 160px;
        height: 34px;
      }
    }
  }
}
</style>
