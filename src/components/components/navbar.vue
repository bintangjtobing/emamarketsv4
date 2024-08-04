<script setup lang="ts">
import dropdownLangguage from './navbar/dropdownLangguage.vue';
import Login from './navbar/login.vue';
import Register from './navbar/register.vue';
import sheetNavMobile from './navbar/sheetNavMobile.vue';
import Navigation from './navbar/navigation.vue';
</script>

<template>
  <div class="">
    <div class="container max-w-screen-xl py-4 flex items-center justify-between gap-3 px-4">
      <div class="flex items-center justify-between gap-3">
        <div class="">
          <img class="h-10 hidden xl:block" src="/asset/Logo-01.png" alt="">
          <img class="h-10 block xl:hidden" src="/asset/Logo_04.png" alt="">
        </div>
        <div class="hidden xl:flex">
          <Navigation/>
        </div>
      </div>
      <div class="items-center  hidden xl:flex">
        <div>
          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div>
          <dropdownLangguage />
        </div>
        <div class="space-x-2">
          <Login />
          <Register />
        </div>
      </div>
      <div class="xl:hidden">
       <sheetNavMobile/>
      </div>
    </div>
  </div>
</template>
