'use client'
import React, { useState } from 'react'

import Image from "next/image";
import Plous from './Images/plus.svg'
interface Frequent {
    active?: boolean
}

const FAQs = (props: Frequent) => {
    const faq = [
        {
            header: 'What kind of customer support does ClearLink provide?',
            text: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
        },
        {
            header: 'How many participants can join a ClearLink video conference?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        { header: 'Can I use ClearLink on multiple devices?', text: 'Yes. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut ' },
        {
            header: 'Is ClearLink compatible with other video conferencing platforms?',
            text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '
        },
        {
            header: 'How does ClearLink ensure the security of my video conferences?',
            text: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        { header: 'Do I need to download any software to use ClearLink?', text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"' },
    ];
    // const {active=true} = props
    const [onActive, setOnActive] = useState<number | null>(null)
    function handleToggle(index:number) {
        console.log('I"ve been touched');
        
        setOnActive((prevIndex)=>(prevIndex === index ? null: index));
    }

    return (
        <div className='flex w-full py-24 justify-between'>
            <div className='w-1/2'>
                <div className='w-5/6'>
                    <h1 className='text-lg text-blue-700 font-semibold '>Support</h1>
                    <h2 className='text-5xl my-5 font-semibold tracking-tight'>FAQs</h2>
                    <p className='text-2xl text-gray-500 font-normal '>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                </div>
            </div>
            <div className='w-1/2'>
                {
                    faq.map((i, index) => (
                        <div key={index} className="my-4">
                            <div className="flex justify-between">
                                {/*Toogle section  */}
                                <h1 className='text-gray-900 text-xl font-semibold py-8'>{i.header}</h1>
                            <button onClick={()=> handleToggle(index)}  >
                                <Image src={Plous} alt='plus sign' className='hover:shadow-2xl' />
                            </button>
                        
                            </div>
                            <hr />
                           {
                            onActive === index && (<p>({i.text}</p>)}
                           
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default FAQs