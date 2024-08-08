import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from '../../ui/button/Button.vue';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '../../ui/dropdown-menu';
import ScrollArea from '../../ui/scroll-area/ScrollArea.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Use vue-i18n
const { t, locale } = useI18n();
const showStatusBar = ref(true);
const showActivityBar = ref(false);
const showPanel = ref(false);
// Example list of countries with translation keys
const countries = [
    { code: 'us', name: t('countries.english'), image: '/images/en.svg' },
    { code: 'id', name: t('countries.indonesia'), image: '/images/in.svg' },
    // Add other countries with translations
];
const selectedCountry = ref(countries[0].code.toUpperCase());
// Watch selectedCountry and update locale
watch(selectedCountry, (newCountry) => {
    locale.value = newCountry.toLowerCase();
});
// Method to handle country selection
function selectCountry(code) {
    selectedCountry.value = code.toUpperCase();
}
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
        .DropdownMenu;
    ({}.DropdownMenu);
    ({}.DropdownMenu);
    __VLS_components.DropdownMenu;
    __VLS_components.DropdownMenu;
    // @ts-ignore
    [DropdownMenu, DropdownMenu,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .DropdownMenuTrigger;
    ({}.DropdownMenuTrigger);
    ({}.DropdownMenuTrigger);
    __VLS_components.DropdownMenuTrigger;
    __VLS_components.DropdownMenuTrigger;
    // @ts-ignore
    [DropdownMenuTrigger, DropdownMenuTrigger,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ asChild: (true), }));
    const __VLS_8 = __VLS_7({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ asChild: (true), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(Button, new Button({ ...{ class: ("flex items-center gap-2") }, variant: ("ghost"), }));
    const __VLS_13 = __VLS_12({ ...{ class: ("flex items-center gap-2") }, variant: ("ghost"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({ ...{ class: ("flex items-center gap-2") }, variant: ("ghost"), }));
    const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Button, __VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`https://flagsapi.com/${__VLS_ctx.selectedCountry}/flat/24.png`)), alt: ("Selected country flag"), ...{ class: ("w-5 h-5") }, });
    // @ts-ignore
    [selectedCountry,];
    (__VLS_ctx.selectedCountry);
    // @ts-ignore
    [selectedCountry,];
    __VLS_nonNullable(__VLS_16.slots).default;
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_17 = {}
        .DropdownMenuContent;
    ({}.DropdownMenuContent);
    ({}.DropdownMenuContent);
    __VLS_components.DropdownMenuContent;
    __VLS_components.DropdownMenuContent;
    // @ts-ignore
    [DropdownMenuContent, DropdownMenuContent,];
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{ class: ("w-56 ml-3 xl:ml-0") }, }));
    const __VLS_19 = __VLS_18({ ...{ class: ("w-56 ml-3 xl:ml-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    ({}({ ...{ class: ("w-56 ml-3 xl:ml-0") }, }));
    const __VLS_22 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19));
    // @ts-ignore
    [ScrollArea, ScrollArea,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(ScrollArea, new ScrollArea({ ...{ class: ("h-[500px]") }, }));
    const __VLS_24 = __VLS_23({ ...{ class: ("h-[500px]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    ({}({ ...{ class: ("h-[500px]") }, }));
    const __VLS_27 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ScrollArea, __VLS_24));
    for (const [country] of __VLS_getVForSourceType((__VLS_ctx.countries))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((country.code)), });
        // @ts-ignore
        const __VLS_28 = {}
            .DropdownMenuItem;
        ({}.DropdownMenuItem);
        ({}.DropdownMenuItem);
        __VLS_components.DropdownMenuItem;
        __VLS_components.DropdownMenuItem;
        // @ts-ignore
        [DropdownMenuItem, DropdownMenuItem,];
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{ 'onClick': {} }, ...{ class: ("flex items-center gap-2 px-4 my-3") }, }));
        const __VLS_30 = __VLS_29({ ...{ 'onClick': {} }, ...{ class: ("flex items-center gap-2 px-4 my-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_29));
        ({}({ ...{ 'onClick': {} }, ...{ class: ("flex items-center gap-2 px-4 my-3") }, }));
        let __VLS_34;
        const __VLS_35 = {
            onClick: (...[$event]) => {
                __VLS_ctx.selectCountry(country.code);
                // @ts-ignore
                [countries, selectCountry,];
            }
        };
        const __VLS_33 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30));
        let __VLS_31;
        let __VLS_32;
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`https://flagsapi.com/${country.code.toUpperCase()}/flat/24.png`)), alt: ("Country flag"), ...{ class: ("w-5 h-5") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (country.name);
        __VLS_nonNullable(__VLS_33.slots).default;
    }
    __VLS_nonNullable(__VLS_27.slots).default;
    __VLS_nonNullable(__VLS_22.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['w-56'];
        __VLS_styleScopedClasses['ml-3'];
        __VLS_styleScopedClasses['xl:ml-0'];
        __VLS_styleScopedClasses['h-[500px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['my-3'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['h-5'];
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
                DropdownMenu: DropdownMenu,
                DropdownMenuContent: DropdownMenuContent,
                DropdownMenuTrigger: DropdownMenuTrigger,
                DropdownMenuItem: DropdownMenuItem,
                ScrollArea: ScrollArea,
                countries: countries,
                selectedCountry: selectedCountry,
                selectCountry: selectCountry,
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
