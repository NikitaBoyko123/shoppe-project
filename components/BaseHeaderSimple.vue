<template>
  <header class="header">
    <div class="header__content">
      <NuxtLink to="/" class="logo">SHOPPE</NuxtLink>
      <nav class="nav">
        <ul class="nav-list">
          <li><NuxtLink to="/shop">Shop</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/about">Our Story</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 10px 0;
  background-color: $color-white;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1248px;
    padding: 0 16px;
    margin: 0 auto;
  }
}

.logo {
  font-family: $font-allerta-stencil;
  font-size: 24px;
  font-weight: 700;
  color: $color-black;
  text-decoration: none;

  &::first-letter {
    color: $color-gold;
  }
}

.nav-list {
  display: flex;
  gap: 32px;
  padding: 0;
  margin: 0;
  list-style: none;

  a {
    font-family: $font-dm-sans;
    color: $color-black;
    text-decoration: none;
  }
}
</style>
