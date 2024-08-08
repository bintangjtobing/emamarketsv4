<template>
  <NavigationMenu>
    <NavigationMenuList class="grid grid-cols-3 gap-2 mt-3 xl:mt-0 xl:flex">
      <!-- Traders Menu Item -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>Traders</NavigationMenuTrigger>
        <NavigationMenuContent class="overflow-auto">
          <div class="w-[350px] p-5 md:w-[500px] xl:w-[800px]">
            <ul class="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
              <li v-for="component in componentsTraders" :key="component.title">
                <p class="text-slate-500 text-sm">{{ component.title }}</p>
                <ul
                  :class="component.listOfItem.length > 5 ? 'grid grid-cols-2 space-y-1 text-sm mt-2' : 'mt-2 space-y-1 text-sm text-slate-700'">
                  <li v-for="item in component.listOfItem" :key="item.url">
                    <a :href="item.url">{{ item.title }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Partner Menu Item -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>Partner</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div class="w-[350px] md:w-[600px] lg:flex p-4">
            <ul class="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
              <li class="lg:col-span-2 p-3">
                <p class="text-slate-500 text-sm">{{ componentsPartner[0].title }}</p>
                <ul class="mt-2 space-y-2 text-sm text-slate-700">
                  <li v-for="item in componentsPartner[0].listOfItem" :key="item.url">
                    <a :href="item.url">{{ item.title }}</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="w-[400px] gap-3">
              <li v-for="(component, index) in componentsPartner.slice(1)" :key="component.title">
                <NavigationMenuLink as-child>
                  <a :href="component.url"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Promotion Menu Item -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>Promotion</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div class="w-[350px] lg:w-[550px]">
            <ul class="p-4 grid grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              <li>
                <NavigationMenuLink as-child>
                  <a href="#">Refer a friend</a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a href="#">30% tradable bonus</a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a href="#">Seasonal promotions</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Company Menu Item -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>Company</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div class="w-[350px] lg:w-[550px]">
            <ul class="p-4 grid grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5 text-sm">
              <li v-for="component in componentsCompany" :key="component.url">
                <NavigationMenuLink as-child>
                  <a :href="component.url">{{ component.title }}</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- EMA Center Menu Item -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>EMA Center</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div class="w-[350px] lg:w-[400px] p-5 md:w-[500px] xl:w-[600px]">
            <ul class="grid lg:grid-cols-2 w-full gap-5">
              <li v-for="component in componentsEMACenter" :key="component.title">
                <p class="text-slate-500 text-sm">{{ component.title }}</p>
                <ul
                  :class="component.listOfItem.length > 5 ? 'grid grid-cols-2 space-y-1 text-sm mt-2' : 'mt-2 space-y-1 text-sm text-slate-700'">
                  <li v-for="item in component.listOfItem" :key="item.url">
                    <a :href="item.url">{{ item.title }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Help Center Menu Item -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>Help Center</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div class="w-[350px] lg:w-[550px]">
            <ul class="p-4 grid grid-cols-2 md:grid-cols-3 gap-3 gap-y-5 text-sm">
              <li v-for="component in componentsHelpCenter" :key="component.url">
                <NavigationMenuLink as-child>
                  <a :href="component.url">{{ component.title }}</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>

<script setup lang="ts">

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../../ui/navigation-menu';

import {
  componentsTraders,
  componentsPartner,
  componentsCompany,
  componentsEMACenter,
  componentsHelpCenter
} from './dataNavbar'
</script>
