import Button from '../../ui/button/Button.vue';
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet';
import sheetListForNavMobile from './sheetListForNavMobile.vue';
import login from './login.vue';
import register from './register.vue';
import dropdownLangguage from './dropdownLangguage.vue';
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
    // @ts-ignore
    const __VLS_0 = {}
        .Sheet;
    ({}.Sheet);
    ({}.Sheet);
    __VLS_components.Sheet;
    __VLS_components.Sheet;
    // @ts-ignore
    [Sheet, Sheet,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .SheetTrigger;
    ({}.SheetTrigger);
    ({}.SheetTrigger);
    __VLS_components.SheetTrigger;
    __VLS_components.SheetTrigger;
    // @ts-ignore
    [SheetTrigger, SheetTrigger,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ asChild: (true), }));
    const __VLS_8 = __VLS_7({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ asChild: (true), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(Button, new Button({ variant: ("ghost"), }));
    const __VLS_13 = __VLS_12({ variant: ("ghost"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({ variant: ("ghost"), }));
    const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Button, __VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("30"), height: ("30"), viewBox: ("0 0 15 15"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"), fill: ("currentColor"), "fill-rule": ("evenodd"), "clip-rule": ("evenodd"), });
    __VLS_nonNullable(__VLS_16.slots).default;
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_17 = {}
        .SheetContent;
    ({}.SheetContent);
    ({}.SheetContent);
    __VLS_components.SheetContent;
    __VLS_components.SheetContent;
    // @ts-ignore
    [SheetContent, SheetContent,];
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ ...{ class: ("w-full md:w-fit") }, }));
    const __VLS_19 = __VLS_18({ ...{ class: ("w-full md:w-fit") }, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    ({}({ ...{ class: ("w-full md:w-fit") }, }));
    const __VLS_22 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute top-1 left-2") }, });
    // @ts-ignore
    [dropdownLangguage,];
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(dropdownLangguage, new dropdownLangguage({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
    ({}({}));
    const __VLS_27 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(dropdownLangguage, __VLS_24));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("mt-8 space-y-3 text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("") }, });
    // @ts-ignore
    [sheetListForNavMobile,];
    // @ts-ignore
    const __VLS_28 = __VLS_asFunctionalComponent(sheetListForNavMobile, new sheetListForNavMobile({ title: ("Traders"), }));
    const __VLS_29 = __VLS_28({ title: ("Traders"), }, ...__VLS_functionalComponentArgsRest(__VLS_28));
    ({}({ title: ("Traders"), }));
    const __VLS_32 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(sheetListForNavMobile, __VLS_29));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("") }, });
    // @ts-ignore
    [sheetListForNavMobile,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(sheetListForNavMobile, new sheetListForNavMobile({ title: ("Partners"), }));
    const __VLS_34 = __VLS_33({ title: ("Partners"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ title: ("Partners"), }));
    const __VLS_37 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(sheetListForNavMobile, __VLS_34));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("") }, });
    // @ts-ignore
    [sheetListForNavMobile,];
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(sheetListForNavMobile, new sheetListForNavMobile({ title: ("Company"), }));
    const __VLS_39 = __VLS_38({ title: ("Company"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    ({}({ title: ("Company"), }));
    const __VLS_42 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(sheetListForNavMobile, __VLS_39));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("") }, });
    // @ts-ignore
    [sheetListForNavMobile,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(sheetListForNavMobile, new sheetListForNavMobile({ title: ("EMA center"), }));
    const __VLS_44 = __VLS_43({ title: ("EMA center"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ title: ("EMA center"), }));
    const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(sheetListForNavMobile, __VLS_44));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("") }, });
    // @ts-ignore
    [sheetListForNavMobile,];
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(sheetListForNavMobile, new sheetListForNavMobile({ title: ("Help center"), }));
    const __VLS_49 = __VLS_48({ title: ("Help center"), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    ({}({ title: ("Help center"), }));
    const __VLS_52 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(sheetListForNavMobile, __VLS_49));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute bottom-10 w-full flex flex-col gap-3 left-0 px-10") }, });
    // @ts-ignore
    [login,];
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(login, new login({}));
    const __VLS_54 = __VLS_53({}, ...__VLS_functionalComponentArgsRest(__VLS_53));
    ({}({}));
    const __VLS_57 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(login, __VLS_54));
    // @ts-ignore
    [register,];
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(register, new register({}));
    const __VLS_59 = __VLS_58({}, ...__VLS_functionalComponentArgsRest(__VLS_58));
    ({}({}));
    const __VLS_62 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(register, __VLS_59));
    __VLS_nonNullable(__VLS_22.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['md:w-fit'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['top-1'];
        __VLS_styleScopedClasses['left-2'];
        __VLS_styleScopedClasses['mt-8'];
        __VLS_styleScopedClasses['space-y-3'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['bottom-10'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['left-0'];
        __VLS_styleScopedClasses['px-10'];
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
                Sheet: Sheet,
                SheetContent: SheetContent,
                SheetTrigger: SheetTrigger,
                sheetListForNavMobile: sheetListForNavMobile,
                login: login,
                register: register,
                dropdownLangguage: dropdownLangguage,
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
