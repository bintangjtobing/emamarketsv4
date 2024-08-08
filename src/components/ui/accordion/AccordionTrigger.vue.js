import { computed } from 'vue';
import { AccordionHeader, AccordionTrigger, } from 'radix-vue';
import { ChevronDown } from 'lucide-vue-next';
import { cn } from '../../../lib/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
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
        .AccordionHeader;
    ({}.AccordionHeader);
    ({}.AccordionHeader);
    __VLS_components.AccordionHeader;
    __VLS_components.AccordionHeader;
    // @ts-ignore
    [AccordionHeader, AccordionHeader,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("flex") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("flex") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("flex") }, }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .AccordionTrigger;
    ({}.AccordionTrigger);
    ({}.AccordionTrigger);
    __VLS_components.AccordionTrigger;
    __VLS_components.AccordionTrigger;
    // @ts-ignore
    [AccordionTrigger, AccordionTrigger,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...(__VLS_ctx.delegatedProps), ...{ class: ((__VLS_ctx.cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', props.class))) }, }));
    const __VLS_8 = __VLS_7({ ...(__VLS_ctx.delegatedProps), ...{ class: ((__VLS_ctx.cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...(__VLS_ctx.delegatedProps), ...{ class: ((__VLS_ctx.cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', props.class))) }, }));
    __VLS_styleScopedClasses = (cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', props.class));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    var __VLS_12 = {};
    // @ts-ignore
    [delegatedProps, cn,];
    var __VLS_13 = {};
    // @ts-ignore
    const __VLS_14 = {}
        .ChevronDown;
    ({}.ChevronDown);
    __VLS_components.ChevronDown;
    // @ts-ignore
    [ChevronDown,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ ...{ class: ("h-4 w-4 shrink-0 transition-transform duration-200") }, }));
    const __VLS_16 = __VLS_15({ ...{ class: ("h-4 w-4 shrink-0 transition-transform duration-200") }, }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ ...{ class: ("h-4 w-4 shrink-0 transition-transform duration-200") }, }));
    const __VLS_19 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16));
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_nonNullable(__VLS_11.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['w-4'];
        __VLS_styleScopedClasses['shrink-0'];
        __VLS_styleScopedClasses['transition-transform'];
        __VLS_styleScopedClasses['duration-200'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                AccordionHeader: AccordionHeader,
                AccordionTrigger: AccordionTrigger,
                ChevronDown: ChevronDown,
                cn: cn,
                delegatedProps: delegatedProps,
            };
        },
        props: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
export default {};
;
