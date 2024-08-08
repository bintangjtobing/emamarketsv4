import { computed } from 'vue';
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits, } from 'radix-vue';
import { X } from 'lucide-vue-next';
import { sheetVariants } from '.';
import { cn } from '../../../lib/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
defineOptions({
    inheritAttrs: false,
});
let __VLS_typeProps;
const props = defineProps();
const emits = defineEmits();
const delegatedProps = computed(() => {
    const { class: _, side, ...delegated } = props;
    return delegated;
});
const forwarded = useForwardPropsEmits(delegatedProps, emits);
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
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
        .DialogPortal;
    ({}.DialogPortal);
    ({}.DialogPortal);
    __VLS_components.DialogPortal;
    __VLS_components.DialogPortal;
    // @ts-ignore
    [DialogPortal, DialogPortal,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .DialogOverlay;
    ({}.DialogOverlay);
    __VLS_components.DialogOverlay;
    // @ts-ignore
    [DialogOverlay,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    const __VLS_12 = {}
        .DialogContent;
    ({}.DialogContent);
    ({}.DialogContent);
    __VLS_components.DialogContent;
    __VLS_components.DialogContent;
    // @ts-ignore
    [DialogContent, DialogContent,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ((__VLS_ctx.cn(__VLS_ctx.sheetVariants({ side: __VLS_ctx.side }), props.class))) }, ...({ ...__VLS_ctx.forwarded, ...__VLS_ctx.$attrs }), }));
    const __VLS_14 = __VLS_13({ ...{ class: ((__VLS_ctx.cn(__VLS_ctx.sheetVariants({ side: __VLS_ctx.side }), props.class))) }, ...({ ...__VLS_ctx.forwarded, ...__VLS_ctx.$attrs }), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ class: ((__VLS_ctx.cn(__VLS_ctx.sheetVariants({ side: __VLS_ctx.side }), props.class))) }, ...({ ...__VLS_ctx.forwarded, ...__VLS_ctx.$attrs }), }));
    __VLS_styleScopedClasses = (cn(sheetVariants({ side }), props.class));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14));
    var __VLS_18 = {};
    // @ts-ignore
    [cn, sheetVariants, side, forwarded, $attrs,];
    // @ts-ignore
    const __VLS_19 = {}
        .DialogClose;
    ({}.DialogClose);
    ({}.DialogClose);
    __VLS_components.DialogClose;
    __VLS_components.DialogClose;
    // @ts-ignore
    [DialogClose, DialogClose,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ ...{ class: ("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary") }, }));
    const __VLS_21 = __VLS_20({ ...{ class: ("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    ({}({ ...{ class: ("absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary") }, }));
    const __VLS_24 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21));
    // @ts-ignore
    const __VLS_25 = {}
        .X;
    ({}.X);
    __VLS_components.X;
    // @ts-ignore
    [X,];
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ ...{ class: ("w-4 h-4 text-muted-foreground") }, }));
    const __VLS_27 = __VLS_26({ ...{ class: ("w-4 h-4 text-muted-foreground") }, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    ({}({ ...{ class: ("w-4 h-4 text-muted-foreground") }, }));
    const __VLS_30 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27));
    __VLS_nonNullable(__VLS_24.slots).default;
    __VLS_nonNullable(__VLS_17.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['fixed'];
        __VLS_styleScopedClasses['inset-0'];
        __VLS_styleScopedClasses['z-50'];
        __VLS_styleScopedClasses['bg-black/80'];
        __VLS_styleScopedClasses['data-[state=open]:animate-in'];
        __VLS_styleScopedClasses['data-[state=closed]:animate-out'];
        __VLS_styleScopedClasses['data-[state=closed]:fade-out-0'];
        __VLS_styleScopedClasses['data-[state=open]:fade-in-0'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['right-4'];
        __VLS_styleScopedClasses['top-4'];
        __VLS_styleScopedClasses['rounded-sm'];
        __VLS_styleScopedClasses['opacity-70'];
        __VLS_styleScopedClasses['ring-offset-background'];
        __VLS_styleScopedClasses['transition-opacity'];
        __VLS_styleScopedClasses['hover:opacity-100'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['focus:ring-2'];
        __VLS_styleScopedClasses['focus:ring-ring'];
        __VLS_styleScopedClasses['focus:ring-offset-2'];
        __VLS_styleScopedClasses['disabled:pointer-events-none'];
        __VLS_styleScopedClasses['data-[state=open]:bg-secondary'];
        __VLS_styleScopedClasses['w-4'];
        __VLS_styleScopedClasses['h-4'];
        __VLS_styleScopedClasses['text-muted-foreground'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                DialogClose: DialogClose,
                DialogContent: DialogContent,
                DialogOverlay: DialogOverlay,
                DialogPortal: DialogPortal,
                X: X,
                sheetVariants: sheetVariants,
                cn: cn,
                forwarded: forwarded,
            };
        },
        props: {},
        emits: {},
    });
}
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
export default {};
;
