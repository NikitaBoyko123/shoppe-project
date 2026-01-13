<script setup lang="ts">
import SearchIcon from "@/assets/icons/find.svg";

defineProps<{
  placeholder?: string;
  autoFocus?: boolean;
}>();

const model = defineModel<string>({ default: "" });
</script>

<template>
  <form class="si" role="search">
    <span class="si-icon">
      <SearchIcon />
    </span>

    <input
      v-model="model"
      class="si-input"
      type="search"
      :placeholder="placeholder || 'Search…'"
      :autofocus="autoFocus"
      autocomplete="off"
      spellcheck="false"
    />
  </form>
</template>

<style scoped lang="scss">
.si {
  position: relative;
  width: 100%;
  font-family: $font-dm-sans;
}

.si-input {
  width: 100%;
  height: 32px;
  padding: 0 32px;
  font-family: $font-dm-sans;
  font-size: 12px;
  color: $gray-600;
  outline: none;
  background: $light-gray;
  border: 1px solid transparent;
  border-radius: 8px;
}

.si:focus-within .si-input {
  border-color: rgb(0 0 0 / 28%);
  box-shadow: 0 0 0 3px rgb(0 0 0 / 6%);
}

.si-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $gray-600;
  pointer-events: none;
  transform: translateY(-50%);

  :deep(svg) {
    display: block;
    width: 16px;
    height: 16px;
  }
}
</style>
