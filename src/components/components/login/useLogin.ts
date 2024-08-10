import { ref } from 'vue'
import axios from 'axios'

export function useLogin() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const endpoint = import.meta.env.VITE_BASE_URL_LOGIN;
    const version = import.meta.env.VITE_BASE_LOGIN_VERSION;
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const authToken = ref('')

    const login = async () => {
        errorMessage.value = '';
        try {
            const response = await axios.post(
                `${endpoint}`,
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
                localStorage.removeItem('access_token');
                localStorage.removeItem('userLogin');
                const token = response.data.data[0].authentication_token;
                authToken.value = response.data.data[0].authentication_token;
                errorMessage.value = '';
                localStorage.setItem('access_token', token);
                localStorage.setItem('userLogin', username.value);
                username.value = '';
                password.value = '';
            } else {
                errorMessage.value = response.data.info.message;
            }
        } catch (error) {
            console.error('Example Purpose: API Test login failed', error)
        }
    }

    return {
        username,
        password,
        errorMessage,
        authToken,
        login
    }
}
