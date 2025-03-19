import { auth } from "@/firebase/firebase"
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"

const provider = new GoogleAuthProvider();

const login = async (email:string, password:string) => {
    try {
        const loginResult = await signInWithEmailAndPassword(auth, email, password);
        return {status: "success", ...loginResult};
    } catch(err) {
        return {status: "error", errorMessage: err};
    }
}

const register = async (email:string, password:string) => {
    try {
        const registerResult = await createUserWithEmailAndPassword(auth, email, password);
        return {status: "success", ...registerResult};
    } catch(err) {
        return {status: "error", errorMessage: err};
    }
}

const logout = async () => {
    await signOut(auth);
}

const loginWithGoogle = async () => {
    try {
        const signInResult = await signInWithPopup(auth, provider);
        return {status: "success", ...signInResult};
    } catch(err) {
        return {status: "error", errorMessage:err}
    }
}

export {
    login,
    register,
    logout,
    loginWithGoogle
};