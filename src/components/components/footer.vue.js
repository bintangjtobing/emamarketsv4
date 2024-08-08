const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const contentFooter = [
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("xl:p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container max-w-screen-lg p-4 mx-auto xl:p-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between xl:py-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("h-8") }, src: ("/asset/Logo-01.png"), alt: ("Logo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("/asset/sosmed/SocMeds (1).png"), alt: ("Social Media 1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("/asset/sosmed/SocMeds (4).png"), alt: ("Social Media 2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("/asset/sosmed/SocMeds (2).png"), alt: ("Social Media 3"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("/asset/sosmed/SocMeds (3).png"), alt: ("Social Media 4"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-2 gap-8 mt-10 mb-16 md:grid-cols-5 xl:px-16") }, });
    for (const [content, index] of __VLS_getVForSourceType((__VLS_ctx.contentFooter))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#084EB0] text-xl font-eina-semi-bold") }, });
        (content.title);
        // @ts-ignore
        [contentFooter,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("mt-4 space-y-2 text-xs") }, });
        for (const [item, idx] of __VLS_getVForSourceType((content.list))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((idx)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("text-gray-600 hover:text-gray-800") }, });
            (item);
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-20 text-sm border-t-2 broder xl:mx-16 text-slate-500 md:text-base") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-10 text-justify") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-justify") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-justify") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['xl:p-4'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['max-w-screen-lg'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['xl:p-0'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['xl:py-4'];
        __VLS_styleScopedClasses['h-8'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['gap-8'];
        __VLS_styleScopedClasses['mt-10'];
        __VLS_styleScopedClasses['mb-16'];
        __VLS_styleScopedClasses['md:grid-cols-5'];
        __VLS_styleScopedClasses['xl:px-16'];
        __VLS_styleScopedClasses['text-[#084EB0]'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-eina-semi-bold'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['space-y-2'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-gray-600'];
        __VLS_styleScopedClasses['hover:text-gray-800'];
        __VLS_styleScopedClasses['mb-20'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['border-t-2'];
        __VLS_styleScopedClasses['broder'];
        __VLS_styleScopedClasses['xl:mx-16'];
        __VLS_styleScopedClasses['text-slate-500'];
        __VLS_styleScopedClasses['md:text-base'];
        __VLS_styleScopedClasses['mt-10'];
        __VLS_styleScopedClasses['text-justify'];
        __VLS_styleScopedClasses['text-justify'];
        __VLS_styleScopedClasses['text-justify'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                contentFooter: contentFooter,
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
