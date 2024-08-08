import { computed } from 'vue';
import { ScrollAreaScrollbar, ScrollAreaThumb } from 'radix-vue';
import { cn } from '../../../lib/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = withDefaults(defineProps(), {
    orientation: 'vertical',
});
const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const __VLS_withDefaultsArg = (function (t) { return t; })({
    orientation: 'vertical',
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
        .ScrollAreaScrollbar;
    ({}.ScrollAreaScrollbar);
    ({}.ScrollAreaScrollbar);
    __VLS_components.ScrollAreaScrollbar;
    __VLS_components.ScrollAreaScrollbar;
    // @ts-ignore
    [ScrollAreaScrollbar, ScrollAreaScrollbar,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.delegatedProps), ...{ class: ((__VLS_ctx.cn('flex touch-none select-none transition-colors', __VLS_ctx.orientation === 'vertical'
                && 'h-full w-2.5 border-l border-l-transparent p-px', __VLS_ctx.orientation === 'horizontal'
                && 'h-2.5 flex-col border-t border-t-transparent p-px', props.class))) }, }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.delegatedProps), ...{ class: ((__VLS_ctx.cn('flex touch-none select-none transition-colors', __VLS_ctx.orientation === 'vertical'
                && 'h-full w-2.5 border-l border-l-transparent p-px', __VLS_ctx.orientation === 'horizontal'
                && 'h-2.5 flex-col border-t border-t-transparent p-px', props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.delegatedProps), ...{ class: ((__VLS_ctx.cn('flex touch-none select-none transition-colors', __VLS_ctx.orientation === 'vertical'
                && 'h-full w-2.5 border-l border-l-transparent p-px', __VLS_ctx.orientation === 'horizontal'
                && 'h-2.5 flex-col border-t border-t-transparent p-px', props.class))) }, }));
    __VLS_styleScopedClasses = (cn('flex touch-none select-none transition-colors', orientation === 'vertical'
        && 'h-full w-2.5 border-l border-l-transparent p-px', orientation === 'horizontal'
        && 'h-2.5 flex-col border-t border-t-transparent p-px', props.class));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .ScrollAreaThumb;
    ({}.ScrollAreaThumb);
    __VLS_components.ScrollAreaThumb;
    // @ts-ignore
    [ScrollAreaThumb,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("relative flex-1 rounded-full bg-border") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("relative flex-1 rounded-full bg-border") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("relative flex-1 rounded-full bg-border") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [delegatedProps, cn, orientation, orientation,];
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['bg-border'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ScrollAreaScrollbar: ScrollAreaScrollbar,
                ScrollAreaThumb: ScrollAreaThumb,
                cn: cn,
                delegatedProps: delegatedProps,
            };
        },
        props: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
;
