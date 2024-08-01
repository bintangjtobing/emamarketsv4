<script setup lang="ts">
import marketContents from './market/marketContents.vue';
</script>

<template>
    <section class="container max-w-screen-lg mx-auto p-4 text-center">
        <div class="py-14">
            <h2 class="text-5xl font-eina-bold">Track real time <span class="block mt-5">market movements</span></h2>
            <p class="mt-5 text-slate-500">See how to prices of stocks, currencies, Commodities, or <span class="block">other financial instruments are changing</span></p>
        </div>
        <div>
            <marketContents/>
        </div>
    </section>
</template>