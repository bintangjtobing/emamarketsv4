<script setup lang="ts">
import Button from '../ui/button/Button.vue';
</script>

<template>
    <section class="pt-20 pb-10">
        <div class="container max-w-screen-lg mx-auto p-4 text-center">
            <div class="space-y-6">
                <h2 class="text-5xl font-eina-bold">Unlock your potential</h2>
                <p class="text-slate-600">Open EMA Account today</p>
                <Button class="px-10 rounded-full">Open Account</Button>
            </div>
            <div class="h-44 bg-[#084EB0] rounded-lg mt-20 flex justify-center relative">
                <div class="w-72">
                    <img class="h-72 absolute top-[-40px]" src="/public/asset/Light_01.png" alt="">
                </div>
            </div>
            <div class="w-full h-20 overflow-hidden relative bg-white"></div>
        </div>
    </section>
</template>