import axios from "axios";
import { BASE_URL } from '../components/config/config'

const instance = axios.create(
    {
        baseURL: BASE_URL,
    }
)

instance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("token");
        if (token) {
            config.heades = {
                Authorization: `Bearer ${token}`
            }
        } else {
            config.headers = {}
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
)

export default instance;