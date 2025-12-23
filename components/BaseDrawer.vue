<script setup lang="ts">
import { onUnmounted, watch, watchEffect } from "vue";
import { useBreakpointsTyped } from "@/plugins/breakpoints";

const model = defineModel<boolean>();

watch(
  () => model.value,
  (isOpen) => {
    if (import.meta.client) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }
);
const $breakpoints = useBreakpointsTyped();

watchEffect(() => {
  if ($breakpoints.m.value) {
    model.value = false;
  }
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <transition name="drawer-slide">
    <div v-show="model" v-bind="$attrs" class="drawer-content">
      <div class="drawer__panel">
        <div class="drawer__scroll">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.drawer-content {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  justify-content: flex-end;
  background: transparent;
}

.drawer__panel {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  height: 100dvh;
  background: $color-white;
  box-shadow: -8px 0 24px rgb(0 0 0 / 10%);

  @media (width < 475px) {
    max-width: 100%;
    box-shadow: none;
  }
}

.drawer__scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.drawer-slide-enter-from .drawer__panel,
.drawer-slide-leave-to .drawer__panel {
  transform: translateX(100%);
}

.drawer-slide-enter-to .drawer__panel,
.drawer-slide-leave-from .drawer__panel {
  transform: translateX(0);
}
</style>
