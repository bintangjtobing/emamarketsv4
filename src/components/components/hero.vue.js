import { onMounted } from 'vue';
import Button from '../ui/button/Button.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
onMounted(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
        videoElement.play();
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("xl:p-4 my-2 xl:my-5 ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container max-w-screen-lg mx-auto p-4 text-center ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("space-y-3 xl:space-y-5 py-1 xl:py-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-3xl xl:text-5xl font-extrabold font-eina-bold leading-10") }, });
    (__VLS_ctx.$t('heading-hero'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("block mt-1 xl:mt-7") }, });
    (__VLS_ctx.$t('heading-hero-span'));
    // @ts-ignore
    [$t, $t,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-base") }, });
    (__VLS_ctx.$t('hero-text'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("block") }, });
    (__VLS_ctx.$t('hero-text-2'));
    // @ts-ignore
    [$t, $t,];
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Button, new Button({ ...{ class: ("rounded-full px-5 py-3 xl:px-10 xl:py-6 text-xs") }, }));
    const __VLS_1 = __VLS_0({ ...{ class: ("rounded-full px-5 py-3 xl:px-10 xl:py-6 text-xs") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ class: ("rounded-full px-5 py-3 xl:px-10 xl:py-6 text-xs") }, }));
    const __VLS_4 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Button, __VLS_1));
    (__VLS_ctx.$t('hero-btn-text'));
    // @ts-ignore
    [$t,];
    __VLS_nonNullable(__VLS_4.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)({ ...{ class: ("hidden md:block md:w-full w-screen h-auto") }, autoplay: (true), muted: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({ src: ("/asset/HeroVideo.mp4"), type: ("video/mp4"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)({ ...{ class: ("md:hidden md:w-full h-auto px-8") }, autoplay: (true), muted: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.source, __VLS_intrinsicElements.source)({ src: ("/asset/hero vidio for mobile.mp4"), type: ("video/mp4"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['xl:p-4'];
        __VLS_styleScopedClasses['my-2'];
        __VLS_styleScopedClasses['xl:my-5'];
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['max-w-screen-lg'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['space-y-3'];
        __VLS_styleScopedClasses['xl:space-y-5'];
        __VLS_styleScopedClasses['py-1'];
        __VLS_styleScopedClasses['xl:py-5'];
        __VLS_styleScopedClasses['text-3xl'];
        __VLS_styleScopedClasses['xl:text-5xl'];
        __VLS_styleScopedClasses['font-extrabold'];
        __VLS_styleScopedClasses['font-eina-bold'];
        __VLS_styleScopedClasses['leading-10'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['mt-1'];
        __VLS_styleScopedClasses['xl:mt-7'];
        __VLS_styleScopedClasses['text-base'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['px-5'];
        __VLS_styleScopedClasses['py-3'];
        __VLS_styleScopedClasses['xl:px-10'];
        __VLS_styleScopedClasses['xl:py-6'];
        __VLS_styleScopedClasses['text-xs'];
        __VLS_styleScopedClasses['hidden'];
        __VLS_styleScopedClasses['md:block'];
        __VLS_styleScopedClasses['md:w-full'];
        __VLS_styleScopedClasses['w-screen'];
        __VLS_styleScopedClasses['h-auto'];
        __VLS_styleScopedClasses['md:hidden'];
        __VLS_styleScopedClasses['md:w-full'];
        __VLS_styleScopedClasses['h-auto'];
        __VLS_styleScopedClasses['px-8'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Button: Button,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
