<script setup lang="ts">
const contentFooter: { title: string; list: string[] }[] = [
  {
    title: 'Traders',
    list: ['Account', 'Market', 'Platform', 'EMA Provides', 'Ease Trading'],
  },
  {
    title: 'Promotion',
    list: ['Refer a Friend', '30% Tradable Bonus', 'Seasonal Promotions'],
  },
  {
    title: 'Partner',
    list: ['Introducing Broker', 'Affiliate CPA', 'Influencer', 'EMA Trainers', 'IB Loyalty'],
  },
  {
    title: 'EMA Center',
    list: ['Education', 'EMA Discovery', 'Market Outlook', 'Trading ideas'],
  },
  {
    title: 'Company',
    list: ['Story', 'Legal', 'Regulations', 'Contact Us'],
  },
];
</script>

<template>
  <section class="xl:p-4">
    <div class="container max-w-screen-lg p-4 mx-auto xl:p-0">
      <div class="flex items-center justify-between xl:py-4">
        <div>
          <img class="h-8" src="/asset/Logo-01.png" alt="Logo">
        </div>
        <div class="flex items-center gap-2">
          <a href="#">
            <img src="/asset/sosmed/SocMeds (1).png" alt="Social Media 1">
          </a>
          <a href="#">
            <img src="/asset/sosmed/SocMeds (4).png" alt="Social Media 2">
          </a>
          <a href="#">
            <img src="/asset/sosmed/SocMeds (2).png" alt="Social Media 3">
          </a>
          <a href="#">
            <img src="/asset/sosmed/SocMeds (3).png" alt="Social Media 4">
          </a>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8 mt-10 mb-16 md:grid-cols-5 xl:px-16">
        <div v-for="(content, index) in contentFooter" :key="index">
          <span class="text-[#084EB0] text-xl font-eina-semi-bold">{{ content.title }}</span>
          <ul class="mt-4 space-y-2 text-xs">
            <li v-for="(item, idx) in content.list" :key="idx">
              <a href="#" class="text-gray-600 hover:text-gray-800">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mb-20 text-sm border-t-2 broder xl:mx-16 text-slate-500 md:text-base">
        <p class="mt-10 text-justify">Ema Markets and registered in British Virgin Island with Company Registartion: 2006432. Zeal Holdings Limited, as a Group is composed of Multiple Brands 100% (Wholly) owned, authorised and regulated in various jurisdiction through the following Subsidiaries</p>
        <br>
        <p class="text-justify">EMA Markets Registartion Number: 2016/164943/07 and registered address: Dock Road Junction Cnr Dock Road and Stanley Street V&A Waterfront Cape Town 8001, South Africa, Authorised by Financial Services Counduct Authority with FSP (Financial Services Provider) Number: 48248. Traze (Pty) Ltd does not carry out any Principal activities and is not an ODP. Zeal Capital Market (Seychelles) Limited, is regulated as a Securities Dealer by the Financial Services Authority of Seychelles, license number: SD027. its principal office is at: Ofice 1, Unit 3, 1st Floor, Dekk Complex, Plaisance, Mahe, Seychelles.</p>
        <br>
        <p class="text-justify">EMA Markets does not provide services for residents of certain countries such as the United States od America, Brazil, Canada, Ofical Website: <a href="#">www.emamarkets.com</a> ©2024 EMAMarkets</p>
      </div>
    </div>
  </section>
</template>
