<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import LogoAxdif from '@/assets/svg/logo-axdif.svg';
import FieldText from '@/components/field/FieldText.vue';
import FieldCheckbox from '@/components/field/FieldCheckbox.vue';
import AfterRegister from './components/AfterRegister.vue';
import { COUNTRY_FLAG } from '@/constant/country';
import { schemaValidationRegister } from './validation/auth';

const router = useRouter();

const showPassword = ref(true);
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const showPasswordConfirm = ref(true);
const toggleShowPasswordConfirm = () => {
  showPasswordConfirm.value = !showPasswordConfirm.value;
};

const isRegister = ref(false);

const { handleSubmit } = useForm({
  validationSchema: yup.object(schemaValidationRegister),
});

const form = reactive({
  company_name: '',
  fullname: '',
  email: '',
  phone: '',
  phone_code: '+62',
  password: '',
  pass_confirm: '',
  agree_newsletter: false,
  agree_terms: false,
});

const onSubmit = handleSubmit(values => {
  isRegister.value = true;
});
</script>

<template>
  <div
    class="tw-flex tw-justify-start tw-items-center tw-h-screen tw-py-6 tw-px-20 tw-w-full"
  >
    <div class="tw-w-full">
      <div><LogoAxdif width="150" /></div>

      <div v-if="!isRegister">
        <div class="text-secondary-blue-dark tw-my-8">
          <p class="tw-font-extrabold tw-text-2xl tw-mb-2">
            Manage all your employee efficiently
          </p>
          <p class="tw-font-medium tw-text-base">
            Let’s get you all set up so you can verify your personal account and
            <br />
            begin setting up your profile
          </p>
        </div>
        <form @submit="onSubmit">
          <v-row>
            <v-col cols="6">
              <FieldText
                v-model="form.company_name"
                label="Company Name"
                name="company_name"
                placeholder="e.g John"
              />
            </v-col>
            <v-col cols="6">
              <FieldText
                v-model="form.fullname"
                label="Fullname"
                name="fullname"
                placeholder="e.g Doe"
              />
            </v-col>
            <v-col cols="6">
              <FieldText
                v-model="form.email"
                type="email"
                label="Email"
                name="email"
                placeholder="e.g john.doe@mail.com"
              />
            </v-col>
            <v-col cols="6">
              <div
                class="tw-mb-1.5 tw-text-base tw-font-bold text-secondary-blue-dark"
              >
                Phone Number (Optional)
              </div>
              <div class="tw-grid tw-grid-cols-12 tw-gap-3">
                <div class="tw-col-span-3">
                  <v-select
                    v-model="form.phone_code"
                    :items="COUNTRY_FLAG"
                    item-title="code_number"
                    item-value="code_number"
                    density="compact"
                    color="primary-600"
                    variant="outlined"
                    hide-details
                  />
                </div>
                <div class="tw-col-span-9">
                  <FieldText
                    v-model="form.phone"
                    name="phone"
                    placeholder="e.g 821 2345 6789"
                  />
                </div>
              </div>
            </v-col>
            <v-col cols="6">
              <FieldText
                v-model="form.password"
                :type="showPassword ? 'password' : 'text'"
                label="Password"
                name="password"
                placeholder="Insert Password"
              >
                <template #append-inner>
                  <v-btn
                    density="compact"
                    :icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    variant="text"
                    type="button"
                    @click="toggleShowPassword()"
                  />
                </template>
              </FieldText>
            </v-col>
            <v-col cols="6">
              <FieldText
                v-model="form.pass_confirm"
                :type="showPasswordConfirm ? 'password' : 'text'"
                label="Confirm Password"
                name="pass_confirm"
                placeholder="Confirm Password"
              >
                <template #append-inner>
                  <v-btn
                    density="compact"
                    :icon="showPasswordConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                    variant="text"
                    type="button"
                    @click="toggleShowPasswordConfirm()"
                  />
                </template>
              </FieldText>
            </v-col>
          </v-row>
          <v-row no-gutters class="tw-mt-2">
            <v-col cols="8">
              <FieldCheckbox
                v-model="form.agree_newsletter"
                name="agree_newsletter"
              >
                <template #label>
                  <div
                    class="text-secondary-blue-dark tw-ml-2 tw-text-sm tw-font-medium"
                  >
                    Yes I want to receive Axdif’s Newsletter
                  </div>
                </template>
              </FieldCheckbox>
            </v-col>
            <v-col cols="8">
              <FieldCheckbox v-model="form.agree_terms" name="agree_terms">
                <template #label>
                  <div
                    class="text-secondary-blue-dark tw-ml-2 tw-text-sm tw-font-medium"
                  >
                    <div>
                      I have read and accept the
                      <span class="text-secondary-blue">
                        Terms & Conditions
                      </span>
                      and
                      <span class="text-secondary-blue">Privacy Policy</span>
                    </div>
                  </div>
                </template>
              </FieldCheckbox>
            </v-col>
          </v-row>
          <div class="tw-mt-6 tw-flex tw-justify-between tw-gap-3">
            <v-btn
              variant="flat"
              color="secondary-red"
              type="submit"
              class="tw-px-6"
            >
              Submit
            </v-btn>
            <button
              class="tw-underline tw-text-sm text-secondary-blue-dark"
              @click="router.push('Login')"
            >
              Already have Account ? Login now
            </button>
          </div>
        </form>
      </div>
      <AfterRegister v-else />
      <div class="text-secondary-blue-dark tw-mt-8 tw-text-sm">
        © Copyright 2023. All Right Reserved.
      </div>
    </div>
  </div>
</template>

<style scoped></style>
./validation/auth
