import { ReactNode } from "react"
import Footer from "./Footer"
import HeaderLayout from "./HeaderLayout"
import { KeyRound } from "lucide-react"
const AuthLayout = ({ children } : { children: ReactNode}) => {
  return (
    <>
        <HeaderLayout 
            links = {[
                {
                    name: "Authenticate",
                    endpoint: "/authenticate",
                    icon: KeyRound
                },
            ]}
        />
        <main className="min-h-[calc(100dvh)] container mx-auto">
            { children }
        </main>
        <Footer />
    </>
  )
}

export default AuthLayout