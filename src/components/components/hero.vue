<script setup lang="ts">
import { onMounted } from 'vue';
import Button from '../ui/button/Button.vue';

onMounted(() => {
  const videoElement = document.querySelector('video');
  if (videoElement) {
    videoElement.play();
  }
});
</script>

<template>
  <section class="p-4 my-5">
    <div class="container max-w-screen-lg mx-auto p-4 text-center">
      <div class="space-y-5 py-5">
        <h1 class="text-5xl font-extrabold font-eina-bold leading-10">
          Experience secure <span class="block mt-7">& simplified trading</span>
        </h1>
        <p class="text-base">
          Trade with confidence with our platform <span class="block">for secure and transparent trading</span>
        </p>
        <Button class="rounded-full px-10 py-6 text-xs">Open Account</Button>
      </div>
      <div class="">
        <video class="w-full h-auto" autoplay muted>
          <source src="/asset/HeroVideo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>
