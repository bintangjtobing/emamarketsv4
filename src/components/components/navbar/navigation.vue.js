import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../../ui/navigation-menu';
import { componentsTraders, componentsPartner, componentsCompany, componentsEMACenter, componentsHelpCenter } from './dataNavbar';
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
        .NavigationMenu;
    ({}.NavigationMenu);
    ({}.NavigationMenu);
    __VLS_components.NavigationMenu;
    __VLS_components.NavigationMenu;
    // @ts-ignore
    [NavigationMenu, NavigationMenu,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .NavigationMenuList;
    ({}.NavigationMenuList);
    ({}.NavigationMenuList);
    __VLS_components.NavigationMenuList;
    __VLS_components.NavigationMenuList;
    // @ts-ignore
    [NavigationMenuList, NavigationMenuList,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("grid grid-cols-3 gap-2 mt-3 xl:mt-0 xl:flex") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("grid grid-cols-3 gap-2 mt-3 xl:mt-0 xl:flex") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("grid grid-cols-3 gap-2 mt-3 xl:mt-0 xl:flex") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    const __VLS_12 = {}
        .NavigationMenuItem;
    ({}.NavigationMenuItem);
    ({}.NavigationMenuItem);
    __VLS_components.NavigationMenuItem;
    __VLS_components.NavigationMenuItem;
    // @ts-ignore
    [NavigationMenuItem, NavigationMenuItem,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    // @ts-ignore
    const __VLS_18 = {}
        .NavigationMenuTrigger;
    ({}.NavigationMenuTrigger);
    ({}.NavigationMenuTrigger);
    __VLS_components.NavigationMenuTrigger;
    __VLS_components.NavigationMenuTrigger;
    // @ts-ignore
    [NavigationMenuTrigger, NavigationMenuTrigger,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_nonNullable(__VLS_23.slots).default;
    // @ts-ignore
    const __VLS_24 = {}
        .NavigationMenuContent;
    ({}.NavigationMenuContent);
    ({}.NavigationMenuContent);
    __VLS_components.NavigationMenuContent;
    __VLS_components.NavigationMenuContent;
    // @ts-ignore
    [NavigationMenuContent, NavigationMenuContent,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("overflow-auto") }, }));
    const __VLS_26 = __VLS_25({ ...{ class: ("overflow-auto") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ ...{ class: ("overflow-auto") }, }));
    const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[350px] p-5 md:w-[500px] xl:w-[800px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("grid grid-cols-1 lg:grid-cols-2 w-full gap-5") }, });
    for (const [component] of __VLS_getVForSourceType((__VLS_ctx.componentsTraders))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((component.title)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-slate-500 text-sm") }, });
        (component.title);
        // @ts-ignore
        [componentsTraders,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ((component.listOfItem.length > 5 ? 'grid grid-cols-2 space-y-1 text-sm mt-2' : 'mt-2 space-y-1 text-sm text-slate-700')) }, });
        __VLS_styleScopedClasses = (component.listOfItem.length > 5 ? 'grid grid-cols-2 space-y-1 text-sm mt-2' : 'mt-2 space-y-1 text-sm text-slate-700');
        for (const [item] of __VLS_getVForSourceType((component.listOfItem))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((item.url)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((item.url)), });
            (item.title);
        }
    }
    __VLS_nonNullable(__VLS_29.slots).default;
    __VLS_nonNullable(__VLS_17.slots).default;
    // @ts-ignore
    const __VLS_30 = {}
        .NavigationMenuItem;
    ({}.NavigationMenuItem);
    ({}.NavigationMenuItem);
    __VLS_components.NavigationMenuItem;
    __VLS_components.NavigationMenuItem;
    // @ts-ignore
    [NavigationMenuItem, NavigationMenuItem,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({}));
    const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
    // @ts-ignore
    const __VLS_36 = {}
        .NavigationMenuTrigger;
    ({}.NavigationMenuTrigger);
    ({}.NavigationMenuTrigger);
    __VLS_components.NavigationMenuTrigger;
    __VLS_components.NavigationMenuTrigger;
    // @ts-ignore
    [NavigationMenuTrigger, NavigationMenuTrigger,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({}));
    const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
    __VLS_nonNullable(__VLS_41.slots).default;
    // @ts-ignore
    const __VLS_42 = {}
        .NavigationMenuContent;
    ({}.NavigationMenuContent);
    ({}.NavigationMenuContent);
    __VLS_components.NavigationMenuContent;
    __VLS_components.NavigationMenuContent;
    // @ts-ignore
    [NavigationMenuContent, NavigationMenuContent,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({}));
    const __VLS_47 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[350px] md:w-[600px] lg:flex p-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("grid grid-cols-1 lg:grid-cols-3 w-full gap-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("lg:col-span-2 p-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-slate-500 text-sm") }, });
    (__VLS_ctx.componentsPartner[0].title);
    // @ts-ignore
    [componentsPartner,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("mt-2 space-y-2 text-sm text-slate-700") }, });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.componentsPartner[0].listOfItem))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((item.url)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((item.url)), });
        (item.title);
        // @ts-ignore
        [componentsPartner,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("w-[400px] gap-3") }, });
    for (const [component, index] of __VLS_getVForSourceType((__VLS_ctx.componentsPartner.slice(1)))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((component.title)), });
        // @ts-ignore
        const __VLS_48 = {}
            .NavigationMenuLink;
        ({}.NavigationMenuLink);
        ({}.NavigationMenuLink);
        __VLS_components.NavigationMenuLink;
        __VLS_components.NavigationMenuLink;
        // @ts-ignore
        [NavigationMenuLink, NavigationMenuLink,];
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ asChild: (true), }));
        const __VLS_50 = __VLS_49({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        ({}({ asChild: (true), }));
        const __VLS_53 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50));
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((component.url)), ...{ class: ("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-sm font-medium leading-none") }, });
        (component.title);
        // @ts-ignore
        [componentsPartner,];
        __VLS_nonNullable(__VLS_53.slots).default;
    }
    __VLS_nonNullable(__VLS_47.slots).default;
    __VLS_nonNullable(__VLS_35.slots).default;
    // @ts-ignore
    const __VLS_54 = {}
        .NavigationMenuItem;
    ({}.NavigationMenuItem);
    ({}.NavigationMenuItem);
    __VLS_components.NavigationMenuItem;
    __VLS_components.NavigationMenuItem;
    // @ts-ignore
    [NavigationMenuItem, NavigationMenuItem,];
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
    const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({}));
    const __VLS_59 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56));
    // @ts-ignore
    const __VLS_60 = {}
        .NavigationMenuTrigger;
    ({}.NavigationMenuTrigger);
    ({}.NavigationMenuTrigger);
    __VLS_components.NavigationMenuTrigger;
    __VLS_components.NavigationMenuTrigger;
    // @ts-ignore
    [NavigationMenuTrigger, NavigationMenuTrigger,];
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({}));
    const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}({}));
    const __VLS_65 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62));
    __VLS_nonNullable(__VLS_65.slots).default;
    // @ts-ignore
    const __VLS_66 = {}
        .NavigationMenuContent;
    ({}.NavigationMenuContent);
    ({}.NavigationMenuContent);
    __VLS_components.NavigationMenuContent;
    __VLS_components.NavigationMenuContent;
    // @ts-ignore
    [NavigationMenuContent, NavigationMenuContent,];
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({}));
    const __VLS_68 = __VLS_67({}, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({}));
    const __VLS_71 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[350px] lg:w-[550px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("p-4 grid grid-cols-2 lg:grid-cols-3 gap-3 text-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    // @ts-ignore
    const __VLS_72 = {}
        .NavigationMenuLink;
    ({}.NavigationMenuLink);
    ({}.NavigationMenuLink);
    __VLS_components.NavigationMenuLink;
    __VLS_components.NavigationMenuLink;
    // @ts-ignore
    [NavigationMenuLink, NavigationMenuLink,];
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ asChild: (true), }));
    const __VLS_74 = __VLS_73({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    ({}({ asChild: (true), }));
    const __VLS_77 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_nonNullable(__VLS_77.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    // @ts-ignore
    const __VLS_78 = {}
        .NavigationMenuLink;
    ({}.NavigationMenuLink);
    ({}.NavigationMenuLink);
    __VLS_components.NavigationMenuLink;
    __VLS_components.NavigationMenuLink;
    // @ts-ignore
    [NavigationMenuLink, NavigationMenuLink,];
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ asChild: (true), }));
    const __VLS_80 = __VLS_79({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    ({}({ asChild: (true), }));
    const __VLS_83 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_nonNullable(__VLS_83.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    // @ts-ignore
    const __VLS_84 = {}
        .NavigationMenuLink;
    ({}.NavigationMenuLink);
    ({}.NavigationMenuLink);
    __VLS_components.NavigationMenuLink;
    __VLS_components.NavigationMenuLink;
    // @ts-ignore
    [NavigationMenuLink, NavigationMenuLink,];
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ asChild: (true), }));
    const __VLS_86 = __VLS_85({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    ({}({ asChild: (true), }));
    const __VLS_89 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_nonNullable(__VLS_89.slots).default;
    __VLS_nonNullable(__VLS_71.slots).default;
    __VLS_nonNullable(__VLS_59.slots).default;
    // @ts-ignore
    const __VLS_90 = {}
        .NavigationMenuItem;
    ({}.NavigationMenuItem);
    ({}.NavigationMenuItem);
    __VLS_components.NavigationMenuItem;
    __VLS_components.NavigationMenuItem;
    // @ts-ignore
    [NavigationMenuItem, NavigationMenuItem,];
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({}));
    const __VLS_92 = __VLS_91({}, ...__VLS_functionalComponentArgsRest(__VLS_91));
    ({}({}));
    const __VLS_95 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92));
    // @ts-ignore
    const __VLS_96 = {}
        .NavigationMenuTrigger;
    ({}.NavigationMenuTrigger);
    ({}.NavigationMenuTrigger);
    __VLS_components.NavigationMenuTrigger;
    __VLS_components.NavigationMenuTrigger;
    // @ts-ignore
    [NavigationMenuTrigger, NavigationMenuTrigger,];
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({}));
    const __VLS_98 = __VLS_97({}, ...__VLS_functionalComponentArgsRest(__VLS_97));
    ({}({}));
    const __VLS_101 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98));
    __VLS_nonNullable(__VLS_101.slots).default;
    // @ts-ignore
    const __VLS_102 = {}
        .NavigationMenuContent;
    ({}.NavigationMenuContent);
    ({}.NavigationMenuContent);
    __VLS_components.NavigationMenuContent;
    __VLS_components.NavigationMenuContent;
    // @ts-ignore
    [NavigationMenuContent, NavigationMenuContent,];
    // @ts-ignore
    const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({}));
    const __VLS_104 = __VLS_103({}, ...__VLS_functionalComponentArgsRest(__VLS_103));
    ({}({}));
    const __VLS_107 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[350px] lg:w-[550px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("p-4 grid grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5 text-sm") }, });
    for (const [component] of __VLS_getVForSourceType((__VLS_ctx.componentsCompany))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((component.url)), });
        // @ts-ignore
        const __VLS_108 = {}
            .NavigationMenuLink;
        ({}.NavigationMenuLink);
        ({}.NavigationMenuLink);
        __VLS_components.NavigationMenuLink;
        __VLS_components.NavigationMenuLink;
        // @ts-ignore
        [NavigationMenuLink, NavigationMenuLink,];
        // @ts-ignore
        const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ asChild: (true), }));
        const __VLS_110 = __VLS_109({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
        ({}({ asChild: (true), }));
        const __VLS_113 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110));
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((component.url)), });
        (component.title);
        // @ts-ignore
        [componentsCompany,];
        __VLS_nonNullable(__VLS_113.slots).default;
    }
    __VLS_nonNullable(__VLS_107.slots).default;
    __VLS_nonNullable(__VLS_95.slots).default;
    // @ts-ignore
    const __VLS_114 = {}
        .NavigationMenuItem;
    ({}.NavigationMenuItem);
    ({}.NavigationMenuItem);
    __VLS_components.NavigationMenuItem;
    __VLS_components.NavigationMenuItem;
    // @ts-ignore
    [NavigationMenuItem, NavigationMenuItem,];
    // @ts-ignore
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({}));
    const __VLS_116 = __VLS_115({}, ...__VLS_functionalComponentArgsRest(__VLS_115));
    ({}({}));
    const __VLS_119 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116));
    // @ts-ignore
    const __VLS_120 = {}
        .NavigationMenuTrigger;
    ({}.NavigationMenuTrigger);
    ({}.NavigationMenuTrigger);
    __VLS_components.NavigationMenuTrigger;
    __VLS_components.NavigationMenuTrigger;
    // @ts-ignore
    [NavigationMenuTrigger, NavigationMenuTrigger,];
    // @ts-ignore
    const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({}));
    const __VLS_122 = __VLS_121({}, ...__VLS_functionalComponentArgsRest(__VLS_121));
    ({}({}));
    const __VLS_125 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122));
    __VLS_nonNullable(__VLS_125.slots).default;
    // @ts-ignore
    const __VLS_126 = {}
        .NavigationMenuContent;
    ({}.NavigationMenuContent);
    ({}.NavigationMenuContent);
    __VLS_components.NavigationMenuContent;
    __VLS_components.NavigationMenuContent;
    // @ts-ignore
    [NavigationMenuContent, NavigationMenuContent,];
    // @ts-ignore
    const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({}));
    const __VLS_128 = __VLS_127({}, ...__VLS_functionalComponentArgsRest(__VLS_127));
    ({}({}));
    const __VLS_131 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[350px] lg:w-[400px] p-5 md:w-[500px] xl:w-[600px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("grid lg:grid-cols-2 w-full gap-5") }, });
    for (const [component] of __VLS_getVForSourceType((__VLS_ctx.componentsEMACenter))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((component.title)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-slate-500 text-sm") }, });
        (component.title);
        // @ts-ignore
        [componentsEMACenter,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ((component.listOfItem.length > 5 ? 'grid grid-cols-2 space-y-1 text-sm mt-2' : 'mt-2 space-y-1 text-sm text-slate-700')) }, });
        __VLS_styleScopedClasses = (component.listOfItem.length > 5 ? 'grid grid-cols-2 space-y-1 text-sm mt-2' : 'mt-2 space-y-1 text-sm text-slate-700');
        for (const [item] of __VLS_getVForSourceType((component.listOfItem))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((item.url)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((item.url)), });
            (item.title);
        }
    }
    __VLS_nonNullable(__VLS_131.slots).default;
    __VLS_nonNullable(__VLS_119.slots).default;
    // @ts-ignore
    const __VLS_132 = {}
        .NavigationMenuItem;
    ({}.NavigationMenuItem);
    ({}.NavigationMenuItem);
    __VLS_components.NavigationMenuItem;
    __VLS_components.NavigationMenuItem;
    // @ts-ignore
    [NavigationMenuItem, NavigationMenuItem,];
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({}));
    const __VLS_134 = __VLS_133({}, ...__VLS_functionalComponentArgsRest(__VLS_133));
    ({}({}));
    const __VLS_137 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134));
    // @ts-ignore
    const __VLS_138 = {}
        .NavigationMenuTrigger;
    ({}.NavigationMenuTrigger);
    ({}.NavigationMenuTrigger);
    __VLS_components.NavigationMenuTrigger;
    __VLS_components.NavigationMenuTrigger;
    // @ts-ignore
    [NavigationMenuTrigger, NavigationMenuTrigger,];
    // @ts-ignore
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({}));
    const __VLS_140 = __VLS_139({}, ...__VLS_functionalComponentArgsRest(__VLS_139));
    ({}({}));
    const __VLS_143 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140));
    __VLS_nonNullable(__VLS_143.slots).default;
    // @ts-ignore
    const __VLS_144 = {}
        .NavigationMenuContent;
    ({}.NavigationMenuContent);
    ({}.NavigationMenuContent);
    __VLS_components.NavigationMenuContent;
    __VLS_components.NavigationMenuContent;
    // @ts-ignore
    [NavigationMenuContent, NavigationMenuContent,];
    // @ts-ignore
    const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({}));
    const __VLS_146 = __VLS_145({}, ...__VLS_functionalComponentArgsRest(__VLS_145));
    ({}({}));
    const __VLS_149 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[350px] lg:w-[550px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("p-4 grid grid-cols-2 md:grid-cols-3 gap-3 gap-y-5 text-sm") }, });
    for (const [component] of __VLS_getVForSourceType((__VLS_ctx.componentsHelpCenter))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((component.url)), });
        // @ts-ignore
        const __VLS_150 = {}
            .NavigationMenuLink;
        ({}.NavigationMenuLink);
        ({}.NavigationMenuLink);
        __VLS_components.NavigationMenuLink;
        __VLS_components.NavigationMenuLink;
        // @ts-ignore
        [NavigationMenuLink, NavigationMenuLink,];
        // @ts-ignore
        const __VLS_151 = __VLS_asFunctionalComponent(__VLS_150, new __VLS_150({ asChild: (true), }));
        const __VLS_152 = __VLS_151({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
        ({}({ asChild: (true), }));
        const __VLS_155 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152));
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((component.url)), });
        (component.title);
        // @ts-ignore
        [componentsHelpCenter,];
        __VLS_nonNullable(__VLS_155.slots).default;
    }
    __VLS_nonNullable(__VLS_149.slots).default;
    __VLS_nonNullable(__VLS_137.slots).default;
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-3'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['xl:mt-0'];
        __VLS_styleScopedClasses['xl:flex'];
        __VLS_styleScopedClasses['overflow-auto'];
        __VLS_styleScopedClasses['w-[350px]'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['md:w-[500px]'];
        __VLS_styleScopedClasses['xl:w-[800px]'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-1'];
        __VLS_styleScopedClasses['lg:grid-cols-2'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['gap-5'];
        __VLS_styleScopedClasses['text-slate-500'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['w-[350px]'];
        __VLS_styleScopedClasses['md:w-[600px]'];
        __VLS_styleScopedClasses['lg:flex'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-1'];
        __VLS_styleScopedClasses['lg:grid-cols-3'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['gap-5'];
        __VLS_styleScopedClasses['lg:col-span-2'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['text-slate-500'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['space-y-2'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-slate-700'];
        __VLS_styleScopedClasses['w-[400px]'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['select-none'];
        __VLS_styleScopedClasses['space-y-1'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['p-3'];
        __VLS_styleScopedClasses['leading-none'];
        __VLS_styleScopedClasses['no-underline'];
        __VLS_styleScopedClasses['outline-none'];
        __VLS_styleScopedClasses['transition-colors'];
        __VLS_styleScopedClasses['hover:bg-accent'];
        __VLS_styleScopedClasses['hover:text-accent-foreground'];
        __VLS_styleScopedClasses['focus:bg-accent'];
        __VLS_styleScopedClasses['focus:text-accent-foreground'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['font-medium'];
        __VLS_styleScopedClasses['leading-none'];
        __VLS_styleScopedClasses['w-[350px]'];
        __VLS_styleScopedClasses['lg:w-[550px]'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['lg:grid-cols-3'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['w-[350px]'];
        __VLS_styleScopedClasses['lg:w-[550px]'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['lg:grid-cols-3'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['gap-y-5'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['w-[350px]'];
        __VLS_styleScopedClasses['lg:w-[400px]'];
        __VLS_styleScopedClasses['p-5'];
        __VLS_styleScopedClasses['md:w-[500px]'];
        __VLS_styleScopedClasses['xl:w-[600px]'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['lg:grid-cols-2'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['gap-5'];
        __VLS_styleScopedClasses['text-slate-500'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['w-[350px]'];
        __VLS_styleScopedClasses['lg:w-[550px]'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['md:grid-cols-3'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['gap-y-5'];
        __VLS_styleScopedClasses['text-sm'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                NavigationMenu: NavigationMenu,
                NavigationMenuContent: NavigationMenuContent,
                NavigationMenuItem: NavigationMenuItem,
                NavigationMenuLink: NavigationMenuLink,
                NavigationMenuList: NavigationMenuList,
                NavigationMenuTrigger: NavigationMenuTrigger,
                componentsTraders: componentsTraders,
                componentsPartner: componentsPartner,
                componentsCompany: componentsCompany,
                componentsEMACenter: componentsEMACenter,
                componentsHelpCenter: componentsHelpCenter,
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
