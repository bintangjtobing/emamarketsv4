import { computed } from 'vue';
import { DropdownMenuSubTrigger, useForwardProps, } from 'radix-vue';
import { ChevronRight } from 'lucide-vue-next';
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
        .DropdownMenuSubTrigger;
    ({}.DropdownMenuSubTrigger);
    ({}.DropdownMenuSubTrigger);
    __VLS_components.DropdownMenuSubTrigger;
    __VLS_components.DropdownMenuSubTrigger;
    // @ts-ignore
    [DropdownMenuSubTrigger, DropdownMenuSubTrigger,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', props.class))) }, }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', props.class))) }, }));
    __VLS_styleScopedClasses = (cn('flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent', props.class));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    var __VLS_6 = {};
    // @ts-ignore
    [forwardedProps, cn,];
    // @ts-ignore
    const __VLS_7 = {}
        .ChevronRight;
    ({}.ChevronRight);
    __VLS_components.ChevronRight;
    // @ts-ignore
    [ChevronRight,];
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ class: ("ml-auto h-4 w-4") }, }));
    const __VLS_9 = __VLS_8({ ...{ class: ("ml-auto h-4 w-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    ({}({ ...{ class: ("ml-auto h-4 w-4") }, }));
    const __VLS_12 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_7, __VLS_9));
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['ml-auto'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['w-4'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                DropdownMenuSubTrigger: DropdownMenuSubTrigger,
                ChevronRight: ChevronRight,
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
