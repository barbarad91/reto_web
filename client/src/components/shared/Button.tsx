import { MouseEventHandler } from "react"

const Button = ({className, onClick}:ButtonProps) =>{
    return <button className={className} onClick ={onClick}>Holi</button>
}

type ButtonProps={
    className?:string,
    onClick?:MouseEventHandler,
}
export default Button