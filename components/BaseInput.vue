<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: "text" | "email" | "password" | "search" | "tel" | "url" | "number";
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    autocomplete?: string;
    name?: string;
    id?: string;
    readonly?: boolean;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    pattern?: string;
    maxlength?: number;
    minlength?: number;
    error?: string;
  }>(),
  {
    type: "text",
    required: false,
    disabled: false,
    readonly: false,
    error: "",
  }
);

const model = defineModel<string | number>({ default: "" });
</script>

<template>
  <div class="base-input-wrapper">
    <input
      :id="id"
      v-model="model"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :min="min"
      :max="max"
      :step="step"
      :pattern="pattern"
      :maxlength="maxlength"
      :minlength="minlength"
      :class="['base-input', { 'base-input--error': error }]"
    />
    <p v-if="error" class="base-input__error">{{ error }}</p>
  </div>
</template>

<style scoped lang="scss">
.base-input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.base-input {
  box-sizing: border-box;
  width: 100%;
  padding: 8px 12px;
  font-family: $font-dm-sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: $color-black;
  outline: none;
  background-color: $color-white;
  border: 1px solid $gray-300;
  border-radius: 8px;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &::placeholder {
    color: $gray-500;
  }

  &:focus {
    border-color: $gray-600;
    box-shadow: 0 0 0 3px rgb(0 0 0 / 6%);
  }

  &--error {
    border-color: $color-red;
  }

  &--error:focus {
    border-color: $color-red;
    box-shadow: 0 0 0 3px rgb(217 38 0 / 15%);
  }

  &:disabled {
    color: $gray-500;
    cursor: not-allowed;
    background-color: $gray-200;
    border-color: $gray-300;
    opacity: 0.6;
  }

  &[readonly] {
    cursor: default;
    background-color: $gray-100;
  }

  @media (min-width: $breakpoints-m) {
    padding: 10px 14px;
    font-size: 16px;
  }
}

.base-input__error {
  margin: 4px 0 0;
  font-family: $font-dm-sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: $color-red;
}
</style>
