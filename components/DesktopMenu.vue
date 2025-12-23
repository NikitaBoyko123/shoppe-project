<script setup lang="ts">
import FindIcon from "@/assets/icons/find.svg?component";
import CartIcon from "@/assets/icons/cart.svg?component";
import UserIcon from "@/assets/icons/user.svg?component";

defineProps<{
  links: { label: string; to: string }[];
}>();
</script>

<template>
  <div class="desktop-menu">
    <nav class="desktop-menu__nav">
      <ul class="desktop-menu__list">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="desktop-menu__actions">
      <span class="desktop-menu__separator"></span>

      <div class="desktop-menu__icons">
        <button class="icon icon--search" type="button" aria-label="search">
          <FindIcon />
        </button>
        <button class="icon icon--cart" type="button" aria-label="cart">
          <CartIcon />
        </button>
        <button class="icon icon--account" type="button" aria-label="account">
          <UserIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.desktop-menu {
  display: none;

  @media (min-width: $breakpoints-m) {
    display: flex;
    flex-shrink: 1;
    gap: 48px;
    align-items: center;
    min-width: 0;
  }

  &__nav {
    display: block;
  }

  &__list {
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

  &__actions {
    display: flex;
    flex-shrink: 0;
    gap: 24px;
    align-items: center;
  }

  &__separator {
    flex: 0 0 1px;
    align-self: center;
    height: 17px;
    background-color: $gray-600;
  }

  &__icons {
    display: flex;
    flex-shrink: 0;
    gap: 39px;
    align-items: center;
  }
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
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
</style>
