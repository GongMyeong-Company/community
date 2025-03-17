import axios from "axios";
import { Platform } from "react-native";

// const baseUrls = {
//     android: "http://192.168.219.120:3030",
//     ios: "http://192.168.219.120:3030",
// }

const baseUrls = {
    android: "http://10.0.2.2:3030",
    ios: "http://localhost:3030",
}

const axiosInstance = axios.create({
    baseURL: Platform.OS == 'ios' ? baseUrls.ios : baseUrls.android,
})

export default axiosInstance;