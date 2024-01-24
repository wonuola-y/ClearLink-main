import React from 'react'
import Image from "next/image";
import Rect from './Images/RectImg.svg'
import Arrow from './Images/curly-arrow.svg'
import Recorder from './Images/recorder.svg'
import Speaker from './Images/speaker.svg'
import Calendar from './Images/calendar.svg'
import Padlock from './Images/padlock.svg'
type Props = {}

function Choice({ }: Props) {
    const groups = [
        {
            src: Recorder,
            header: 'Crystal-clear HD video',
            text: 'No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.', alt: 'Recorder'
        },
        {
            src: Speaker,
            header: 'Noise-canceling audio',
            text: 'Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.',
            alt: 'Speaker'
        },
        {
            src: Calendar,
            header: 'Scheduling made easy',
            text: 'Streamline your agenda with ClearLinks intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.',
            alt: 'Calendar'
        },
        {
            src: Padlock, header: 'Bank-grade security',
            text: 'Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.',
            alt: 'Padlock'
        },

    ];
    return (
        <div className='py-24 '>
            <div className='flex'>
                <div className='mb-20 w-2/3'>
                    <h1 className='text-lg text-blue-700 font-semibold '>The ClearLink Advantage</h1>
                    <h2 className='text-5xl my-5 font-semibold tracking-tight'>Why choose ClearLink?</h2>
                    <p className='text-2xl text-gray-500 font-normal'>In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</p>
                </div>
              <div className='flex justify-center'>  <Image src={Arrow} height={157} width={238
                } alt='Curly arrow' className='relative z-10 top-20 transform -rotate-[154.745]' /></div>
            </div>

            <div className='flex justify-between items-center w-full  '>

                <div className=' grid grid-cols-2 gap-y-16 gap-x-10  mr-5 w-3/5' >
                    {
                        groups.map((i, index) => (
                            <div key={index} className=''>
                                <div className='mb-5 p-4 rounded-full border-[1px] border-gray-200 w-1/6'>
                                    <Image src={i.src} height={24} width={24} alt={i.alt} />
                                </div>

                                <h3 className='text-gray-900 text-2xl font-semibold'>{i.header}</h3>
                                <p className='text-lg text-gray-500 font-normal '>{i.text}</p>
                            </div>
                        ))
                    }
                </div>

                <div className=' w-2/5 ' >

                    <Image src={Rect} alt='Big Rectanglar Img with people of different races' width={544} height={527} />
                </div>
            </div>
        </div>
    )
}
// 59.52 40.47

export default Choice