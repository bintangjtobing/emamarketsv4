<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

interface ListItem {
  title: string;
  url: string;
}

interface Component {
  title: string;
  listOfItem: ListItem[];
}

const componentsTraders: Component[] = [
  {
    title: 'Account / Account Type / Ema Account Type',
    listOfItem: [
      { title: 'Micro Account', url: 'micro-account' },
      { title: 'Standard Account', url: 'standard-account' },
      { title: 'Profesional Account', url: 'profesional-account' },
      { title: 'Demo Account', url: 'demo-account' },
    ],
  },
  {
    title: 'Market',
    listOfItem: [
      { title: 'Stock CFD', url: '#' },
      { title: 'Indices', url: '#' },
      { title: 'Metal', url: '#' },
      { title: 'Energy', url: '#' },
      { title: 'Crypto', url: '#' },
      { title: 'Currencies', url: '#' },
      { title: 'Commodities', url: '#' },
      { title: 'Futures', url: '#' },
    ],
  },
  {
    title: 'Platform',
    listOfItem: [
      { title: 'MetaTrader 5', url: '#' },
      { title: 'Scheduled Maintenance', url: '#' },
    ],
  },
  {
    title: 'EMA Provides',
    listOfItem: [
      { title: 'Auto Reset Balance', url: '#' },
      { title: 'Ease Trading', url: '#' },
      { title: 'PAMM', url: '#' },
    ],
  },
];

const componentsPartner: { title: string; description: string; url: string; listOfItem: ListItem[] }[] = [
  {
    title: 'Introducing Broker',
    description: '',
    url: '',
    listOfItem: [
      { title: 'Partners site', url: '#' },
      { title: 'Affiliate Links', url: '#' },
      { title: 'Partners Portal', url: '#' },
      { title: 'Partners Portal / Marketing support', url: '#' },
      { title: 'Partners Portal / Merchandise', url: '#' },
      { title: 'Partners Portal / Digital Marketing', url: '#' },
      { title: 'Partners Portal / Partners event', url: '#' },
      { title: 'Partners Portal / IB Deck', url: '#' },
    ],
  },
  { title: 'Influencer', description: 'lorem ipsum amet ble ajd jihsshiaiwuehdjdejh', url: '', listOfItem: [] },
  { title: 'EMA Trainers', description: 'lorem ipsum amet ble ajd jihsshiaiwuehdjdejh', url: '', listOfItem: [] },
];


const componentsCompany: { title: string; url: string }[] = [
  {
    title: 'Story',
    url: '#'
  },
  {
    title: 'Legal',
    url: '#'
  },
  {
    title: 'Regulation',
    url: '#'
  },
  {
    title: 'Company News',
    url: '#'
  },
  {
    title: 'Contact Us',
    url: '#'
  },
  {
    title: 'Career',
    url: '#'
  },
  {
    title: 'EMA Ambassadors',
    url: '#'
  },
  {
    title: 'Awards',
    url: '#'
  },
  {
    title: 'EMA Partners',
    url: '#'
  },
]

const componentsEMACenter: { title: string; url: string; listOfItem: ListItem[] }[] = [
  {
    title: 'Education',
    url: '',
    listOfItem: [
      {
        title: 'How to video tutorials',
        url: '#'
      },
      {
        title: 'Live webinars + webinar schedule',
        url: '#'
      },
      {
        title: 'EMA Glossary',
        url: '#'
      },
    ]
  },
  {
    title: 'EMA Discovery',
    url: '',
    listOfItem: [
      {
        title: 'Market outlook',
        url: '#'
      },
      {
        title: 'Trading ideas',
        url: '#'
      },
    ]
  },
  {
    title: 'Trading Tools',
    url: '',
    listOfItem: [
      {
        title: 'Analytical tools / MQL5 / Trading Centaral',
        url: '#'
      },
      {
        title: 'Analytical tools / Economic Calender',
        url: '#'
      },
      {
        title: 'Analytical tools / Market news fx street/tarding view',
        url: '#'
      },
      {
        title: 'Currency converter',
        url: '#'
      },
      {
        title: 'Trading calculator',
        url: '#'
      },
      {
        title: 'Pip Legend  ',
        url: '#'
      },
    ]
  },

]

const componentsHelpCenter: { title: string; url: string }[] = [
  {
    title: 'Account Assistance',
    url: '#'
  },
  {
    title: 'Products',
    url: '#'
  },
  {
    title: 'Funding',
    url: '#'
  },
  {
    title: 'Platforms',
    url: '#'
  },
  {
    title: 'Promotions',
    url: '#'
  },
  {
    title: 'Account Comparison',
    url: '#'
  },
]
</script>

<template>
    <NavigationMenu class="">
        <NavigationMenuList class="grid grid-cols-3 gap-2 mt-3 xl:mt-0 xl:flex">
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
          <NavigationMenuItem>
            <NavigationMenuTrigger>Partner</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div class="w-[350px] md:w-[600px] lg:flex p-4">
                <!-- List for the first componentPartner element -->
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
                <!-- List for the rest of componentPartner elements -->
                <ul class="w-[400px] gap-3">
                  <li v-for="(component, index) in componentsPartner" :key="component.title"
                    :class="index != 0 ? '' : 'hidden'">
                    <NavigationMenuLink as-child>
                      <a :href="component.url"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {{ component.description }}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
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