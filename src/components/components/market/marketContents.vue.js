import { onMounted, ref } from 'vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import axios from 'axios';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const activeTab = ref('currencies');
const exchangeRates = ref([]);
const exchangeRate = ref(null);
const exchangeRateData = ref({
    bid: 0,
    ask: 0
});
const fromCurrency = 'USD';
const toCurrency = 'JPY';
const rateExchange = 'CURRENCY_EXCHANGE_RATE';
const setActiveTab = (tab) => {
    activeTab.value = tab;
};
const fetchExchangeRate = async () => {
    const instruments = ['JPY', 'EUR', 'GBP', 'AUD'];
    try {
        const requests = instruments.map(toCurrency => axios.get(`${import.meta.env.VITE_API_ENDPOINT_ALPHA}?function=${rateExchange}&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${import.meta.env.VITE_API_KEY_ALPHA}`));
        const responses = await Promise.all(requests);
        exchangeRates.value = responses.map(response => {
            const data = response.data['Realtime Currency Exchange Rate'];
            return {
                instrument: data['4. To_Currency Name'],
                bid: parseFloat(data['8. Bid Price']),
                ask: parseFloat(data['9. Ask Price'])
            };
        });
    }
    catch (error) {
        console.error('Failed to fetch exchange rate:', error);
    }
};
onMounted(() => {
    fetchExchangeRate();
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .Tabs;
    ({}.Tabs);
    ({}.Tabs);
    __VLS_components.Tabs;
    __VLS_components.Tabs;
    // @ts-ignore
    [Tabs, Tabs,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ defaultValue: ((__VLS_ctx.activeTab)), ...{ class: ("max-w-screen-lg bg-white") }, }));
    const __VLS_2 = __VLS_1({ defaultValue: ((__VLS_ctx.activeTab)), ...{ class: ("max-w-screen-lg bg-white") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ defaultValue: ((__VLS_ctx.activeTab)), ...{ class: ("max-w-screen-lg bg-white") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .TabsList;
    ({}.TabsList);
    ({}.TabsList);
    __VLS_components.TabsList;
    __VLS_components.TabsList;
    // @ts-ignore
    [TabsList, TabsList,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("flex flex-wrap w-full bg-white xl:justify-between") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("flex flex-wrap w-full bg-white xl:justify-between") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("flex flex-wrap w-full bg-white xl:justify-between") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    for (const [tab] of __VLS_getVForSourceType((['popular', 'currencies', 'shares', 'indices', 'commodities', 'etfs']))) {
        // @ts-ignore
        const __VLS_12 = {}
            .TabsTrigger;
        ({}.TabsTrigger);
        ({}.TabsTrigger);
        __VLS_components.TabsTrigger;
        __VLS_components.TabsTrigger;
        // @ts-ignore
        [TabsTrigger, TabsTrigger,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, key: ((tab)), value: ((tab)), ...{ class: ((__VLS_ctx.activeTab === tab ? 'border-b-4 border-blue-500' : '')) }, ...{ class: ("px-4 py-2") }, }));
        const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, key: ((tab)), value: ((tab)), ...{ class: ((__VLS_ctx.activeTab === tab ? 'border-b-4 border-blue-500' : '')) }, ...{ class: ("px-4 py-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ 'onClick': {} }, key: ((tab)), value: ((tab)), ...{ class: ((__VLS_ctx.activeTab === tab ? 'border-b-4 border-blue-500' : '')) }, ...{ class: ("px-4 py-2") }, }));
        __VLS_styleScopedClasses = (activeTab === tab ? 'border-b-4 border-blue-500' : '');
        let __VLS_18;
        const __VLS_19 = {
            onClick: (...[$event]) => {
                __VLS_ctx.setActiveTab(tab);
                // @ts-ignore
                [activeTab, activeTab, setActiveTab,];
            }
        };
        const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
        let __VLS_15;
        let __VLS_16;
        (tab.charAt(0).toUpperCase() + tab.slice(1));
        __VLS_nonNullable(__VLS_17.slots).default;
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_20 = {}
        .TabsContent;
    ({}.TabsContent);
    ({}.TabsContent);
    __VLS_components.TabsContent;
    __VLS_components.TabsContent;
    // @ts-ignore
    [TabsContent, TabsContent,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ value: ("popular"), }));
    const __VLS_22 = __VLS_21({ value: ("popular"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ value: ("popular"), }));
    const __VLS_25 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22));
    __VLS_nonNullable(__VLS_25.slots).default;
    // @ts-ignore
    const __VLS_26 = {}
        .TabsContent;
    ({}.TabsContent);
    ({}.TabsContent);
    __VLS_components.TabsContent;
    __VLS_components.TabsContent;
    // @ts-ignore
    [TabsContent, TabsContent,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ value: ("currencies"), ...{ class: ("overflow-x-auto mt-12 lg:mt-5") }, }));
    const __VLS_28 = __VLS_27({ value: ("currencies"), ...{ class: ("overflow-x-auto mt-12 lg:mt-5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ value: ("currencies"), ...{ class: ("overflow-x-auto mt-12 lg:mt-5") }, }));
    const __VLS_31 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28));
    if (__VLS_ctx.exchangeRates.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("min-w-full divide-y divide-gray-200 text-sm") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({ ...{ class: ("bg-gray-50") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase") }, });
        // @ts-ignore
        [exchangeRates,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({ ...{ class: ("px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({ ...{ class: ("bg-white divide-y divide-gray-200") }, });
        for (const [rate, index] of __VLS_getVForSourceType((__VLS_ctx.exchangeRates))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-4 whitespace-nowrap") }, align: ("left"), });
            (rate.instrument);
            // @ts-ignore
            [exchangeRates,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-4 whitespace-nowrap") }, align: ("left"), });
            (rate.bid.toFixed(2));
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-4 whitespace-nowrap") }, align: ("left"), });
            (rate.ask.toFixed(2));
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: ("px-6 py-4 whitespace-nowrap") }, align: ("left"), });
            ((rate.ask - rate.bid).toFixed(2));
        }
    }
    __VLS_nonNullable(__VLS_31.slots).default;
    // @ts-ignore
    const __VLS_32 = {}
        .TabsContent;
    ({}.TabsContent);
    ({}.TabsContent);
    __VLS_components.TabsContent;
    __VLS_components.TabsContent;
    // @ts-ignore
    [TabsContent, TabsContent,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ value: ("shares"), }));
    const __VLS_34 = __VLS_33({ value: ("shares"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ value: ("shares"), }));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34));
    __VLS_nonNullable(__VLS_37.slots).default;
    // @ts-ignore
    const __VLS_38 = {}
        .TabsContent;
    ({}.TabsContent);
    ({}.TabsContent);
    __VLS_components.TabsContent;
    __VLS_components.TabsContent;
    // @ts-ignore
    [TabsContent, TabsContent,];
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ value: ("indices"), }));
    const __VLS_40 = __VLS_39({ value: ("indices"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ value: ("indices"), }));
    const __VLS_43 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40));
    __VLS_nonNullable(__VLS_43.slots).default;
    // @ts-ignore
    const __VLS_44 = {}
        .TabsContent;
    ({}.TabsContent);
    ({}.TabsContent);
    __VLS_components.TabsContent;
    __VLS_components.TabsContent;
    // @ts-ignore
    [TabsContent, TabsContent,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ value: ("commodities"), }));
    const __VLS_46 = __VLS_45({ value: ("commodities"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ value: ("commodities"), }));
    const __VLS_49 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46));
    __VLS_nonNullable(__VLS_49.slots).default;
    // @ts-ignore
    const __VLS_50 = {}
        .TabsContent;
    ({}.TabsContent);
    ({}.TabsContent);
    __VLS_components.TabsContent;
    __VLS_components.TabsContent;
    // @ts-ignore
    [TabsContent, TabsContent,];
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ value: ("etfs"), }));
    const __VLS_52 = __VLS_51({ value: ("etfs"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ value: ("etfs"), }));
    const __VLS_55 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52));
    __VLS_nonNullable(__VLS_55.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['max-w-screen-lg'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['xl:justify-between'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['overflow-x-auto'];
        __VLS_styleScopedClasses['mt-12'];
        __VLS_styleScopedClasses['lg:mt-5'];
        __VLS_styleScopedClasses['min-w-full'];
        __VLS_styleScopedClasses['divide-y'];
        __VLS_styleScopedClasses['divide-gray-200'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['bg-gray-50'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['tracking-wider'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['uppercase'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['divide-y'];
        __VLS_styleScopedClasses['divide-gray-200'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
        __VLS_styleScopedClasses['px-6'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['whitespace-nowrap'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Tabs: Tabs,
                TabsContent: TabsContent,
                TabsList: TabsList,
                TabsTrigger: TabsTrigger,
                activeTab: activeTab,
                exchangeRates: exchangeRates,
                setActiveTab: setActiveTab,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
