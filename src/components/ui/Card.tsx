import Delete from "../icons/Deleteicon"
import { Shareicon } from "../icons/Shareicon"

interface Cardprops {
    title: string,
    startIcon?: any,
    shareIcon: any,
    deleteicon: any,
    // tags: string,
    // date: Date,
    type: "Twitter" | "Youtube",
    link: string
}
export const Card = (props: Cardprops) => {
    return <div className="shadow-md h-auto w-80 p-2 border border-gray-200">
        <div>
            <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center ">
                    <div className="mx-5"><Shareicon size="md" /></div>
                    <div className="font- text-xl">{props.title}</div>
                </div>
                <div className="flex gap-2 text-gray-400">
                    <div><Shareicon size="md" /></div>
                    <div><Delete size="md" /></div>
                </div>
            </div>
        </div>
        <div className="mt-2">
            {props.type === "Youtube" && (
                <div className="relative w-full h-[200px]">
                    <iframe 
                        className="w-full h-full rounded-md"
                        src={props.link.replace("watch?v=", "embed/")} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            )}
            {props.type === "Twitter" && (
                <blockquote className="twitter-tweet">
                    <a href={props.link.replace("x.com", "twitter.com")}></a>
                </blockquote>
            )}
        </div>
    </div>
}