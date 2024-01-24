import React from 'react'
import Image from "next/image";
import MainImg from "./Images/finalLargeImg.svg";
import Check from './Images/CheckIcon.svg'
import Button from './Button'

type Props = {}

export default function FinalSection({ }: Props) {
    return (
        <div className=' flex justify-between py-24'>
            <div className='w-1/2'>
                <h1 className='text-gray-900
                 font-semibold text-5xl'> Ready to clear the path to perfect communication?</h1>
                <ul className=' text-2xl mt-8 text-gray-600'>
                    <li className='flex '> <Image  className='mr-4' src={Check} alt='check'/>30 days free trial</li>
                    <li className='flex '>  <Image className='mr-4'  src={Check} alt='check'/> Cancel at any time</li>
                    <li className='flex '> <Image  className='mr-4' src={Check} alt='check'/> Access to all  </li>
                    <li className='flex '>  <Image className='mr-4'  src={Check} alt='check'/> Personalized onboarding</li>
                </ul>
                <div className=' mt-10'>
                    <Button isWhite={true} value='Talk to Sales ' />
                    <Button isWhite={false} value='Start free Trial ' />

                </div>
            </div>
            <div  className='w-1/2 bg-black'>
<Image src={MainImg} alt='second hero img' width={1024} height={682} />
            </div>
        </div>
    )
}