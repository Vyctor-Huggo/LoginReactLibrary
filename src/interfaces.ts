export type RootStackParamList = {
    LoginScreen: undefined;
    InfoScreen: undefined;
    RegisterScreen: undefined;
};

export interface User {
    Id: number;
    Username: string;
    Email: string;
    Password: string;
}

export interface CreateUserParams {
    email: string;
    password: string;
    username: string;
}

export interface GetUserParams {
    email: string;
    password: string;
}

export interface UserContextType {
    User: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    registerUser: ({email, password, username}: CreateUserParams) => Promise<void>;
    loginUser: ({ email, password }: GetUserParams) => Promise<void>;
}