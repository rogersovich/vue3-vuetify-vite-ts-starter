<script setup lang="ts">
import * as yup from 'yup';
import { reactive, ref } from 'vue';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';

import { schemaValidationLogin } from '../validation/auth';
import FieldText from '@/components/field/FieldText.vue';
import FieldCheckbox from '@/components/field/FieldCheckbox.vue';

const router = useRouter();

const { mobile } = useDisplay();

const showPassword = ref(true);
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const { handleSubmit } = useForm({
  validationSchema: yup.object(schemaValidationLogin),
});

const form = reactive({
  email: '',
  password: '',
  remember_me: false,
});

const onSubmit = handleSubmit(values => {
  console.log(values);
  router.push({ name: 'Dashboard' });
});
</script>
<template>
  <div class="tw-mt-3">
    <form @submit="onSubmit">
      <v-row dense>
        <v-col cols="12">
          <FieldText
            v-model="form.email"
            type="email"
            label="Email"
            name="email"
            placeholder="e.g john.doe@mail.com"
          />
        </v-col>

        <v-col cols="12">
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
        <v-col cols="12">
          <div class="tw-flex tw-items-center tw-justify-between">
            <FieldCheckbox v-model="form.remember_me" name="remember_me">
              <template #label>
                <div
                  class="text-secondary-blue-dark tw-ml-2 tw-text-sm tw-font-medium"
                >
                  Remember Me
                </div>
              </template>
            </FieldCheckbox>
            <div>
              <v-btn
                type="button"
                variant="text"
                size="small"
                color="primary-600"
              >
                Forgot Password
              </v-btn>
            </div>
          </div>
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
          Login
        </v-btn>
        <div class="tw-text-center md:tw-text-left tw-mt-3 md:tw-mt-0">
          <button
            type="button"
            class="button-link text-secondary-blue-dark"
            @click="router.push({ name: 'Register' })"
          >
            Dont have Account ? Register now
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
