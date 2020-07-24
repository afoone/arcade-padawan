import axios from './axios';

export const getMensaje = () => {
    return axios.get("/mensaje")
}