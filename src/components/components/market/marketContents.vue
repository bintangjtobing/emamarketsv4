<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import axios from 'axios';

const activeTab = ref('currencies');
const exchangeRates = ref<{ instrument: string; bid: number; ask: number }[]>([]);
const exchangeRate = ref<number | null>(null);
const exchangeRateData = ref<{ bid: number; ask: number }>({
  bid: 0,
  ask: 0
});
const fromCurrency = 'USD';
const toCurrency = 'JPY';
const rateExchange = 'CURRENCY_EXCHANGE_RATE';
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};
const fetchExchangeRate = async () => {
  const instruments = ['JPY', 'EUR', 'GBP', 'AUD'];
  try {
    const requests = instruments.map(toCurrency => 
      axios.get(
        `${import.meta.env.VITE_API_ENDPOINT_ALPHA}?function=${rateExchange}&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${import.meta.env.VITE_API_KEY_ALPHA}`
      )
    );
    const responses = await Promise.all(requests);
    exchangeRates.value = responses.map(response => {
      const data = response.data['Realtime Currency Exchange Rate'];
      console.log(response.data['Realtime Currency Exchange Rate']);
      return {
        instrument: data['4. To_Currency Name'],
        bid: parseFloat(data['8. Bid Price']),
        ask: parseFloat(data['9. Ask Price'])
      };
    });
  } catch (error) {
    console.error('Failed to fetch exchange rate:', error);
  }
};
onMounted(() => {
  fetchExchangeRate();
});
</script>

<template>
  <Tabs v-model:defaultValue="activeTab" class="max-w-screen-lg bg-white">
    <TabsList class="flex flex-wrap w-full bg-white xl:justify-between">
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
    <div>
      <TabsContent value="popular">
        Popular content here.
      </TabsContent>
      <TabsContent value="currencies">
        <table v-if="exchangeRates.length" class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Instruments</th>
              <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Bid</th>
              <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Ask</th>
              <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Spread</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(rate, index) in exchangeRates" :key="index">
              <td class="px-6 py-4 whitespace-nowrap" align="left">{{ rate.instrument }}</td>
              <td class="px-6 py-4 whitespace-nowrap" align="left">{{ rate.bid.toFixed(2) }}</td>
              <td class="px-6 py-4 whitespace-nowrap" align="left">{{ rate.ask.toFixed(2) }}</td>
              <td class="px-6 py-4 whitespace-nowrap" align="left">{{ (rate.ask - rate.bid).toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
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
    </div>
  </Tabs>
</template>
