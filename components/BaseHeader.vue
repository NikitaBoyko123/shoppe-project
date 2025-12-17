<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "nuxt/app";

import ShoppeIcon from "@/assets/icons/shoppe.svg?component";
import FindIcon from "@/assets/icons/find.svg?component";
import CartIcon from "@/assets/icons/cart.svg?component";
import UserIcon from "@/assets/icons/user.svg?component";
import BurgerIcon from "@/assets/icons/burger.svg?component";
import CloseIcon from "@/assets/icons/close.svg?component";

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
  <header class="header">
    <div class="header__content">
      <NuxtLink to="/" class="logo">
        <ShoppeIcon class="logo__icon" />
      </NuxtLink>

      <div class="header__right">
        <nav class="nav">
          <ul class="nav-list">
            <li v-for="link in linksDesktop" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="header__actions">
          <span class="separator"></span>

          <div class="actions">
            <button class="icon icon--search" type="button" aria-label="search">
              <FindIcon />
            </button>
            <button class="icon icon--cart" type="button" aria-label="cart">
              <CartIcon />
            </button>
            <button
              class="icon icon--account"
              type="button"
              aria-label="account"
            >
              <UserIcon />
            </button>
            <button
              class="icon icon--burger burger-btn"
              type="button"
              aria-label="Toggle menu"
              @click="toggleMenu"
            >
              <component :is="isMenuOpen ? CloseIcon : BurgerIcon" />
            </button>
          </div>
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
    gap: 6px;
    align-items: center;
    min-width: 0;
    max-width: 1248px;
    min-height: 42px;
    padding: 0 8px;
    margin: 0 auto;

    @media (min-width: $breakpoints-m) {
      gap: 48px;
      height: 42px;
      padding-right: 96px;
      padding-left: 96px;
    }
  }

  &__right {
    display: flex;
    gap: 6px;
    align-items: center;
    margin-left: auto;

    @media (min-width: $breakpoints-m) {
      gap: 48px;
    }
  }

  &__actions {
    display: flex;
    gap: 8px;
    align-items: center;

    @media (min-width: $breakpoints-m) {
      gap: 24px;
    }
  }
}

.logo {
  display: inline-flex;
  align-items: center;
  line-height: 1;
  text-decoration: none;

  &__icon {
    display: block;
    width: 92px;
    height: 22px;
    object-fit: contain;

    @media (min-width: $breakpoints-m) {
      width: 129px;
      height: 27px;
    }
  }
}

.nav {
  display: none;

  @media (min-width: $breakpoints-m) {
    display: block;
  }
}

.nav-list {
  display: flex;
  gap: 64px;
  align-items: center;
  padding: 0;
  margin: 0;
  font-family: $font-dm-sans;
  font-size: 16px;
  font-weight: 400;
  list-style: none;

  a {
    color: $color-black;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    &.router-link-active {
      font-weight: 500;
    }
  }
}

.separator {
  display: none;

  @media (min-width: $breakpoints-m) {
    display: block;
    flex: 0 0 1px;
    align-self: center;
    height: 17px;
    background-color: $gray-600;
  }
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  color: $color-black;
  cursor: pointer;
  background: none;
  border: none;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.actions {
  display: flex;
  gap: 16px;
  align-items: center;

  .icon {
    display: none;
  }

  .icon--cart,
  .icon--burger {
    display: inline-flex;
  }

  @media (min-width: $breakpoints-m) {
    gap: 39px;

    .icon {
      display: inline-flex;
    }

    .icon--burger {
      display: none;
    }
  }
}
</style>
