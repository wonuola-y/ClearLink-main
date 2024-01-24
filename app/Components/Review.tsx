import React from 'react'
import Image from "next/image";
import Shopify from './Images/shopify.svg'
import Rating from './Images/stars.svg'
import Sarah from './Images/Sarah.svg'
import Left from './Images/arrowLeft.svg'
import Right from './Images/arrowRight.svg'
import BigImg from './Images/multipleImgs.svg'
type Props = {}

const Review = (props: Props) => {
    return (
        <div className='flex py-24 '>
            <div className='w-1/2'>
                <Image src={Shopify} alt='Shopify' />
                <Image src={Rating} alt='Rating stars' className='my-12' />
                <p className='text-4xl font-medium text-gray-900 mb-12'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</p>

                <div className='flex w-full '>
                    <div className='flex w-3/4'>
                        <Image src={Sarah} alt='Sarah' />
                        <div className='ml-4'>
                            <h1 className='gray-900 font-semibold text-xl'>Sarah Thompson</h1>
                            <p className='text-gray-600 text-lg'>Project Manager, Shopify</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='border-[1px] rounded-full ml-8 border-gray-200 p-4'>
                            <Image src={Left} alt='Left arrow' />
                        </div>
                        <div className='border-[1px] rounded-full ml-8 border-gray-200 p-4'>
                            <Image src={Right} alt='Right arrow' />
                        </div>


                    </div>
                </div>

            </div>
            <div>
                <Image src={BigImg} alt='BIg img' />
            </div>
        </div>
    )
}

export default Review