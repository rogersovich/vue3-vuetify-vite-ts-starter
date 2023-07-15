<script setup lang="ts">
import * as yup from 'yup';
import { reactive, ref } from 'vue';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';

import FieldText from '@/components/field/FieldText.vue';
import FieldCheckbox from '@/components/field/FieldCheckbox.vue';
import { COUNTRY_FLAG } from '@/constant/country';
import { schemaValidationRegister } from '../validation/auth';

const emit = defineEmits(['updateIsRegister']);

const router = useRouter();

const { mobile } = useDisplay();

const showPassword = ref(true);
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const showPasswordConfirm = ref(true);
const toggleShowPasswordConfirm = () => {
  showPasswordConfirm.value = !showPasswordConfirm.value;
};

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
  emit('updateIsRegister', true);
});
</script>
<template>
  <div>
    <form @submit="onSubmit">
      <v-row>
        <v-col :cols="mobile ? 12 : 6">
          <FieldText
            v-model="form.company_name"
            label="Company Name"
            name="company_name"
            placeholder="e.g John"
          />
        </v-col>
        <v-col :cols="mobile ? 12 : 6">
          <FieldText
            v-model="form.fullname"
            label="Fullname"
            name="fullname"
            placeholder="e.g Doe"
          />
        </v-col>
        <v-col :cols="mobile ? 12 : 6">
          <FieldText
            v-model="form.email"
            type="email"
            label="Email"
            name="email"
            placeholder="e.g john.doe@mail.com"
          />
        </v-col>
        <v-col :cols="mobile ? 12 : 6">
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
        <v-col :cols="mobile ? 12 : 6">
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
        <v-col :cols="mobile ? 12 : 6">
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
        <v-col cols="12">
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
        <v-col cols="12">
          <FieldCheckbox v-model="form.agree_terms" name="agree_terms">
            <template #label>
              <div
                class="text-secondary-blue-dark tw-ml-2 tw-text-sm tw-font-medium"
              >
                <div>
                  I have read and accept the
                  <span class="text-secondary-blue">Terms & Conditions</span>
                  and
                  <span class="text-secondary-blue">Privacy Policy</span>
                </div>
              </div>
            </template>
          </FieldCheckbox>
        </v-col>
      </v-row>
      <div class="tw-mt-6 md:tw-flex md:tw-justify-between md:tw-gap-3">
        <v-btn
          variant="flat"
          color="secondary-red"
          type="submit"
          class="tw-px-6"
          :block="mobile"
        >
          Submit
        </v-btn>
        <div class="tw-text-center md:tw-text-left tw-mt-3 md:tw-mt-0">
          <button
            type="button"
            class="button-link text-secondary-blue-dark"
            @click="router.push({ name: 'Login' })"
          >
            Already have Account ? Login now
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
