<script setup lang="ts">
import Button from '../ui/button/Button.vue';
const contenAccount: { title: string; slug: string; list: string[]; color: string }[] = [
    {
        title: 'Micro',
        slug: 'Starters',
        color: '#4783D7',
        list: ['Up to 1000:1 leverage', 'Spreads from 1.2', 'No min. deposit', 'No commission'],
    },
    {
        title: 'Standard',
        slug: 'Starters',
        color: '#1E6EDE',
        list: ['Up to 1000:1 leverage', 'Spreads from 1.2', 'No min. deposit', 'No commission'],
    },
    {
        title: 'Professional',
        slug: 'Advanced',
        color: '#084EB0',
        list: ['Up to 1000:1 leverage', 'Spreads from 0.6', 'No min. deposit', 'No commission'],
    },
    {
        title: 'Raw',
        slug: 'Advanced',
        color: '#040404',
        list: ['Up to 1000:1 leverage', 'Spreads from 0.0', '$5000 deposit', '$5 commission'],
    },
];
</script>

<template>
    <section class="bg-[#F0F3F7] xl:pt-28 xl:first-letter:pb-8">
        <div class="container max-w-screen-lg p-4 mx-auto space-y-10 text-center">
            <div class="space-y-5">
                <h1 class="text-4xl xl:text-5xl font-eina-bold">Maximize your benefits <span
                        class="xl:block xl:mt-4">with the right
                        account</span></h1>
                <p class="text-sm text-slate-600">Open your account today and tailor your experince to fit <span
                        class="block">your goals, it's easy to start - customize your settings dive</span> dive into EMA
                    Markets</p>
            </div>
            <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
                <div v-for="(account, index) in contenAccount" :key="index" class="text-left">
                    <div :style="{ backgroundColor: account.color }" class="p-5 rounded-t-lg xl:px-8 xl:py-10">
                        <span class="text-xs text-slate-100">Account</span>
                        <h4 class="text-2xl text-white xl:text-3xl font-eina-semi-bold">{{ account.title }}</h4>
                        <span class="text-slate-100">{{ account.slug }}</span>
                    </div>
                    <div class="p-3 bg-white rounded-b-lg xl:p-5">
                        <ul>
                            <li v-for="(item, i) in account.list" :key="i" class="flex items-center">
                                <svg class="text-[#084EB0] font-bold" width="25" height="25" viewBox="0 0 15 15"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-sm text-slate-600 xl:text-base"> {{ item }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Button class="px-10 rounded-full">Learn More</Button>
        </div>
    </section>
</template>