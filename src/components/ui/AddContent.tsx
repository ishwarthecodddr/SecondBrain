import { useRef, useState } from "react"
import Closeicon from "../icons/Closeicon"
import { Button } from "./Button"
import axios from "axios"
import { BACKEND_URL } from "../../config"

type proptypes = {
    open: boolean,
    onClose: () => void
}

enum ContentType {
    "Youtube",
    "Twitter"
}
export const AddContent = ({ open, onClose }: proptypes) => {
    const titleRef = useRef<HTMLInputElement>()
    const linkRef = useRef<HTMLInputElement>()
    const [type, setType] = useState(ContentType.Youtube);
    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axios.post(`${BACKEND_URL}content`, {
            link,
            title,
            type: ContentType[type]
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        alert("Content Added");
    }
    return <div>
        {open && <div className="h-screen w-screen top-0 fixed left-0 bg-slate-400/60">

            <div className=" h-screen  flex flex-col justify-center items-center opacity-100">
                <div className="bg-white rounded-md p-2">
                    <div className="justify-end flex">
                        <div onClick={onClose} className="cursor-pointer">
                            <Closeicon size="lg" />
                        </div>
                    </div>
                    <span>
                        <Inputbox type="text" refrence={titleRef} placeholder="title" />
                        <Inputbox type="text" refrence={linkRef} placeholder="link" />
                        <div className="flex justify-center m-2">
                            <span className="text-xl font-semibold ">Type</span>

                        </div>
                        <div className="flex">
                            <Button
                                size="md"
                                variant={type === ContentType.Youtube ? "primary" : "secondary"}
                                text="Youtube"
                                onClick={() => { setType(ContentType.Youtube) }}
                            />
                            <Button
                                size="md"
                                variant={type === ContentType.Twitter ? "primary" : "secondary"}
                                text="Twitter"
                                onClick={() => { setType(ContentType.Twitter) }}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Button variant="primary" size="md" text="Submit" onClick={addContent} />
                        </div>
                    </span>

                </div>
            </div>
        </div>}
    </div>
}


export function Inputbox({ refrence, placeholder, type }: { refrence?: any, placeholder: string, type: string }) {
    return <div className="m-3 rounded">
        <input type={type} ref={refrence} className="p-1 rounded border border-gray-400"  placeholder={placeholder} />
    </div>
}