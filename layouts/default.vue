<template>
  <div class="container">
    <header></header>

    <main>
      <slot />
    </main>

    <footer></footer>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
}
</style>
