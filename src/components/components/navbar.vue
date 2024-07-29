<script setup lang="ts">
import dropdownLangguage from './navbar/dropdownLangguage.vue';
import Login from './navbar/login.vue';
import Register from './navbar/register.vue';
import sheetNavMobile from './navbar/sheetNavMobile.vue';
import Navigation from './navbar/navigation.vue';

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
  <div class="">
    <div class="container py-4 flex items-center justify-between gap-3">
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
