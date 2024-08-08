<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from '../../ui/button/Button.vue';
import type { DropdownMenuCheckboxItemProps } from 'radix-vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from '../../ui/dropdown-menu';
import ScrollArea from '../../ui/scroll-area/ScrollArea.vue';

// Use vue-i18n
const { t, locale } = useI18n();

type Checked = DropdownMenuCheckboxItemProps['checked'];

const showStatusBar = ref<Checked>(true);
const showActivityBar = ref<Checked>(false);
const showPanel = ref<Checked>(false);

// Example list of countries with translation keys
const countries = [
  { code: 'us', name: t('countries.english'), image: '/images/en.svg' },
  { code: 'id', name: t('countries.indonesia'), image: '/images/in.svg' },
  // Add other countries with translations
];

const selectedCountry = ref(countries[0].code.toUpperCase());

// Watch selectedCountry and update locale
watch(selectedCountry, (newCountry) => {
  locale.value = newCountry.toLowerCase();
});

// Method to handle country selection
function selectCountry(code: string) {
  selectedCountry.value = code.toUpperCase();
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button class="flex items-center gap-2" variant="ghost">
        <img :src="`https://flagsapi.com/${selectedCountry}/flat/24.png`" alt="Selected country flag" class="w-5 h-5" />
        {{ selectedCountry }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56 ml-3 xl:ml-0">
      <ScrollArea class="h-[500px]">
        <div v-for="country in countries" :key="country.code">
          <DropdownMenuItem @click="selectCountry(country.code)" class="flex items-center gap-2 px-4 my-3">
            <img :src="`https://flagsapi.com/${country.code.toUpperCase()}/flat/24.png`" alt="Country flag" class="w-5 h-5" />
            <span>{{ country.name }}</span>
          </DropdownMenuItem>
        </div>
      </ScrollArea>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
