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
        <button class="icon" type="button" aria-label="cart">
          <CartIcon />
        </button>
        <button
          class="icon"
          type="button"
          aria-label="close menu"
          @click="handleClose"
        >
          <CloseIcon />
        </button>
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
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 320px;
  min-height: 100%;
  padding: 16px 12px;
  overflow: visible;
  background: $color-white;
  border-radius: 10px;

  @media (width < 475px) {
    width: 100%;
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

    @media (width < 475px) {
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

    @media (width < 475px) {
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

    @media (width < 475px) {
      gap: 15px;
      margin-right: 20px;
      margin-left: auto;
    }
  }

  &__search {
    width: 95%;
    height: 32px;
    margin-top: 8px;
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
    width: 100%;
    border: none;
    border-top: 1px solid $gray-250;
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
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  color: $color-black;
  background: none;
  border: none;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
