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
  <button
    class="icon icon--burger"
    type="button"
    aria-label="Toggle menu"
    @click="emit('toggle')"
  >
    <component :is="isOpen ? CloseIcon : BurgerIcon" />
  </button>
</template>

<style scoped lang="scss">
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
