<script setup lang="ts">
import BurgerIcon from "@/assets/icons/burger.svg?component";
import CloseIcon from "@/assets/icons/close.svg?component";

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle"): void;
}>();
</script>

<template>
  <BaseButton
    variant="ghost"
    class="mobile-menu-button"
    aria-label="Toggle menu"
    @click="emit('toggle')"
  >
    <component :is="isOpen ? CloseIcon : BurgerIcon" />
  </BaseButton>
</template>

<style scoped lang="scss">
.mobile-menu-button {
  display: inline-flex;
  width: 24px;
  height: 24px;

  @media (min-width: $breakpoints-m) {
    display: none;
  }

  :deep(svg) {
    width: 100%;
    height: 100%;
  }
}
</style>
