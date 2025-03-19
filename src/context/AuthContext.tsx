import { User } from "firebase/auth";
import { createContext, useState } from "react";

type TypeUser = {
    user: User | null | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>
}

export const AuthContext = createContext<TypeUser | undefined>(undefined);

export const AuthContextWrapper = ({ children } : { children:React.ReactNode }) => {
    const [user, setUser] = useState<User | null>()
    
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            { children }
        </AuthContext.Provider>
    )
}