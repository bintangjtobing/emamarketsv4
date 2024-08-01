<script setup lang="ts">
import Button from '../ui/button/Button.vue';
</script>

<template>
    <section class="bg-[#F0F3F7]">
        <div class="container max-w-screen-lg py-10">
            <div class="grid grid-cols-3 py-14 px-14 bg-white border relative overflow-hidden rounded-lg">
                <div class="space-y-5 col-span-2">
                    <h2 class="text-5xl font-eina-bold leading-snug">Seamless tardes with <span>MetaTrader 5 Platform</span></h2>
                    <p>Monitor markets, place trades, and access account information form your smartphone or tablet,
                        regardless of location</p>
                    <Button class="px-10 rounded-full">Learn More</Button>
                </div>
                <div class="col-span-1">
                    <img class="h-[25rem] absolute right-[-35px] top-[-20px]" src="/public/asset/platform.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>