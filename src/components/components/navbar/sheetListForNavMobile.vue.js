import { computed } from 'vue';
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { componentsTraders, componentsCompany, componentsPartner, componentsHelpCenter, componentsEMACenter } from './dataNavbar';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    title: String,
});
const data = computed(() => {
    switch (props.title) {
        case 'Traders':
            return componentsTraders;
        case 'Partners':
            return componentsPartner;
        case 'Company':
            return componentsCompany;
        case 'Promotion':
            return componentsCompany;
        case 'EMA center':
            return componentsEMACenter;
        case 'Help center':
            return componentsHelpCenter;
        default:
            return [];
    }
});
function isComponentWithList(item) {
    return 'listOfItem' in item;
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        title: String,
    },
});
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("flex items-center justify-between w-full") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("flex items-center justify-between w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("flex items-center justify-between w-full") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-base") }, });
    (__VLS_ctx.title);
    // @ts-ignore
    [title,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("20"), height: ("20"), viewBox: ("0 0 15 15"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"), fill: ("currentColor"), "fill-rule": ("evenodd"), "clip-rule": ("evenodd"), });
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_12 = {}
        .SheetContent;
    ({}.SheetContent);
    ({}.SheetContent);
    __VLS_components.SheetContent;
    __VLS_components.SheetContent;
    // @ts-ignore
    [SheetContent, SheetContent,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("w-full") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ class: ("w-full") }, }));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    // @ts-ignore
    const __VLS_18 = {}
        .Accordion;
    ({}.Accordion);
    ({}.Accordion);
    __VLS_components.Accordion;
    __VLS_components.Accordion;
    // @ts-ignore
    [Accordion, Accordion,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("single"), ...{ class: ("w-full") }, collapsible: (true), }));
    const __VLS_20 = __VLS_19({ type: ("single"), ...{ class: ("w-full") }, collapsible: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ type: ("single"), ...{ class: ("w-full") }, collapsible: (true), }));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.data))) {
        // @ts-ignore
        const __VLS_24 = {}
            .AccordionItem;
        ({}.AccordionItem);
        ({}.AccordionItem);
        __VLS_components.AccordionItem;
        __VLS_components.AccordionItem;
        // @ts-ignore
        [AccordionItem, AccordionItem,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("border-none") }, key: ((item.title)), value: ((item.title)), }));
        const __VLS_26 = __VLS_25({ ...{ class: ("border-none") }, key: ((item.title)), value: ((item.title)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ ...{ class: ("border-none") }, key: ((item.title)), value: ((item.title)), }));
        const __VLS_29 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26));
        if (__VLS_ctx.isComponentWithList(item)) {
            if (item.listOfItem.length > 0) {
                // @ts-ignore
                const __VLS_30 = {}
                    .AccordionTrigger;
                ({}.AccordionTrigger);
                ({}.AccordionTrigger);
                __VLS_components.AccordionTrigger;
                __VLS_components.AccordionTrigger;
                // @ts-ignore
                [AccordionTrigger, AccordionTrigger,];
                // @ts-ignore
                const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("text-left") }, }));
                const __VLS_32 = __VLS_31({ ...{ class: ("text-left") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
                ({}({ ...{ class: ("text-left") }, }));
                const __VLS_35 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32));
                (item.title);
                // @ts-ignore
                [data, isComponentWithList,];
                __VLS_nonNullable(__VLS_35.slots).default;
                // @ts-ignore
                const __VLS_36 = {}
                    .AccordionContent;
                ({}.AccordionContent);
                ({}.AccordionContent);
                __VLS_components.AccordionContent;
                __VLS_components.AccordionContent;
                // @ts-ignore
                [AccordionContent, AccordionContent,];
                // @ts-ignore
                const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
                const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
                ({}({}));
                const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38));
                __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("mt-2 space-y-2 text-slate-700 ml-2") }, });
                for (const [subItem] of __VLS_getVForSourceType((item.listOfItem))) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((subItem.url)), });
                    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((subItem.url)), });
                    (subItem.title);
                }
                __VLS_nonNullable(__VLS_41.slots).default;
            }
            else {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-left py-2") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((item.url)), });
                (item.title);
            }
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-left py-2") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((item.url)), });
            (item.title);
        }
        __VLS_nonNullable(__VLS_29.slots).default;
    }
    __VLS_nonNullable(__VLS_23.slots).default;
    __VLS_nonNullable(__VLS_17.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-between'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['border-none'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['space-y-2'];
        __VLS_styleScopedClasses['text-slate-700'];
        __VLS_styleScopedClasses['ml-2'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['text-left'];
        __VLS_styleScopedClasses['py-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Sheet: Sheet,
                SheetContent: SheetContent,
                SheetTrigger: SheetTrigger,
                Accordion: Accordion,
                AccordionContent: AccordionContent,
                AccordionItem: AccordionItem,
                AccordionTrigger: AccordionTrigger,
                data: data,
                isComponentWithList: isComponentWithList,
            };
        },
        props: {
            title: String,
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        title: String,
    },
});
;
