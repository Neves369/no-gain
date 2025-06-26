import axios, {AxiosInstance} from 'axios';

/**
 * Cria uma instância do cliente Axios com a base URL definida
 * para fazer requisições HTTP para a API
 */
const api: AxiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL 
});

// Para interceptar erros de conexão
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

/**
 * Exporta a instância do cliente Axios como padrão
 */
export default api;