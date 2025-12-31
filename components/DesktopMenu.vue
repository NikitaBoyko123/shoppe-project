<script setup lang="ts">
import FindIcon from "@/assets/icons/find.svg?component";
import CartIcon from "@/assets/icons/cart.svg?component";
import UserIcon from "@/assets/icons/user.svg?component";

defineProps<{
  links: { label: string; to: string }[];
}>();

const icons = [
  { component: FindIcon, class: "icon--search", ariaLabel: "search" },
  { component: CartIcon, class: "icon--cart", ariaLabel: "cart" },
  { component: UserIcon, class: "icon--account", ariaLabel: "account" },
];
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
        <BaseButton
          v-for="icon in icons"
          :key="icon.ariaLabel"
          variant="ghost"
          :class="['icon', icon.class]"
          :aria-label="icon.ariaLabel"
        >
          <component :is="icon.component" />
        </BaseButton>
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
  width: 24px;
  height: 24px;

  :deep(svg) {
    width: 100%;
    height: 100%;
  }

  &.icon--search,
  &.icon--account {
    :deep(svg path:nth-child(2)) {
      display: none;
    }
  }

  &.icon--cart {
    transform: scale(1.05);
  }
}
</style>
