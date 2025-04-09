import api from '../api/api';
import { CreateUserParams, GetUserParams } from '../interfaces';


export async function createUser({email, password, username}: CreateUserParams) {
    try {
        const response = await api.post('/register', { email, password, username });
        return response.data;
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error;
    }
}

export async function getUser({email, password}: GetUserParams) {
    try {
        const response = await api.post('/login', { email, password });
        return response.data;
    } catch (error) {
        console.error("Login: Erro ao buscar usuário:", error);
        throw error;
    }
}