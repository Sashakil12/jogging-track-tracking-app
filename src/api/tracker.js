import axios from "axios";
import { AsyncStorage } from "react-native";
const inst = axios.create({
  baseURL: "http://49f985eb.ngrok.io"
});

inst.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
export default inst;
