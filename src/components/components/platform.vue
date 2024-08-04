<script setup lang="ts">
import Button from '../ui/button/Button.vue';
</script>

<template>
    <section class="bg-[#F0F3F7]">
        <div class="container max-w-screen-lg py-10 px-4">
            <div class="grid grid-cols-3 xl:py-14 xl:px-14 py-8 px-5 bg-white relative overflow-hidden rounded-lg">
                <div class="xl:space-y-5 space-y-2 md:col-span-2 col-span-3 text-center md:text-left">
                    <h2 class="xl:text-5xl text-[30px] font-eina-bold leading-snug">Seamless tardes with <span class="xl:block xl:mt-4">MetaTrader 5 Platform</span></h2>
                    <p class="text-sm xl:text-base xl:w-[70%]">Monitor markets, place trades, and access account information form your smartphone or tablet,
                        regardless of location</p>
                    <Button class="px-10 rounded-full text-xs">Learn More</Button>
                </div>
                <div class="md:col-span-1 col-span-3 mt-3">
                    <img class="xl:h-[25rem]  xl:absolute right-[-35px] top-[-20px]" src="/asset/platform.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>