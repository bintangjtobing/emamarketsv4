import { computed } from 'vue';
import { NavigationMenuTrigger, useForwardProps, } from 'radix-vue';
import { ChevronDown } from 'lucide-vue-next';
import { navigationMenuTriggerStyle } from '.';
import { cn } from '../../../lib/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const forwardedProps = useForwardProps(delegatedProps);
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
        .NavigationMenuTrigger;
    ({}.NavigationMenuTrigger);
    ({}.NavigationMenuTrigger);
    __VLS_components.NavigationMenuTrigger;
    __VLS_components.NavigationMenuTrigger;
    // @ts-ignore
    [NavigationMenuTrigger, NavigationMenuTrigger,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.navigationMenuTriggerStyle(), 'group', props.class))) }, }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.navigationMenuTriggerStyle(), 'group', props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.navigationMenuTriggerStyle(), 'group', props.class))) }, }));
    __VLS_styleScopedClasses = (cn(navigationMenuTriggerStyle(), 'group', props.class));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    var __VLS_6 = {};
    // @ts-ignore
    [forwardedProps, cn, navigationMenuTriggerStyle,];
    // @ts-ignore
    const __VLS_7 = {}
        .ChevronDown;
    ({}.ChevronDown);
    __VLS_components.ChevronDown;
    // @ts-ignore
    [ChevronDown,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ class: ("relative top-px ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180") }, "aria-hidden": ("true"), }));
    const __VLS_9 = __VLS_8({ ...{ class: ("relative top-px ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180") }, "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    ({}({ ...{ class: ("relative top-px ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180") }, "aria-hidden": ("true"), }));
    const __VLS_12 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9));
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['top-px'];
        __VLS_styleScopedClasses['ml-1'];
        __VLS_styleScopedClasses['h-3'];
        __VLS_styleScopedClasses['w-3'];
        __VLS_styleScopedClasses['transition'];
        __VLS_styleScopedClasses['duration-200'];
        __VLS_styleScopedClasses['group-data-[state=open]:rotate-180'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                NavigationMenuTrigger: NavigationMenuTrigger,
                ChevronDown: ChevronDown,
                navigationMenuTriggerStyle: navigationMenuTriggerStyle,
                cn: cn,
                forwardedProps: forwardedProps,
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
