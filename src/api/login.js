import axios from "axios";

export const login = (user, password) => {
    return axios.post("http://localhost:4000/api/login", {
        user,
        password
    })
}