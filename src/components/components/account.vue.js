import Button from '../ui/button/Button.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const contenAccount = [
    {
        title: 'Micro',
        slug: 'Starters',
        color: '#4783D7',
        list: ['Up to 1000:1 leverage', 'Spreads from 1.2', 'No min. deposit', 'No commission'],
    },
    {
        title: 'Standard',
        slug: 'Starters',
        color: '#1E6EDE',
        list: ['Up to 1000:1 leverage', 'Spreads from 1.2', 'No min. deposit', 'No commission'],
    },
    {
        title: 'Professional',
        slug: 'Advanced',
        color: '#084EB0',
        list: ['Up to 1000:1 leverage', 'Spreads from 0.6', 'No min. deposit', 'No commission'],
    },
    {
        title: 'Raw',
        slug: 'Advanced',
        color: '#040404',
        list: ['Up to 1000:1 leverage', 'Spreads from 0.0', '$5000 deposit', '$5 commission'],
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("bg-[#F0F3F7] xl:pt-28 xl:first-letter:pb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container max-w-screen-lg p-4 mx-auto space-y-10 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-4xl xl:text-5xl font-eina-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("xl:block xl:mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-sm text-slate-600") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:gap-6") }, });
    for (const [account, index] of __VLS_getVForSourceType((__VLS_ctx.contenAccount))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("text-left") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: (({ backgroundColor: account.color })) }, ...{ class: ("p-5 rounded-t-lg xl:px-8 xl:py-10") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs text-slate-100") }, });
        // @ts-ignore
        [contenAccount,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("text-2xl text-white xl:text-3xl font-eina-semi-bold") }, });
        (account.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-slate-100") }, });
        (account.slug);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("p-3 bg-white rounded-b-lg xl:p-5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [item, i] of __VLS_getVForSourceType((account.list))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((i)), ...{ class: ("flex items-center") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("text-[#084EB0] font-bold") }, width: ("25"), height: ("25"), viewBox: ("0 0 15 15"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"), fill: ("currentColor"), "fill-rule": ("evenodd"), "clip-rule": ("evenodd"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-sm text-slate-600 xl:text-base") }, });
            (item);
        }
    }
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Button, new Button({ ...{ class: ("px-10 rounded-full") }, }));
    const __VLS_1 = __VLS_0({ ...{ class: ("px-10 rounded-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ class: ("px-10 rounded-full") }, }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Button, __VLS_1));
    __VLS_nonNullable(__VLS_4.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['bg-[#F0F3F7]'];
        __VLS_styleScopedClasses['xl:pt-28'];
        __VLS_styleScopedClasses['xl:first-letter:pb-8'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['max-w-screen-lg'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['space-y-10'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['space-y-5'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['xl:text-5xl'];
        __VLS_styleScopedClasses['font-eina-bold'];
        __VLS_styleScopedClasses['xl:block'];
        __VLS_styleScopedClasses['xl:mt-4'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-slate-600'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['md:grid-cols-3'];
        __VLS_styleScopedClasses['lg:grid-cols-4'];
        __VLS_styleScopedClasses['xl:gap-6'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['rounded-t-lg'];
        __VLS_styleScopedClasses['xl:px-8'];
        __VLS_styleScopedClasses['xl:py-10'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['text-slate-100'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['xl:text-3xl'];
        __VLS_styleScopedClasses['font-eina-semi-bold'];
        __VLS_styleScopedClasses['text-slate-100'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['rounded-b-lg'];
        __VLS_styleScopedClasses['xl:p-5'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['text-[#084EB0]'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-slate-600'];
        __VLS_styleScopedClasses['xl:text-base'];
        __VLS_styleScopedClasses['px-10'];
        __VLS_styleScopedClasses['rounded-full'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Button: Button,
                contenAccount: contenAccount,
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
