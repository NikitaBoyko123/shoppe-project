<script setup lang="ts">
import SearchInput from "@/components/SearchInput.vue";
import ShoppeIcon from "@/assets/icons/shoppe.svg?component";
import CartIcon from "@/assets/icons/cart.svg?component";
import CloseIcon from "@/assets/icons/close.svg?component";
import UserIcon from "@/assets/icons/user.svg?component";
import LogoutIcon from "@/assets/icons/logout.svg?component";

defineProps<{
  links: { label: string; to: string }[];
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const handleClose = () => emit("close");
</script>

<template>
  <header class="mobile-menu">
    <div class="mobile-menu__top">
      <NuxtLink to="/" class="mobile-menu__logo" @click="handleClose">
        <ShoppeIcon class="mobile-menu__logo-icon" />
      </NuxtLink>

      <div class="mobile-menu__top-actions">
        <BaseButton variant="ghost" class="icon" aria-label="cart">
          <CartIcon />
        </BaseButton>
        <BaseButton
          variant="ghost"
          class="icon"
          aria-label="close menu"
          @click="handleClose"
        >
          <CloseIcon />
        </BaseButton>
      </div>
    </div>

    <SearchInput class="mobile-menu__search" placeholder="Search" />

    <nav class="mobile-menu__nav">
      <ul class="mobile-menu__list">
        <li v-for="link in links" :key="link.to" class="mobile-menu__item">
          <NuxtLink
            :to="link.to"
            class="mobile-menu__link"
            @click="handleClose"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <hr class="mobile-menu__divider" />

    <div class="mobile-menu__actions">
      <NuxtLink to="/" class="mobile-menu__action" @click="handleClose">
        <UserIcon />
        <span>My account</span>
      </NuxtLink>
      <NuxtLink to="/" class="mobile-menu__action" @click="handleClose">
        <LogoutIcon />
        <span>Logout</span>
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped lang="scss">
.mobile-menu {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  min-height: 100%;
  padding: 16px 12px;
  overflow: hidden;
  background: $color-white;
  border-radius: 10px;

  @media (width < $breakpoints-s) {
    padding: 12px;
    border-radius: 0;
  }

  &__top {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-width: 0;
    height: 36px;
    padding: 0;
    margin-top: 4px;
    overflow: visible;

    @media (width < $breakpoints-s) {
      gap: 4px;
    }
  }

  &__logo {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    overflow: visible;
  }

  &__logo-icon {
    display: block;
    flex-shrink: 0;
    width: 90px;
    height: 24px;
    overflow: visible;

    svg {
      display: block;
      width: 90px;
      max-width: 100%;
      height: 24px;
      max-height: 100%;
    }

    @media (width < $breakpoints-s) {
      width: 80px;
      height: 20px;

      svg {
        width: 80px;
        height: 20px;
      }
    }
  }

  &__top-actions {
    display: flex;
    flex-shrink: 0;
    gap: 12px;
    align-items: center;
    margin-left: auto;

    @media (width < $breakpoints-s) {
      gap: 15px;
      margin-left: auto;
    }
  }

  &__search {
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    margin-top: 8px;

    @media (min-width: $breakpoints-m) {
      width: calc(100% + 24px);
      margin-right: -12px;
      margin-left: -12px;
    }
  }

  &__nav {
    width: 100%;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__link {
    display: block;
    font-family: $font-dm-sans;
    font-size: 18px;
    color: $color-black;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }

  &__divider {
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-top: 1px solid $gray-250;

    @media (min-width: $breakpoints-m) {
      width: calc(100% + 24px);
      margin-right: -12px;
      margin-left: -12px;
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__action {
    display: inline-flex;
    gap: 12px;
    align-items: center;
    font-family: $font-dm-sans;
    font-size: 16px;
    color: $color-black;
    text-decoration: none;

    svg {
      width: 24px;
      height: 24px;
    }
  }
}

.icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;

  :deep(svg) {
    width: 100%;
    height: 100%;
  }
}
</style>
