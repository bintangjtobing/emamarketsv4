import { computed } from 'vue';
import { DropdownMenuLabel, useForwardProps } from 'radix-vue';
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
        .DropdownMenuLabel;
    ({}.DropdownMenuLabel);
    ({}.DropdownMenuLabel);
    __VLS_components.DropdownMenuLabel;
    __VLS_components.DropdownMenuLabel;
    // @ts-ignore
    [DropdownMenuLabel, DropdownMenuLabel,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn('px-2 py-1.5 text-sm font-semibold', __VLS_ctx.inset && 'pl-8', props.class))) }, }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn('px-2 py-1.5 text-sm font-semibold', __VLS_ctx.inset && 'pl-8', props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.forwardedProps), ...{ class: ((__VLS_ctx.cn('px-2 py-1.5 text-sm font-semibold', __VLS_ctx.inset && 'pl-8', props.class))) }, }));
    __VLS_styleScopedClasses = (cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', props.class));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    var __VLS_6 = {};
    // @ts-ignore
    [forwardedProps, cn, inset,];
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                DropdownMenuLabel: DropdownMenuLabel,
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
