import { Primitive } from 'radix-vue';
import { buttonVariants } from '.';
import { cn } from '../../../lib/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    as: 'button',
});
const __VLS_withDefaultsArg = (function (t) { return t; })({
    as: 'button',
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
        .Primitive;
    ({}.Primitive);
    ({}.Primitive);
    __VLS_components.Primitive;
    __VLS_components.Primitive;
    // @ts-ignore
    [Primitive, Primitive,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ as: ((__VLS_ctx.as)), asChild: ((__VLS_ctx.asChild)), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.buttonVariants({ variant: __VLS_ctx.variant, size: __VLS_ctx.size }), props.class))) }, }));
    const __VLS_2 = __VLS_1({ as: ((__VLS_ctx.as)), asChild: ((__VLS_ctx.asChild)), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.buttonVariants({ variant: __VLS_ctx.variant, size: __VLS_ctx.size }), props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ as: ((__VLS_ctx.as)), asChild: ((__VLS_ctx.asChild)), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.buttonVariants({ variant: __VLS_ctx.variant, size: __VLS_ctx.size }), props.class))) }, }));
    __VLS_styleScopedClasses = (cn(buttonVariants({ variant, size }), props.class));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    var __VLS_6 = {};
    // @ts-ignore
    [as, asChild, cn, buttonVariants, variant, size,];
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
                Primitive: Primitive,
                buttonVariants: buttonVariants,
                cn: cn,
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
