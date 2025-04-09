import { createContext, useContext, useState, ReactNode } from "react";
import { createUser, getUser } from "../services/authServices"; 
import { UserContextType, GetUserParams, User, CreateUserParams } from "../interfaces";

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserContextProvider({children}: {children: ReactNode} ) {
    const [User, setUser] = useState<User>({
        Id: 0,
        Username: "",
        Email: "",
        Password: ""
    });

    async function loginUser({email, password}: GetUserParams) {
        const attuser = await getUser({email, password});

        setUser({
            Id: attuser.id,  // Pegando o ID correto
            Email: attuser.email,
            Username: attuser.username, 
            Password: attuser.password  // Nunca armazene ou exiba a senha real
        });
    };

    async function registerUser({ email, password, username }: CreateUserParams) {
        const attuser = await createUser({email, password, username});

        setUser({
            Id: attuser.id,  // Pegando o ID correto
            Email: attuser.email,
            Username: attuser.username, 
            Password: attuser.password  // Nunca armazene ou exiba a senha real
        });
    }

    return (
        <UserContext.Provider value={{ User, setUser, registerUser, loginUser }}>
            {children}
        </UserContext.Provider>
    );
};

function useUserContext(): UserContextType {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext deve ser usado dentro de um UserContextProvider");
    }
    return context;
}

export { UserContextProvider, useUserContext };