import { computed } from 'vue';
import { ScrollAreaCorner, ScrollAreaRoot, ScrollAreaViewport, } from 'radix-vue';
import ScrollBar from './ScrollBar.vue';
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
        .ScrollAreaRoot;
    ({}.ScrollAreaRoot);
    ({}.ScrollAreaRoot);
    __VLS_components.ScrollAreaRoot;
    __VLS_components.ScrollAreaRoot;
    // @ts-ignore
    [ScrollAreaRoot, ScrollAreaRoot,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.delegatedProps), ...{ class: ((__VLS_ctx.cn('relative overflow-hidden', props.class))) }, }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.delegatedProps), ...{ class: ((__VLS_ctx.cn('relative overflow-hidden', props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.delegatedProps), ...{ class: ((__VLS_ctx.cn('relative overflow-hidden', props.class))) }, }));
    __VLS_styleScopedClasses = (cn('relative overflow-hidden', props.class));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .ScrollAreaViewport;
    ({}.ScrollAreaViewport);
    ({}.ScrollAreaViewport);
    __VLS_components.ScrollAreaViewport;
    __VLS_components.ScrollAreaViewport;
    // @ts-ignore
    [ScrollAreaViewport, ScrollAreaViewport,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("h-full w-full rounded-[inherit]") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("h-full w-full rounded-[inherit]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("h-full w-full rounded-[inherit]") }, }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    var __VLS_12 = {};
    // @ts-ignore
    [delegatedProps, cn,];
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    [ScrollBar,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(ScrollBar, new ScrollBar({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    const __VLS_17 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(ScrollBar, __VLS_14));
    // @ts-ignore
    const __VLS_18 = {}
        .ScrollAreaCorner;
    ({}.ScrollAreaCorner);
    __VLS_components.ScrollAreaCorner;
    // @ts-ignore
    [ScrollAreaCorner,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    const __VLS_23 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20));
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['rounded-[inherit]'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ScrollAreaCorner: ScrollAreaCorner,
                ScrollAreaRoot: ScrollAreaRoot,
                ScrollAreaViewport: ScrollAreaViewport,
                ScrollBar: ScrollBar,
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
