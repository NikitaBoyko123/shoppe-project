<script setup lang="ts">
import { ref } from "vue";
import FacebookIcon from "@/assets/icons/facebook.svg?component";
import InstagramIcon from "@/assets/icons/instagram.svg?component";
import TwitterIcon from "@/assets/icons/twitter.svg?component";
import EnterIcon from "@/assets/icons/enter.svg?component";

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
              <EnterIcon class="footer__newsletter-icon" />
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
        <div class="footer__social">
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
      margin-top: 0;
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
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    color: $gray-700;
    letter-spacing: 0%;
    text-decoration: none;
    transition: opacity 0.2s;

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
      line-height: 18px;
    }
  }

  &__copyright-bold {
    font-weight: 500;
    color: $color-black;
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

    @media (min-width: $breakpoints-m) {
      align-items: flex-end;
      width: auto;
      margin-top: 5px;
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
    margin-top: 16px;
    cursor: pointer;

    @media (min-width: $breakpoints-m) {
      display: none;
    }
  }

  &__terms-input {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-top: 2px;
    cursor: pointer;
  }

  &__terms-text {
    font-family: $font-dm-sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: $gray-600;
  }

  &__newsletter-form {
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
      max-width: 100%;
    }
  }

  &__newsletter-input-wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    min-width: 0;
    border-bottom: none;
  }

  &__newsletter-input {
    width: 100%;

    :deep(.base-input-wrapper) {
      width: 100%;
      border-bottom: none;
    }

    :deep(.base-input) {
      padding: 8px 12px 13px 0;
      font-family: $font-dm-sans;
      font-size: 14px;
      color: $gray-700;
      background: transparent;
      border: none;
      border-radius: 0;

      @media (min-width: $breakpoints-m) {
        font-size: 16px;
      }

      &::placeholder {
        color: $gray-500;
      }

      &:focus {
        border: none;
        box-shadow: none;
      }
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
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: 8px;
    cursor: pointer;
    background: none;
    border: none;
  }

  &__newsletter-icon {
    display: block;
    width: 20px;
    height: 8px;
    color: $gray-600;

    @media (min-width: $breakpoints-m) {
      width: 25px;
      height: 8.74px;
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
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }

  &__social-title {
    display: none;

    @media (width < $breakpoints-m) {
      display: block;
      padding-bottom: 8px;
      margin: 0;
      font-family: $font-dm-sans;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      color: $gray-600;
      border-bottom: 1px solid $gray-300;
    }
  }

  &__social-icons {
    display: flex;
    gap: 30px;
    align-items: center;

    @media (width < $breakpoints-m) {
      gap: 20px;
    }
  }

  &__social-button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }

  &__social-icon {
    display: block;
    color: $gray-600;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    &--facebook {
      width: 10px;
      height: 18px;
    }

    &--instagram {
      width: 18px;
      height: 18px;
    }

    &--twitter {
      width: 20px;
      height: 17px;
    }
  }
}
</style>
