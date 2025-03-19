import AuthLayout from "../layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { login, loginWithGoogle, register } from "@/controller/userAuthentication";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";

type TypeError = {
  status: string,
  errorMessage: {
    code: string,
    name: string,
    message: string,
  }
}

const Authentication = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<TypeError | any>();  
  const navigate = useNavigate();

  const emailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const passwordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const loginUser = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const loginStatus = await login(email, password)
    if (loginStatus.status === "error") {
      setError(loginStatus);
    } else {
      navigate('/');
    }
  }

  const registerUser = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const registerStatus = await register(email, password)
    if (registerStatus.status === "error") {
      setError(registerStatus)
    } else {
      navigate('/');
    }
  }

  const goolgeSignIn = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const signInStatus = await loginWithGoogle();
    if (signInStatus.status === "error") {
      setError(signInStatus)
    } else {
      navigate('/');
    }
  }

  return (
    <AuthLayout>
      <form method="post" className="my-10 bg-gray-700 rounded-xl p-10 text-white gap-4 flex flex-col max-w-[400px] mx-auto">
        <legend>Authentication Form</legend>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
            required
            onChange={emailChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            minLength={8}
            required
            onChange={passwordChange}
          />
        </div>
        <div id="error">
          {
            error ? 
            <p className="text-red-400">{error.errorMessage.code}</p> :
            <></>
          }
        </div>
        <div className="flex flex-col gap-1">
          <Button className="bg-gray-900 hover:cursor-pointer hover:bg-gray-800" onClick={loginUser}>Login</Button>
          <Button className="hover:cursor-pointer text-black hover:bg-gray-300" variant={"outline"} onClick={registerUser}>Sign Up</Button>
          <Button className="hover:cursor-pointer text-black hover:bg-gray-300 mt-4" variant={"outline"} onClick={goolgeSignIn}><FaGoogle /> Google Sign In</Button>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Authentication;  