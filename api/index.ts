import axios, {AxiosInstance} from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL 
});

api.interceptors.response.use(
    response => response,
    error => {
        if(error.response) {
            console.error(error.response.data?.message || "Erro desconhecido");
        }
        else if (error.request){
            console.error("Erro na requisição:", error.request);
        }
        else {
            console.error("Erro ao configurar a requisição: ", error.message);
        } 
        return Promise.reject(error);
    }
)


export default api;