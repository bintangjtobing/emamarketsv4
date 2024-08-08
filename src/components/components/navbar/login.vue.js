import Input from '../../ui/input/Input.vue';
import Button from '../../ui/button/Button.vue';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet';
import axios from 'axios';
import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const apiKey = import.meta.env.VITE_API_KEY;
const endpoint = import.meta.env.VITE_BASE_URL;
const version = import.meta.env.VITE_VERSION;
const username = ref('');
const password = ref('');
const errorMessage = ref('');
const login = async () => {
    errorMessage.value = '';
    try {
        const response = await axios.post(`${endpoint}/gateway/api/${version}/syntellicore.cfc?method=user_login`, // Use relative path
        new URLSearchParams({
            login: username.value,
            password: password.value
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'api_key': apiKey
            }
        });
        if (response.data.success) {
            const token = response.data.data[0].authentication_token;
            errorMessage.value = '';
            localStorage.setItem('access_token', token);
            username.value = '',
                password.value = '';
            console.log('Authentication token stored:', token);
        }
        else {
            errorMessage.value = response.data.info.message;
            // console.log('Login failed:', response.data.info.message);
        }
    }
    catch (error) {
        console.error('Example Purpose: API Test login failed', error);
    }
};
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
        .Sheet;
    ({}.Sheet);
    ({}.Sheet);
    __VLS_components.Sheet;
    __VLS_components.Sheet;
    // @ts-ignore
    [Sheet, Sheet,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    const __VLS_6 = {}
        .SheetTrigger;
    ({}.SheetTrigger);
    ({}.SheetTrigger);
    __VLS_components.SheetTrigger;
    __VLS_components.SheetTrigger;
    // @ts-ignore
    [SheetTrigger, SheetTrigger,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ asChild: (true), }));
    const __VLS_8 = __VLS_7({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ asChild: (true), }));
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8));
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(Button, new Button({ ...{ 'onClick': {} }, variant: ("ghost"), ...{ class: ("rounded-full w-full xl:w-fit py-6 xl:py-0 border xl:border-none text-lg xl:text-sm") }, }));
    const __VLS_13 = __VLS_12({ ...{ 'onClick': {} }, variant: ("ghost"), ...{ class: ("rounded-full w-full xl:w-fit py-6 xl:py-0 border xl:border-none text-lg xl:text-sm") }, }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    ({}({ ...{ 'onClick': {} }, variant: ("ghost"), ...{ class: ("rounded-full w-full xl:w-fit py-6 xl:py-0 border xl:border-none text-lg xl:text-sm") }, }));
    let __VLS_17;
    const __VLS_18 = {
        onClick: (...[$event]) => {
            __VLS_ctx.errorMessage = '';
            // @ts-ignore
            [errorMessage,];
        }
    };
    const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Button, __VLS_13));
    let __VLS_14;
    let __VLS_15;
    __VLS_nonNullable(__VLS_16.slots).default;
    __VLS_nonNullable(__VLS_11.slots).default;
    // @ts-ignore
    const __VLS_19 = {}
        .SheetContent;
    ({}.SheetContent);
    ({}.SheetContent);
    __VLS_components.SheetContent;
    __VLS_components.SheetContent;
    // @ts-ignore
    [SheetContent, SheetContent,];
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ ...{ class: ("w-full xl:w-1/3") }, }));
    const __VLS_21 = __VLS_20({ ...{ class: ("w-full xl:w-1/3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    ({}({ ...{ class: ("w-full xl:w-1/3") }, }));
    const __VLS_24 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21));
    // @ts-ignore
    const __VLS_25 = {}
        .SheetHeader;
    ({}.SheetHeader);
    ({}.SheetHeader);
    __VLS_components.SheetHeader;
    __VLS_components.SheetHeader;
    // @ts-ignore
    [SheetHeader, SheetHeader,];
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    ({}({}));
    const __VLS_30 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27));
    // @ts-ignore
    const __VLS_31 = {}
        .SheetTitle;
    ({}.SheetTitle);
    ({}.SheetTitle);
    __VLS_components.SheetTitle;
    __VLS_components.SheetTitle;
    // @ts-ignore
    [SheetTitle, SheetTitle,];
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ class: ("text-2xl font-bold text-center") }, }));
    const __VLS_33 = __VLS_32({ ...{ class: ("text-2xl font-bold text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    ({}({ ...{ class: ("text-2xl font-bold text-center") }, }));
    const __VLS_36 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33));
    __VLS_nonNullable(__VLS_36.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center justify-center gap-3 my-3") }, });
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(Button, new Button({ variant: ("ghost"), ...{ class: ("rounded-full h-16 w-16 bg-[#F4FAFF]") }, }));
    const __VLS_38 = __VLS_37({ variant: ("ghost"), ...{ class: ("rounded-full h-16 w-16 bg-[#F4FAFF]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ variant: ("ghost"), ...{ class: ("rounded-full h-16 w-16 bg-[#F4FAFF]") }, }));
    const __VLS_41 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Button, __VLS_38));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), x: ("0px"), y: ("0px"), width: ("30"), height: ("30"), viewBox: ("0 0 48 48"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.linearGradient, __VLS_intrinsicElements.linearGradient)({ id: ("Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"), x1: ("9.993"), x2: ("40.615"), y1: ("9.993"), y2: ("40.615"), gradientUnits: ("userSpaceOnUse"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.stop, __VLS_intrinsicElements.stop)({ offset: ("0"), "stop-color": ("#2aa4f4"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.stop, __VLS_intrinsicElements.stop)({ offset: ("1"), "stop-color": ("#007ad9"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ fill: ("url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"), d: ("M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ fill: ("#fff"), d: ("M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"), });
    __VLS_nonNullable(__VLS_41.slots).default;
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(Button, new Button({ variant: ("ghost"), ...{ class: ("rounded-full h-16 w-16 bg-[#F4FAFF]") }, }));
    const __VLS_43 = __VLS_42({ variant: ("ghost"), ...{ class: ("rounded-full h-16 w-16 bg-[#F4FAFF]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    ({}({ variant: ("ghost"), ...{ class: ("rounded-full h-16 w-16 bg-[#F4FAFF]") }, }));
    const __VLS_46 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Button, __VLS_43));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), x: ("0px"), y: ("0px"), width: ("100"), height: ("100"), viewBox: ("0 0 50 50"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"), });
    __VLS_nonNullable(__VLS_46.slots).default;
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(Button, new Button({ variant: ("ghost"), ...{ class: ("rounded-full h-16 w-16 bg-[#F4FAFF]") }, }));
    const __VLS_48 = __VLS_47({ variant: ("ghost"), ...{ class: ("rounded-full h-16 w-16 bg-[#F4FAFF]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    ({}({ variant: ("ghost"), ...{ class: ("rounded-full h-16 w-16 bg-[#F4FAFF]") }, }));
    const __VLS_51 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Button, __VLS_48));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), x: ("0px"), y: ("0px"), width: ("100"), height: ("100"), viewBox: ("0 0 48 48"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ fill: ("#FFC107"), d: ("M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ fill: ("#FF3D00"), d: ("M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ fill: ("#4CAF50"), d: ("M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ fill: ("#1976D2"), d: ("M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"), });
    __VLS_nonNullable(__VLS_51.slots).default;
    __VLS_nonNullable(__VLS_30.slots).default;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr, __VLS_intrinsicElements.hr)({ ...{ class: ("flex-grow border-t border-gray-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr, __VLS_intrinsicElements.hr)({ ...{ class: ("flex-grow border-t border-gray-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid gap-4 py-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid items-center grid-cols-4 gap-4") }, });
    // @ts-ignore
    [Input,];
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(Input, new Input({ id: ("username"), modelValue: ((__VLS_ctx.username)), placeholder: ("Username"), ...{ class: ("col-span-4 h-14 rounded-2xl") }, }));
    const __VLS_53 = __VLS_52({ id: ("username"), modelValue: ((__VLS_ctx.username)), placeholder: ("Username"), ...{ class: ("col-span-4 h-14 rounded-2xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    ({}({ id: ("username"), modelValue: ((__VLS_ctx.username)), placeholder: ("Username"), ...{ class: ("col-span-4 h-14 rounded-2xl") }, }));
    const __VLS_56 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Input, __VLS_53));
    // @ts-ignore
    [username,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid items-center grid-cols-4 gap-4") }, });
    // @ts-ignore
    [Input,];
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(Input, new Input({ id: ("password"), type: ("password"), modelValue: ((__VLS_ctx.password)), placeholder: ("Password"), ...{ class: ("col-span-4 h-14 rounded-2xl") }, }));
    const __VLS_58 = __VLS_57({ id: ("password"), type: ("password"), modelValue: ((__VLS_ctx.password)), placeholder: ("Password"), ...{ class: ("col-span-4 h-14 rounded-2xl") }, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ id: ("password"), type: ("password"), modelValue: ((__VLS_ctx.password)), placeholder: ("Password"), ...{ class: ("col-span-4 h-14 rounded-2xl") }, }));
    const __VLS_61 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Input, __VLS_58));
    // @ts-ignore
    [password,];
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500") }, });
        (__VLS_ctx.errorMessage);
        // @ts-ignore
        [errorMessage, errorMessage,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_62 = {}
        .SheetFooter;
    ({}.SheetFooter);
    ({}.SheetFooter);
    __VLS_components.SheetFooter;
    __VLS_components.SheetFooter;
    // @ts-ignore
    [SheetFooter, SheetFooter,];
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{ class: ("") }, }));
    const __VLS_64 = __VLS_63({ ...{ class: ("") }, }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    ({}({ ...{ class: ("") }, }));
    const __VLS_67 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64));
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent(Button, new Button({ ...{ 'onClick': {} }, ...{ class: ("w-full h-12 rounded-full") }, type: ("submit"), }));
    const __VLS_69 = __VLS_68({ ...{ 'onClick': {} }, ...{ class: ("w-full h-12 rounded-full") }, type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("w-full h-12 rounded-full") }, type: ("submit"), }));
    let __VLS_73;
    const __VLS_74 = {
        onClick: (__VLS_ctx.login)
    };
    const __VLS_72 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Button, __VLS_69));
    let __VLS_70;
    let __VLS_71;
    // @ts-ignore
    [login,];
    __VLS_nonNullable(__VLS_72.slots).default;
    __VLS_nonNullable(__VLS_67.slots).default;
    // @ts-ignore
    const __VLS_75 = {}
        .SheetFooter;
    ({}.SheetFooter);
    ({}.SheetFooter);
    __VLS_components.SheetFooter;
    __VLS_components.SheetFooter;
    // @ts-ignore
    [SheetFooter, SheetFooter,];
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ ...{ class: ("mt-3") }, }));
    const __VLS_77 = __VLS_76({ ...{ class: ("mt-3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    ({}({ ...{ class: ("mt-3") }, }));
    const __VLS_80 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77));
    // @ts-ignore
    const __VLS_81 = {}
        .SheetClose;
    ({}.SheetClose);
    ({}.SheetClose);
    __VLS_components.SheetClose;
    __VLS_components.SheetClose;
    // @ts-ignore
    [SheetClose, SheetClose,];
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ asChild: (true), }));
    const __VLS_83 = __VLS_82({ asChild: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
    ({}({ asChild: (true), }));
    const __VLS_86 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83));
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(Button, new Button({ variant: ("outline"), ...{ class: ("w-full h-12 rounded-full") }, type: ("submit"), }));
    const __VLS_88 = __VLS_87({ variant: ("outline"), ...{ class: ("w-full h-12 rounded-full") }, type: ("submit"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    ({}({ variant: ("outline"), ...{ class: ("w-full h-12 rounded-full") }, type: ("submit"), }));
    const __VLS_91 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(Button, __VLS_88));
    __VLS_nonNullable(__VLS_91.slots).default;
    __VLS_nonNullable(__VLS_86.slots).default;
    __VLS_nonNullable(__VLS_80.slots).default;
    __VLS_nonNullable(__VLS_24.slots).default;
    __VLS_nonNullable(__VLS_5.slots).default;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['xl:w-fit'];
        __VLS_styleScopedClasses['py-6'];
        __VLS_styleScopedClasses['xl:py-0'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['xl:border-none'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['xl:text-sm'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['xl:w-1/3'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['my-3'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['h-16'];
        __VLS_styleScopedClasses['w-16'];
        __VLS_styleScopedClasses['bg-[#F4FAFF]'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['h-16'];
        __VLS_styleScopedClasses['w-16'];
        __VLS_styleScopedClasses['bg-[#F4FAFF]'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['h-16'];
        __VLS_styleScopedClasses['w-16'];
        __VLS_styleScopedClasses['bg-[#F4FAFF]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['flex-grow'];
        __VLS_styleScopedClasses['border-t'];
        __VLS_styleScopedClasses['border-gray-300'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['flex-grow'];
        __VLS_styleScopedClasses['border-t'];
        __VLS_styleScopedClasses['border-gray-300'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['py-4'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['grid-cols-4'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['col-span-4'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['grid-cols-4'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['col-span-4'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['rounded-2xl'];
        __VLS_styleScopedClasses['text-red-500'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-12'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['h-12'];
        __VLS_styleScopedClasses['rounded-full'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Input: Input,
                Button: Button,
                Sheet: Sheet,
                SheetClose: SheetClose,
                SheetContent: SheetContent,
                SheetFooter: SheetFooter,
                SheetHeader: SheetHeader,
                SheetTitle: SheetTitle,
                SheetTrigger: SheetTrigger,
                username: username,
                password: password,
                errorMessage: errorMessage,
                login: login,
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
