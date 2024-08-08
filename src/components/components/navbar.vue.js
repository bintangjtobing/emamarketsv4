import dropdownLangguage from './navbar/dropdownLangguage.vue';
import Login from './navbar/login.vue';
import Register from './navbar/register.vue';
import sheetNavMobile from './navbar/sheetNavMobile.vue';
import Navigation from './navbar/navigation.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("py-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container flex items-center justify-between max-w-screen-xl gap-3 px-4 py-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-between gap-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("hidden h-10 xl:block") }, src: ("/asset/Logo-01.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("/"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ ...{ class: ("block h-10 xl:hidden") }, src: ("/asset/Logo_04.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hidden xl:flex") }, });
    // @ts-ignore
    [Navigation,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Navigation, new Navigation({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Navigation, __VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("items-center hidden xl:flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("20"), height: ("20"), viewBox: ("0 0 15 15"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"), fill: ("currentColor"), "fill-rule": ("evenodd"), "clip-rule": ("evenodd"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    [dropdownLangguage,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(dropdownLangguage, new dropdownLangguage({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({}));
    const __VLS_9 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(dropdownLangguage, __VLS_6));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-x-2") }, });
    // @ts-ignore
    [Login,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(Login, new Login({}));
    const __VLS_11 = __VLS_10({}, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({}));
    const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Login, __VLS_11));
    // @ts-ignore
    [Register,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(Register, new Register({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({}));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Register, __VLS_16));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("xl:hidden") }, });
    // @ts-ignore
    [sheetNavMobile,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(sheetNavMobile, new sheetNavMobile({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    ({}({}));
    const __VLS_24 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(sheetNavMobile, __VLS_21));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['py-5'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['max-w-screen-xl'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['hidden'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['xl:block'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['h-10'];
        __VLS_styleScopedClasses['xl:hidden'];
        __VLS_styleScopedClasses['hidden'];
        __VLS_styleScopedClasses['xl:flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['hidden'];
        __VLS_styleScopedClasses['xl:flex'];
        __VLS_styleScopedClasses['space-x-2'];
        __VLS_styleScopedClasses['xl:hidden'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                dropdownLangguage: dropdownLangguage,
                Login: Login,
                Register: Register,
                sheetNavMobile: sheetNavMobile,
                Navigation: Navigation,
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
