<script lang="ts" setup>
import type { DropdownMenuCheckboxItemProps } from 'radix-vue'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Checked = DropdownMenuCheckboxItemProps['checked']

const showStatusBar = ref<Checked>(true)
const showActivityBar = ref<Checked>(false)
const showPanel = ref<Checked>(false)
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
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button class="flex items-center gap-2" variant="ghost">
                <img
                    :src="`https://flagsapi.com/${selectedCountry}/flat/24.png`"
                    alt="Selected country flag"
                    class="w-5 h-5"
                />
                {{ selectedCountry }}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
            <div v-for="country in countries" :key="country.code">
                <DropdownMenuItem @click="selectedCountry = country.code.toUpperCase()" class="flex items-center gap-2 px-4 my-3">
                    <img
                        :src="`https://flagsapi.com/${country.code.toUpperCase()}/flat/24.png`"
                        alt="Country flag"
                        class="w-5 h-5"
                    />
                    <span>{{ country.name }}</span>
                </DropdownMenuItem>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
</template>