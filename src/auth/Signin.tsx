import { useRef } from "react"
import { Inputbox } from "../components/ui/AddContent"
import { Button } from "../components/ui/Button"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
const Signin = () => {
    const userNameRef = useRef<HTMLInputElement>()
    const passowordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate()  
    async function signIn() {
        const username = userNameRef.current?.value;
        const password = passowordRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}signin`, {
            username,
            password
        })
        localStorage.setItem('token', response.data.token);
        alert("SignIn Successfull")
        navigate('/dashboard')
    }
    return (
        <div className="flex justify-center bg-gray-300 items-center flex-col h-screen">
            <div className="bg-white rounded-md shadow-md p-4 h-2/4">
                <h1 className="text-2xl font-semibold justify-center flex">SignIn</h1>
                <Inputbox type="text" refrence={userNameRef}
                    placeholder="Username" />
                <Inputbox type="password" refrence={passowordRef} placeholder="Password" />
                <div className="flex justify-center">
                    <Button onClick={signIn} variant="primary" size="md" text="submit" />
                </div>
            </div>
        </div>
    )
}

export default Signin
