<script setup lang="ts">
import Input from '../../ui/input/Input.vue'
import Button from '../../ui/button/Button.vue'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet'
import axios from 'axios'
import { ref } from 'vue'
const apiKey = import.meta.env.VITE_API_KEY;
const endpoint = import.meta.env.VITE_BASE_URL;
const version = import.meta.env.VITE_VERSION;

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const login = async () => {
    errorMessage.value = '';
    try {
        const response = await axios.post(
            `${endpoint}/gateway/api/${version}/syntellicore.cfc?method=user_login`, // Use relative path
            new URLSearchParams({
                login: username.value,
                password: password.value
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'api_key': apiKey
                }
            }
        )
        if (response.data.success) {
            const token = response.data.data[0].authentication_token;
            errorMessage.value = '';
            localStorage.setItem('access_token', token);
            username.value = '',
                password.value = ''
            console.log('Authentication token stored:', token);
        } else {
            errorMessage.value = response.data.info.message;
            // console.log('Login failed:', response.data.info.message);
        }
    } catch (error) {
        console.error('Example Purpose: API Test login failed', error)
    }
}
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button variant="ghost"
                class="rounded-full w-full xl:w-fit py-6 xl:py-0 border xl:border-none text-lg xl:text-sm"
                @click="errorMessage = ''">
                Login
            </Button>
        </SheetTrigger>
        <SheetContent class="w-full xl:w-1/3">
            <SheetHeader>
                <SheetTitle class="text-2xl font-bold text-center">Masuk dengan</SheetTitle>
                <div class="flex items-center justify-center gap-3 my-3">
                    <Button variant="ghost" class="rounded-full h-16 w-16 bg-[#F4FAFF]">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                            viewBox="0 0 48 48">
                            <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615"
                                y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#2aa4f4"></stop>
                                <stop offset="1" stop-color="#007ad9"></stop>
                            </linearGradient>
                            <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                            <path fill="#fff"
                                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z">
                            </path>
                        </svg>
                    </Button>
                    <Button variant="ghost" class="rounded-full h-16 w-16 bg-[#F4FAFF]">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                            viewBox="0 0 50 50">
                            <path
                                d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z">
                            </path>
                        </svg>
                    </Button>
                    <Button variant="ghost" class="rounded-full h-16 w-16 bg-[#F4FAFF]">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                            viewBox="0 0 48 48">
                            <path fill="#FFC107"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z">
                            </path>
                            <path fill="#FF3D00"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z">
                            </path>
                            <path fill="#4CAF50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z">
                            </path>
                            <path fill="#1976D2"
                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z">
                            </path>
                        </svg>
                    </Button>
                </div>
            </SheetHeader>
            <div class="flex items-center gap-3">
                <hr class="flex-grow border-t border-gray-300">
                <p class="text-lg">atau melalui</p>
                <hr class="flex-grow border-t border-gray-300">
            </div>
            <div class="grid gap-4 py-4">
                <div class="grid items-center grid-cols-4 gap-4">
                    <Input id="username" v-model="username" placeholder="Username"
                        class="col-span-4 h-14 rounded-2xl" />
                </div>
                <div class="grid items-center grid-cols-4 gap-4">
                    <Input id="password" type="password" v-model="password" placeholder="Password"
                        class="col-span-4 h-14 rounded-2xl" />
                </div>
                <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
                <p>Forgot Password?</p>
            </div>
            <SheetFooter class="">
                <Button class="w-full h-12 rounded-full" type="submit" @click="login">
                    Login
                </Button>
            </SheetFooter>
            <SheetFooter class="mt-3">
                <SheetClose as-child>
                    <Button variant="outline" class="w-full h-12 rounded-full" type="submit">
                        Sign Up
                    </Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    </Sheet>
</template>