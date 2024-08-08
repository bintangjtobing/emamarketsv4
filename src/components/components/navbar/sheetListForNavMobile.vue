<template>
  <Sheet>
    <SheetTrigger class="flex items-center justify-between w-full">
      <span class="text-base">
        {{ title }}
      </span>
      <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
          fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>
    </SheetTrigger>
    <SheetContent class="w-full">
      <Accordion type="single" class="w-full" collapsible>
        <AccordionItem class="border-none" v-for="item in data" :key="item.title" :value="item.title">
          <template v-if="isComponentWithList(item)">
            <template v-if="item.listOfItem.length > 0">
              <AccordionTrigger class="text-left">
                {{ item.title }}
              </AccordionTrigger>
              <AccordionContent>
                <ul class="mt-2 space-y-2 text-slate-700 ml-2">
                  <li v-for="subItem in item.listOfItem" :key="subItem.url">
                    <a :href="subItem.url">{{ subItem.title }}</a>
                  </li>
                </ul>
              </AccordionContent>
            </template>
            <template v-else>
              <div class="text-left py-2">
                <a :href="item.url">{{ item.title }}</a>
              </div>
            </template>
          </template>
          <template v-else>
            <div class="text-left py-2">
              <a :href="item.url">{{ item.title }}</a>
            </div>
          </template>
        </AccordionItem>
      </Accordion>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { componentsTraders, componentsCompany, componentsPartner, componentsHelpCenter, componentsEMACenter, Component, ComponentWithList, ComponentWithoutList } from './dataNavbar';

const props = defineProps({
  title: String,
});

const data = computed(() => {
  switch (props.title) {
    case 'Traders':
      return componentsTraders;
    case 'Partners':
      return componentsPartner;
    case 'Company':
      return componentsCompany;
    case 'Promotion':
      return componentsCompany;
    case 'EMA center':
      return componentsEMACenter;
    case 'Help center':
      return componentsHelpCenter;
    default:
      return [];
  }
});

function isComponentWithList(item: Component): item is ComponentWithList {
  return 'listOfItem' in item;
}
</script>
