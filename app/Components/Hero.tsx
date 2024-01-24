import React from 'react'
import Image from "next/image";
import Button from './Button'
import Robot from './Images/robot.svg'
import Avatar from './Images/avatar.svg'
import Rating from './Images/stars.svg'
import Alhaja from './Images/alhaja.svg'
import BigBro from './Images/bigbro.svg'
import Guy from './Images/guy.svg'
import Sisi from './Images/sisi.svg'
import Sis from './Images/sis.svg'
import Papa from './Images/papa.svg'
import Mic from './Images/microphone.svg'
import Rec from './Images/recorder.svg'
import Smile from './Images/smiley.svg'
import Settings from './Images/settings.svg'
import Comment from './Images/comments.svg'


type Props = {}

export default function Hero({ }: Props) {
    const grid = [
        { src: Papa, alt: 'An old man', className: 'bg-orange-300' },
        { src: Sisi, alt: 'A young black woman' },
        { src: Guy, alt: 'A young white guy' },
        { src: Alhaja, alt: 'A muslim woman' },
        { src: BigBro, alt: 'A big black guy', className: 'bg-yellow-300' },
        { src: Sis, alt: 'A young mixed race woman', className: 'bg-pink-300' },
    ];
    const features = [
        { src: Mic, alt: 'Microphone', className: 'bg-orange-300' },
        { src: Rec, alt: 'Video recorder' },
        { src: Smile, alt: 'Emojis' },
        { src: Comment, alt: 'Comment section' },
        { src: Settings, alt: 'Settings', className: 'bg-yellow-300' },

    ];
    return (
        <div className='flex mt-40 items-center w-full'>
            <div className='w-3/5 mt-40'>
                <h1 className=' text-gray-800 text-[64px]  font-semibold  '>Uniting the world,<br /> one video call at a time</h1>
                <p className='text-gray-500  text-2xl font-normal'>Experience the future of communication with ClearLink – <br />where crystal-clear video conferencing meets <br /> unparalleled simplicity.</p>
                <div className='flex my-12 '>
                    <Button value='Start free trial' isWhite={false} />
                    <a href="#" className='flex text-blue-700 text-lg  ml-5 items-center font-semibold'> <Image src={Robot} alt='robot icon' className=' mr-3' /> Discover AI Assistant</a>
                </div>
                {/* Ratings */}
                <div className='flex '>
                    <Image src={Avatar} alt='avatar' />
                    <div className='ml-4'>
                        <div className='flex '>
                            <Image src={Rating} alt='Rating' />
                            <i className='not-italic ml-2'>5.0</i>

                        </div> 
                        <p className=' font-medium text-gray-500 text-base'>from 3,000 + review</p>
                    </div>
                </div>
            </div>

            {/*  Hero Img*/}

            <div className=' w-2/5'>
                <div className='bg-blue-50 border-blue-200 flex flex-col justify-center rounded-2xl border-[1px] blue-200 p-8  ' >
                    <div className='grid grid-cols-3 gap-5 w-full mb-10   '>
                        {grid.map((i, index) => (
                            <Image key={index} src={i.src} alt={i.alt} className={`rounded-md  ${i.className}`} />
                        ))}

                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center w-9/12 items-center'>
                            {
                                features.map((i, index) => (
                                    <Image key={index} src={i.src} alt={i.alt} className='bg-white border-[1px] border-blue-300 mx-4 p-3 rounded-full' width={40} height={50} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}