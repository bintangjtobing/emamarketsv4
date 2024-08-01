<script setup lang="ts">
import { ref } from 'vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const activeTab = ref('popular');

const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};
</script>

<template>
  <Tabs v-model:defaultValue="activeTab" class="max-w-screen-lg bg-white">
    <TabsList class="w-full flex justify-between bg-white">
      <TabsTrigger 
        v-for="tab in ['popular', 'currencies', 'shares', 'indices', 'commodities', 'etfs']"
        :key="tab"
        :value="tab"
        @click="setActiveTab(tab)"
        :class="activeTab === tab ? 'border-b-4 border-blue-500' : ''"
        class="px-4 py-2">
        {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
      </TabsTrigger>
    </TabsList>
    <TabsContent value="popular">
      Popular content here.
    </TabsContent>
    <TabsContent value="currencies">
      Currencies content here.
    </TabsContent>
    <TabsContent value="shares">
      Shares content here.
    </TabsContent>
    <TabsContent value="indices">
      Indices content here.
    </TabsContent>
    <TabsContent value="commodities">
      Commodities content here.
    </TabsContent>
    <TabsContent value="etfs">
      ETFs content here.
    </TabsContent>
  </Tabs>
</template>
