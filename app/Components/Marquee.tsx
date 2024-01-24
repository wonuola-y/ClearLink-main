import React from 'react'
import Image from "next/image";
import Shopify from './Images/shopify.svg'
import Coinbase from './Images/coinbase.svg'
import Dropbox from './Images/dropbox.svg'
import Marvel from './Images/marvel.svg'
import Intercom from './Images/intercom.svg'
import Automatic from './Images/automatic.svg'

const Marquee = () => {

    const logos = [
        { src: Shopify, alt: 'Shopify logo' },
        { src: Coinbase, alt: 'Coinbase logo' },
        { src: Dropbox, alt: 'Dropbox logo' },
        { src: Intercom, alt: 'Intercom logo' },
        { src: Marvel, alt: 'Marvel logo' },
        { src: Automatic, alt: 'Automatic logo' },
    ];

    return (
        <div className='flex flex-col  justify-center w-full py-24
        ' >{/* Marquee */}
        <h1 className='text-xl font-medium text-gray-600 text-center'>Join 1,500+ companies already video conferencing the ClearLink way</h1>
          <div className='flex justify-between mt-12'>
          {logos.map((logo, index) => (
                <Image key={index} src={logo.src} alt={logo.alt} width={100} height={40} />
            ))}

          </div>
        </div>

    )
}

export default Marquee