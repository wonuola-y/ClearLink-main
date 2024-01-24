import React from 'react'
import Button from './Button'
import Image from "next/image";
import Logo from "./Images/logo.svg";
import Collapse from './Images/collapsebtn.svg'
interface Props {
    name: string,
    id: number
}
const NavLinks: Array<Props> = [
    {
        id: 1,
        name: 'Products'
    }, {
        id: 2,
        name: 'Solutions'
    },
    {
        id: 3,
        name: 'Resources'
    },
    {
        id: 4,
        name: 'Pricing'
    }

]


export default function Nav() {
    return (
       <main className=' w-full '>
         <nav className='flex justify-between py-4 mx-8 rounded-[100px] w-full '>
            <div className=' w-1/6  flex items-center '>
                <Image src={Logo} alt="Logo" height={29} width={117} />
            </div>
            <ul className='flex justify-between items-center w-1/2 ' >
            {NavLinks.map((i) => (
             
                    <li className='flex text-gray-500 font-semibold text-lg' key={i.id}>
                        {i.name} <Image src={Collapse} className='mx-1 ' alt='collapisble btn' />
                    </li>

               
            ))
            }
            </ul>
            <div className="btns flex w-1/3   ">
                <Button value='Talk to Sales' isWhite={true} />
                <Button value='Sign up for free' isWhite={false} />
            </div>
        </nav>
       </main>
    )
}