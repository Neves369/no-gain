import api from "../api";


const login = async(usuario: {email: string, senha: string}) => {
        try {
            return await api.get(`/users?email=${usuario.email}&senha=${usuario.senha}`);
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            throw error;
        }
}

export default {
    login
}
