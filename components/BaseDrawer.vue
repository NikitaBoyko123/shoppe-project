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
  <transition name="drawer">
    <div v-if="model" v-bind="$attrs" class="drawer-content">
      <div class="drawer__overlay" @click="model = false"></div>
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
}

.drawer__overlay {
  position: absolute;
  inset: 0;
  background: rgb(0 0 0 / 50%);
}

.drawer__panel {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  height: 100dvh;
  overflow: hidden;
  background: $color-white;
  box-shadow: -8px 0 24px rgb(0 0 0 / 10%);

  @media (width < $breakpoints-s) {
    max-width: 100%;
    box-shadow: none;
  }
}

.drawer__scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-active .drawer__panel,
.drawer-leave-active .drawer__panel {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-active .drawer__overlay,
.drawer-leave-active .drawer__overlay {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from .drawer__panel,
.drawer-leave-to .drawer__panel {
  transform: translateX(100%);
}

.drawer-enter-to .drawer__panel,
.drawer-leave-from .drawer__panel {
  transform: translateX(0);
}

.drawer-enter-from .drawer__overlay,
.drawer-leave-to .drawer__overlay {
  opacity: 0;
}

.drawer-enter-to .drawer__overlay,
.drawer-leave-from .drawer__overlay {
  opacity: 1;
}
</style>
