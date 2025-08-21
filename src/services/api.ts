import axios from "axios";

const api = axios.create({
    baseURL: "https://api.api-futebol.com.br/v1/time/{id}",
    headers: {
        Authorization: "Bearer live_72519a1c0146d49dc7cb1f7d30d530",
    },
});

export default api;
