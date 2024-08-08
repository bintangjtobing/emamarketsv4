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
  <section class="xl:p-4 my-2 xl:my-5 ">
    <div class="container max-w-screen-lg mx-auto p-4 text-center ">
      <div class="space-y-3 xl:space-y-5 py-1 xl:py-5">
        <h1 class="text-3xl xl:text-5xl font-extrabold font-eina-bold leading-10">{{ $t('heading-hero') }}<span class="block mt-1 xl:mt-7">{{ $t('heading-hero-span') }}</span>
        </h1>
        <p class="text-base">
          {{ $t('hero-text') }} <span class="block">{{$t('hero-text-2')}}</span>
        </p>
        <Button class="rounded-full px-5 py-3 xl:px-10 xl:py-6 text-xs">{{  $t('hero-btn-text')}}</Button>
      </div>
      <div class="">
        <video class="hidden md:block md:w-full w-screen h-auto" autoplay muted>
          <source src="/asset/HeroVideo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <video class="md:hidden md:w-full h-auto px-8" autoplay muted>
          <source src="/asset/hero vidio for mobile.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>
