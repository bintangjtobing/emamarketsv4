import { ref } from "vue";
import axios from "axios";
import { useLogin } from "../login/useLogin";

export function useRegister() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const loginLead = import.meta.env.VITE_BASE_URL_LEAD;
  const getCountryUrl = import.meta.env.VITE_BASE_URL_COUNTRY;

  const { username, password, errorMessage, authToken, login } = useLogin();

  const accesToken = ref(localStorage.getItem("access_token") || "");
  const userLogin = ref(localStorage.getItem("userLogin") || "");
  const countryCode = ref("");
  const countryId = ref("");
  const passwordRef = ref("");

  const getCountryCode = async () => {
    try {
      const response = await axios.get("https://ipapi.co/json/");
      countryCode.value = response.data.country_code;
    } catch (error) {
      console.log(error);
    }
  };

  const getCountryId = async () => {
    try {
      const response = await axios.post(getCountryUrl, countryCode, {
        headers: {
          "Content-Type": "application/json",
          api_key: "5C9F6D90-5A83-4ECA-8741-8E09627AE5F2", // If the API requires an API key
        },
      });
      if (response.status === 200 && response.data.success === true) {
        const country = response.data.data.find(
          (code: any) => code.iso_alpha2_code === countryCode.value
        );
        countryId.value = country.country_id;
      }
    } catch (error) {
      console.log(error);
    }
  };

  function generateRandomPassword(length: number): string {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

  passwordRef.value = generateRandomPassword(16);

  const register = async () => {
    username.value = "bintang.tobing";
    password.value = "Duhani64";
    login();
    getCountryCode();
    getCountryId();
    try {
      const response = await axios.post(
        loginLead,
        new URLSearchParams({
          login: userLogin.value,
          access_token: accesToken.value,
          on_submit: "AUTO_LOGIN",
          verify: "0",
          account: "1",
          create_company: "0",
          company: "",
          currency: "USD",
          password: passwordRef.value,
          password2: passwordRef.value,
          is_ib: "0",
          label: "",
          tag: "",
          language: "",
          introducer: "",
          sidi: "",
          sidc: "",
          httpref: "",
          auto_responder: "",
          // For Marketing Tracking Ads
          utm_source: "",
          utm_medium: "",
          utm_campaign: "",
          utm_term: "",
          utm_content:"",
          utm_device: "",
          utm_creative: "",
          utm_network: "",
          // end
          emailInstantNotification: "PROFILECREATED",
          lead_method: "SIGNUP",
          targetval: "_self",
          tc_confirmed: "1",
          client_agreement: "1",
          country_id: countryId.value,
          fname: "Bintang",
          lname: "TEST",
          email: "bintang.testV4Markets@gmail.com",
          tel_number: "83145537564",
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
  };
}
