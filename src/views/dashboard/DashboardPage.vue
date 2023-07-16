<script setup lang="ts"></script>
<template>
  <div class="tw-bg-[#F9F9F9] tw-min-h-full tw-p-6 font-open-sans">
    <div class="grid-12 tw-gap-6">
      <div class="tw-col-span-7">
        <div class="card-dashboard bg-background">
          <div class="fcb text-secondary">
            <div class="tw-text-xl tw-font-bold">Summary</div>
            <div class="fcs tw-gap-4">
              <div class="tw-text-sm">Periode</div>
              <v-btn
                border
                variant="text"
                append-icon="mdi-calendar-blank-outline"
              >
                <div class="tw-font-semibold tw-text-sm">November 2023</div>

                <template #append>
                  <v-icon color="primary-500" />
                </template>
              </v-btn>
            </div>
          </div>
          <v-divider class="tw-my-3 tw-opacity-50" />
          <div>dsfds</div>
        </div>
      </div>
      <div class="tw-col-span-5">dashboard</div>
    </div>
  </div>
</template>

<style scoped></style>
