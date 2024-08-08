import { computed } from 'vue';
import { NavigationMenuRoot, useForwardPropsEmits, } from 'radix-vue';
import NavigationMenuViewport from './NavigationMenuViewport.vue';
import { cn } from '../../../lib/utils';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const emits = defineEmits();
const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
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
        .NavigationMenuRoot;
    ({}.NavigationMenuRoot);
    ({}.NavigationMenuRoot);
    __VLS_components.NavigationMenuRoot;
    __VLS_components.NavigationMenuRoot;
    // @ts-ignore
    [NavigationMenuRoot, NavigationMenuRoot,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...(__VLS_ctx.forwarded), ...{ class: ((__VLS_ctx.cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class))) }, }));
    const __VLS_2 = __VLS_1({ ...(__VLS_ctx.forwarded), ...{ class: ((__VLS_ctx.cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...(__VLS_ctx.forwarded), ...{ class: ((__VLS_ctx.cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class))) }, }));
    __VLS_styleScopedClasses = (cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    var __VLS_6 = {};
    // @ts-ignore
    [forwarded, cn,];
    // @ts-ignore
    [NavigationMenuViewport,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(NavigationMenuViewport, new NavigationMenuViewport({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(NavigationMenuViewport, __VLS_8));
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
                NavigationMenuRoot: NavigationMenuRoot,
                NavigationMenuViewport: NavigationMenuViewport,
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
