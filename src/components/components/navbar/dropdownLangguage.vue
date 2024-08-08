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
    { "code": "us", "name": "ENGLISH", "image": "/images/en.svg" },
    { "code": "vn", "name": "VIETNAMESE", "image": "/images/vn.svg" },
    { "code": "za", "name": "ZULU", "image": "/images/zu.svg" },
    { "code": "sw", "name": "SWAHILI", "image": "/lang/sw.svg" },
    { "code": "af", "name": "AFRIKAANS", "image": "/images/af.svg" },
    { "code": "th", "name": "THAI", "image": "/images/th.svg" },
    { "code": "ur", "name": "URDU", "image": "/lang/ur.svg" },
    { "code": "in", "name": "HINDI", "image": "/images/hi.svg" },
    { "code": "ru", "name": "RUSSIAN", "image": "/images/ru.svg" },
    { "code": "es", "name": "SPANISH", "image": "/images/es.svg" },
    { "code": "de", "name": "GERMAN", "image": "/images/de.svg" },
    { "code": "it", "name": "ITALIAN", "image": "/images/it.svg" },
    { "code": "ar", "name": "ARABIC", "image": "/images/ar.svg" },
    { "code": "fr", "name": "FRENCH", "image": "/images/fr.svg" },
    { "code": "pt", "name": "PORTUGUESE", "image": "/images/pt.svg" },
    { "code": "cn", "name": "CHINESE (SIMPLIFIED)", "image": "/images/cn.svg" },
    { "code": "cn", "name": "CHINESE (TRADITIONAL)", "image": "/images/zh.svg" },
    { "code": "kr", "name": "KOREAN", "image": "/images/ko.svg" },
    { "code": "id", "name": "INDONESIAN", "image": "/images/ind.svg" }
]

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
