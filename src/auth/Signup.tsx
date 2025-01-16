import { useRef } from "react"
import { Inputbox } from "../components/ui/AddContent"
import { Button } from "../components/ui/Button"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
const Signup = () => {
    const userNameRef = useRef<HTMLInputElement>()
    const passowordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate();
    async function signup() {
        const username = userNameRef.current?.value;
        const password = passowordRef.current?.value;
        await axios.post(`${BACKEND_URL}signup`, {
            username,
            password
        })
        alert("Signup Successfull")
        navigate('/signin')
    }
    return (
        <div className="flex justify-center bg-gray-300 items-center flex-col h-screen">
            <div className="bg-white rounded-md shadow-md p-4 h-2/4"> {/* Added h-3/4 class */}
                <h1 className="text-2xl font-semibold justify-center flex">SignUp</h1>
                <Inputbox type="text" refrence={userNameRef} placeholder="Username" />
                <Inputbox type="password" refrence={passowordRef} placeholder="Password" />
                <div className="flex justify-center">
                    <Button onClick={signup} variant="primary" size="md" text="submit" />
                </div>
                <p className="text-gray-400 mt-2 justify-center flex">Already Signed Up ? <a href="/signin"> SignIn</a></p>
            </div>
        </div>
    )
}

export default Signup
