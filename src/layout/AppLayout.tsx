import { ReactNode, useContext, useEffect } from "react"
import Footer from "./Footer"
import HeaderLayout from "./HeaderLayout"
import { LogOut } from "lucide-react"
import { logout } from "@/controller/userAuthentication"
import { AuthContext } from "@/context/AuthContext"
import { useNavigate } from "react-router"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase/firebase"

const AppLayout = ({ children } : { children: ReactNode}) => {
    const useAuthContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                useAuthContext?.setUser(currentUser)
            } else {
                useAuthContext?.setUser(null)
                navigate('/authenticate')
            }
        })
    }, [navigate, useAuthContext])

    return (
        <>
            {
                useAuthContext?.user !== null ?
                <>
                    <HeaderLayout 
                        links = {[
                            {
                                name: "Log Out",
                                endpoint: "/authenticate",
                                icon: LogOut,
                                func: logout
                            },
                        ]}
                    />
                    <main className="min-h-[calc(100dvh)] container mx-auto my-5">
                        { children }
                    </main>
                    <Footer />
                </>
                :
                <></>
            }
            </>
    )
}

export default AppLayout