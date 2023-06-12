'use client'
import { HiMenu } from "react-icons/hi";
import {useState} from 'react'
import Link from "next/link";

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsMenuOpen(prevState => !prevState)
    }
    return (
        <div onClick={handleClick} className="cursor-pointer overflow-hidden">
            <div>
                <HiMenu />
            </div>
            {isMenuOpen && 
            <div className="overflow-hidden hidden absolute z-1">
                <Link href="#">Profile</Link>
                <Link href="#">Home</Link>
                <Link href="#">Log Out</Link>
                
            </div>}
        </div>
    )
}