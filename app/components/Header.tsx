import Image from "next/image";
import Menu from "./Menu";

export default function Header(){
    return (
        <header className="bg-slate-600 sticky p-6 top-0 flex justify-between">
            <div className="flex">
                <h1>Dog Walker</h1>
                <Image src="paw-solid.svg" height={30} width={30} alt="logo"/>
            </div>
            <div>
                <Menu />
            </div>
        </header>
    )
}