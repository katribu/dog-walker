'use client'
import { HiMenu } from "react-icons/hi";
import {useState} from 'react'

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsMenuOpen(prevState => !prevState)
    }
    return (
        <div onClick={handleClick} className="cursor-pointer">
            <div>
                <HiMenu />
            </div>
            {isMenuOpen && 
            <div>
                <ul>
                    <li>Profile</li>
                    <li>Home</li>
                    <li>Help</li>
                </ul>
            </div>}
        </div>
    )
}