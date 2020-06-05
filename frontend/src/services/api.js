import axios from 'axios';
import store from "@/store/";

const mtgApi = axios.create({
  baseURL: `https://api.scryfall.com`,
});

const loginInterceptor = config => {
  if (store.getters["Auth/isLoggedIn"]) {
    const token = store.state.Auth.token;
    config.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return config;
};

const userApi = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`
});

userApi.interceptors.request.use(loginInterceptor);

export { mtgApi, userApi };
