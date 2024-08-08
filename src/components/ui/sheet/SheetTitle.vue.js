import { computed } from 'vue';
import { DialogTitle } from 'radix-vue';
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
        .DialogTitle;
    ({}.DialogTitle);
    ({}.DialogTitle);
    __VLS_components.DialogTitle;
    __VLS_components.DialogTitle;
    // @ts-ignore
    [DialogTitle, DialogTitle,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ((__VLS_ctx.cn('text-lg font-semibold text-foreground', props.class))) }, ...(__VLS_ctx.delegatedProps), }));
    const __VLS_2 = __VLS_1({ ...{ class: ((__VLS_ctx.cn('text-lg font-semibold text-foreground', props.class))) }, ...(__VLS_ctx.delegatedProps), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ((__VLS_ctx.cn('text-lg font-semibold text-foreground', props.class))) }, ...(__VLS_ctx.delegatedProps), }));
    __VLS_styleScopedClasses = (cn('text-lg font-semibold text-foreground', props.class));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    var __VLS_6 = {};
    // @ts-ignore
    [cn, delegatedProps,];
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
                DialogTitle: DialogTitle,
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
