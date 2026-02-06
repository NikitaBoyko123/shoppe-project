<script setup lang="ts">
import { ref } from "vue";
import FacebookIcon from "@/assets/icons/facebook.svg?component";
import InstagramIcon from "@/assets/icons/instagram.svg?component";
import TwitterIcon from "@/assets/icons/twitter.svg?component";
import FacebookIconMobile from "@/assets/icons/facebook_mobile.svg?component";
import InstagramIconMobile from "@/assets/icons/instagram_mobile.svg?component";
import TwitterIconMobile from "@/assets/icons/twitter_mobile.svg?component";
import EnterIcon from "@/assets/icons/enter.svg?component";
import EnterIconMobile from "@/assets/icons/enter_mobile.svg?component";

const footerLinks = [
  { label: "CONTACT", to: "/" },
  { label: "TERMS OF SERVICES", to: "/" },
  { label: "SHIPPING AND RETURNS", to: "/" },
];

const socialIcons = [
  { component: FacebookIcon, ariaLabel: "Facebook", iconClass: "footer__social-icon--facebook" },
  { component: InstagramIcon, ariaLabel: "Instagram", iconClass: "footer__social-icon--instagram" },
  { component: TwitterIcon, ariaLabel: "Twitter", iconClass: "footer__social-icon--twitter" },
];

const socialIconsMobile = [
  { component: FacebookIconMobile, ariaLabel: "Facebook", iconClass: "footer__social-icon--facebook" },
  { component: InstagramIconMobile, ariaLabel: "Instagram", iconClass: "footer__social-icon--instagram" },
  { component: TwitterIconMobile, ariaLabel: "Twitter", iconClass: "footer__social-icon--twitter" },
];

const email = ref("");
const error = ref("");
const isSuccess = ref(false);
const agreeToTerms = ref(false);

const STORAGE_KEY = "newsletter_emails";

const saveEmailToLocalStorage = (emailValue: string) => {
  try {
    const existingEmails = localStorage.getItem(STORAGE_KEY);
    const emails = existingEmails ? JSON.parse(existingEmails) : [];

    if (!emails.includes(emailValue)) {
      emails.push(emailValue);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(emails));
    }
  } catch (err) {
    console.error("Error saving email to localStorage:", err);
    throw err;
  }
};

const validateEmail = (emailValue: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailValue.trim());
};

const handleSubmit = () => {
  error.value = "";
  isSuccess.value = false;

  if (!email.value || !email.value.trim()) {
    error.value = "Please enter a valid email address";
    return;
  }

  if (!validateEmail(email.value)) {
    error.value = "Please enter a valid email address";
    return;
  }

  try {
    saveEmailToLocalStorage(email.value.trim());
    email.value = "";
    isSuccess.value = true;

    setTimeout(() => {
      isSuccess.value = false;
    }, 3000);
  } catch {
    error.value = "Failed to save email. Please try again.";
  }
};
</script>

<template>
  <footer class="footer container">
    <div class="footer__divider"></div>
    <div class="footer__content">
      <div class="footer__left">
        <nav class="footer__nav">
          <ul class="footer__nav-list">
            <li v-for="link in footerLinks" :key="link.to">
              <NuxtLink :to="link.to" class="footer__nav-link">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="footer__social footer__social--mobile">
          <p class="footer__social-title">Follow us</p>
          <span class="footer__social-divider"></span>
          <div class="footer__social-icons">
            <BaseButton
              v-for="icon in socialIconsMobile"
              :key="icon.ariaLabel"
              variant="ghost"
              class="footer__social-button"
              :aria-label="icon.ariaLabel"
            >
              <component :is="icon.component" :class="['footer__social-icon', icon.iconClass]" />
            </BaseButton>
          </div>
        </div>
        <p class="footer__copyright">
          <span class="footer__copyright-bold">© 2021 Shelly.</span> Terms of
          use and <span class="footer__copyright-bold">and</span> privacy policy.
        </p>
      </div>
      <div class="footer__right">
        <div class="footer__newsletter">
          <form class="footer__newsletter-form" @submit.prevent="handleSubmit">
            <div class="footer__newsletter-input-wrapper">
              <BaseInput
                v-model="email"
                type="email"
                class="footer__newsletter-input"
                placeholder="Give an email, get the newsletter."
                :error="error"
                required
              />
            </div>
            <button type="submit" class="footer__newsletter-button">
              <EnterIcon class="footer__newsletter-icon footer__newsletter-icon--desktop" />
              <EnterIconMobile class="footer__newsletter-icon footer__newsletter-icon--mobile" />
            </button>
          </form>
          <label class="footer__terms-checkbox">
            <input v-model="agreeToTerms" type="checkbox" class="footer__terms-input" />
            <span class="footer__terms-text">i agree to the website's terms and conditions.</span>
          </label>
          <p v-if="isSuccess" class="footer__newsletter-success">
            Thank you! Your email has been saved.
          </p>
        </div>
        <div class="footer__social footer__social--desktop">
          <p class="footer__social-title">Follow us</p>
          <div class="footer__social-icons">
            <BaseButton
              v-for="icon in socialIcons"
              :key="icon.ariaLabel"
              variant="ghost"
              class="footer__social-button"
              :aria-label="icon.ariaLabel"
            >
              <component :is="icon.component" :class="['footer__social-icon', icon.iconClass]" />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  margin-top: 48px;
  margin-bottom: 0;

  @media (min-width: $breakpoints-m) {
    margin-top: 64px;
  }

  @media (min-width: $breakpoints-l) {
    margin-top: 80px;
  }

  &__divider {
    width: 100%;
    height: 1px;
    margin-bottom: 24px;
    background-color: $gray-300;

    @media (width < $breakpoints-m) {
      display: none;
    }

    @media (min-width: $breakpoints-m) {
      margin-bottom: 32px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: $breakpoints-m) {
      flex-direction: row;
      gap: 32px;
      justify-content: space-between;
    }
  }

  @media (width < $breakpoints-m) {
    &__content {
      flex-direction: column-reverse;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 0;

    @media (min-width: $breakpoints-m) {
      gap: 0;
    }
  }

  &__nav {
    display: block;
    margin-top: 28px;

    @media (min-width: $breakpoints-m) {
      margin-top: 20px;
    }

    @media (width < $breakpoints-m) {
      margin-top: -20px;
    }
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (min-width: $breakpoints-m) {
      flex-direction: row;
      gap: 24px;
    }

    @media (min-width: $breakpoints-l) {
      gap: 32px;
    }

    @media (width < $breakpoints-m) {
      gap: 12px;
    }
  }

  &__nav-link {
    font-family: $font-dm-sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: $gray-600;
    letter-spacing: 0%;
    text-decoration: none;
    transition: opacity 0.2s;

    @media (min-width: $breakpoints-m) {
      font-size: 16px;
      line-height: 27px;
      color: $gray-700;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &__copyright {
    margin-top: 48px;
    margin-bottom: 108px;
    font-family: $font-dm-sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    color: $gray-600;
    letter-spacing: 0%;

    @media (min-width: $breakpoints-m) {
      margin-top: 48px;
    }

    @media (width < $breakpoints-m) {
      margin-top: 24px;
      margin-bottom: 24px;
      font-size: 12px;
      line-height: 20px;
    }
  }

  &__copyright-bold {
    font-weight: 500;
    color: $color-black;

    @media (width < $breakpoints-m) {
      font-weight: 400;
      color: $gray-600;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    gap: 0;

    @media (min-width: $breakpoints-m) {
      gap: 0;
      align-items: flex-end;
    }
  }

  &__newsletter {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 13px;
    overflow: visible;

    @media (min-width: $breakpoints-m) {
      align-items: flex-end;
      width: auto;
      margin-top: 6px;
    }

    @media (width < $breakpoints-m) {
      margin-top: 0;
      margin-bottom: 24px;
    }
  }

  &__terms-checkbox {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    margin-top: 11px;
    cursor: pointer;

    @media (min-width: $breakpoints-m) {
      display: none;
    }
  }

  &__terms-input {
    flex-shrink: 0;
    width: 13px;
    height: 13px;
    margin-top: 3.5px;
    margin-left: -1px;
    cursor: pointer;
    border: 1px solid $gray-600;
    border-radius: 2px;
  }

  &__terms-text {
    font-family: $font-dm-sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: $color-black;
    letter-spacing: 0%;
  }

  &__newsletter-form {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 300px;
    border-bottom: 1px solid $color-black;

    @media (min-width: $breakpoints-m) {
      width: 396px;
      max-width: 396px;
    }

    @media (width < $breakpoints-m) {
      align-items: flex-end;
      max-width: 100%;
    }
  }

  &__newsletter-input-wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    min-width: 0;
    overflow: visible;
    border-bottom: none;
  }

  &__newsletter-input {
    width: 100%;

    :deep(.base-input-wrapper) {
      width: 100%;
      border-bottom: none;
    }

    :deep(.base-input) {
      padding: 8px 12px 6px 0;
      margin-bottom: -15px;
      font-family: $font-dm-sans;
      font-size: 12px;
      line-height: 20px;
      color: $gray-700;
      background: transparent;
      border: none;
      border-radius: 0;

      @media (min-width: $breakpoints-m) {
        padding: 8px 12px 13px 0;
        margin-bottom: 0;
        font-size: 16px;
        line-height: normal;
      }

      &::placeholder {
        font-family: $font-dm-sans;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: $gray-600;
        letter-spacing: 0%;
      }

      &:focus {
        border: none;
        box-shadow: none;
      }
    }

    @media (min-width: $breakpoints-m) {
      :deep(.base-input::placeholder) {
        font-size: 16px;
        line-height: normal;
        color: $gray-500;
      }
    }

    :deep(.base-input:focus) {
      border: none;
      box-shadow: none;
    }

    :deep(.base-input--error) {
      border: none;
    }

    :deep(.base-input--error:focus) {
      border: none;
      box-shadow: none;
    }

    :deep(.base-input__error) {
      margin-top: 4px;
    }
  }

  &__newsletter-button {
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    align-self: flex-end;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 0;
    margin-bottom: 0;
    margin-left: 8px;
    cursor: pointer;
    background: none;
    border: none;
    transition: opacity 0.2s;

    @media (width < $breakpoints-m) {
      margin-bottom: 2px;
    }

    @media (min-width: $breakpoints-m) {
      align-self: center;
      margin-bottom: 0;
    }

    &:hover {
      :deep(.footer__newsletter-icon) {
        color: $color-black;
        fill: $color-black;
      }

      :deep(.footer__newsletter-icon path) {
        fill: $color-black;
      }
    }
  }

  &__newsletter-icon {
    display: block;
    flex-shrink: 0;
    margin-bottom: -6px;
    color: $gray-600;
    fill: $gray-600;

    &--desktop {
      width: 25px;
      height: 9px;

      @media (width < $breakpoints-m) {
        display: none;
      }

      :deep(svg) {
        display: block;
        width: 25px;
        height: 9px;
      }
    }

    &--mobile {
      display: none;
      width: 15px;
      height: 6px;

      @media (width < $breakpoints-m) {
        display: block;
      }

      :deep(svg) {
        display: block;
        width: 15px;
        height: 6px;
      }
    }

    :deep(path) {
      fill: $gray-600;
    }
  }

  &__newsletter-success {
    margin: 8px 0 0;
    font-family: $font-dm-sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: $color-green;

    @media (min-width: $breakpoints-m) {
      text-align: right;
    }
  }

  &__social {
    display: flex;
    gap: 30px;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 108px;

    @media (min-width: $breakpoints-m) {
      margin-top: 50px;
    }

    @media (width < $breakpoints-m) {
      flex-direction: row;
      gap: 16px;
      align-items: center;
      margin-top: 36px;
      margin-bottom: 24px;
    }

    &--mobile {
      display: none;

      @media (width < $breakpoints-m) {
        display: flex;
        margin-top: 36px;
        margin-bottom: 24px;
      }
    }

    &--desktop {
      @media (min-width: $breakpoints-m) {
        margin-top: 50px;
      }

      @media (width < $breakpoints-m) {
        display: none;
      }
    }
  }

  &__social-title {
    display: none;

    @media (width < $breakpoints-m) {
      display: block;
      margin: 0;
      margin-right: 8px;
      font-family: $font-dm-sans;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      color: $gray-600;
    }
  }

  &__social-divider {
    display: none;

    @media (width < $breakpoints-m) {
      display: block;
      align-self: center;
      width: 47px;
      height: 0;
      margin-right: 8px;
      margin-bottom: 0;
      border-top: 1px solid $color-black;
    }
  }

  &__social-icons {
    display: flex;
    gap: 30px;
    align-items: center;

    @media (width < $breakpoints-m) {
      gap: 16px;
    }
  }

  &__social-button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;

    &:hover {
      :deep(.footer__social-icon) {
        color: $color-black;
        fill: $color-black;
      }

      :deep(.footer__social-icon path) {
        fill: $color-black;
      }
    }
  }

  &__social-icon {
    display: block;
    overflow: visible;
    color: $gray-600;
    transition: color 0.2s, fill 0.2s;

    &--facebook {
      :deep(svg) {
        display: block;
        width: 100%;
        height: auto;
      }

      @media (min-width: $breakpoints-m) {
        width: 10px;
        height: 18px;
      }
    }

    @media (min-width: $breakpoints-m) {
      &--facebook :deep(svg) {
        width: 10px;
        height: 18px;
      }
    }

    &--instagram {
      :deep(svg) {
        display: block;
        width: 100%;
        height: auto;
      }

      @media (min-width: $breakpoints-m) {
        width: 18px;
        height: 18px;
      }
    }

    @media (min-width: $breakpoints-m) {
      &--instagram :deep(svg) {
        width: 18px;
        height: 18px;
      }
    }

    &--twitter {
      :deep(svg) {
        display: block;
        width: 100%;
        height: auto;
      }

      @media (min-width: $breakpoints-m) {
        width: 20px;
        height: 17px;
      }
    }

    @media (min-width: $breakpoints-m) {
      &--twitter :deep(svg) {
        width: 20px;
        height: 17px;
      }
    }
  }
}
</style>
