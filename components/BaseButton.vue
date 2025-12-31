<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "ghost";
  }>(),
  {
    variant: "ghost",
  }
);
</script>

<template>
  <button :class="['base-button', `base-button--${variant}`]" type="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
  transition:
    color 0.2s,
    background-color 0.2s;

  :deep(svg) {
    display: block;
  }

  :deep(svg path[fill="white"]),
  :deep(svg path[fill="#ffffff"]),
  :deep(svg path[fill="#FFFFFF"]) {
    display: none;
  }

  :deep(svg path[stroke="white"]) {
    stroke: transparent;
  }

  :deep(svg path),
  :deep(svg circle),
  :deep(svg rect),
  :deep(svg polygon) {
    fill: currentcolor;
  }

  &--primary {
    color: $color-white;
    background-color: $color-black;

    &:hover {
      background-color: $gray-800;
    }

    &:active {
      background-color: $gray-700;
    }
  }

  &--secondary {
    color: $color-black;
    background-color: $color-white;

    &:hover {
      background-color: $gray-100;
    }

    &:active {
      background-color: $gray-200;
    }
  }

  &--ghost {
    color: $color-black;
    background-color: transparent;

    &:hover {
      background-color: $gray-100;
    }

    &:active {
      background-color: $gray-200;
    }
  }
}
</style>
