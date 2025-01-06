

type variants = "primary" | "secondary"
interface buttonProps {
    variant: variants,
    starticon?: any,
    endicon?: any,
    text: string,
    size: "sm" | "md" | "lg",
    onClick?: () => void
}
const variantStyle = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-500",
}
const sizeStyle = {
    "sm": "px-3 py-1",
    "md": "px-4 py-2",
    "lg": "px-6 py-4",

}
const defaultStyle = "rounded-lg w-auto m-1"

export const Button = (props: buttonProps) => {
    return <div>
        <button onClick={props.onClick} className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]} flex justify-center items-center`}>
            {(props.starticon) ? <div className="mr-1">{props.starticon}</div>:null}  {props.text}
        </button>
    </div>
}