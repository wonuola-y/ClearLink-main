

// import React from 'react';
import Image from "next/image";
import Logo from "./Images/logo.svg";
import AppStore from './Images/appstore.svg'
import PlayStore from './Images/playstore.svg'
import Instagram from './Images/Instagram.svg'
import Twitter from './Images/Twitter.svg'
import Github from './Images/github.svg'
import Linkendin from './Images/Linkendin.svg'
import Facebook from './Images/fb.svg'
import Youtube from './Images/Youtube.svg'
interface column {
    title: string,
    items: any

}
interface ItemsProps {
    items: any[];
}
const FooterLinks: React.FC<ItemsProps> = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li className="font-semibold text-lg mb-4" key={index}>{item}</li>
            ))}
        </ul>
    )

}
const Footer = () => {
    const columns: Array<column> = [
        { title: 'Product', items: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing'] },
        { title: 'Company', items: ['About us', 'Careers', 'Press', 'News', 'Contact'] },
        { title: 'Resources', items: ['Blog', 'Events', 'Help centers', 'Tutorials', ' Support'] },
        { title: 'Legal', items: ['Terms', 'Privacy', 'Cookies', 'Licences'] },
    ];

    return (
        <footer>
            {/* Column 1 */}
            <div className="text-gray-600 p-4 flex w-full  ">
                <div className='w-2/6 mr-20'>
                    <h3 className="text-lg font-bold mb-2">                <Image src={Logo} alt="Logo" height={29} width={117} />
                    </h3>
                    <p className='text-lg'>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
                </div>
                <div>
                    <div className="grid grid-cols-5 gap-4 w-full">


                        {/* Column 2 */}

                        {columns.map((i, index) => (
                            <div key={index}>
                                <h3 className=" font-bold mb-2 text-gray-500 text-base">{i.title}</h3>

                                <FooterLinks key={index} items={i.items} />
                            </div>
                        ))}

                        <div>
                            <h3 className="text-base font-bold  text-blue-700">Get the app</h3>
                            <ul className="flex flex-col">
                                <button><Image src={AppStore} alt="AppStore logo" className="my-4" /></button>
                                <button><Image src={PlayStore} alt="PlayStore logo" /></button>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className="py-12 flex justify-between ">
                <p>© 2023 ClearLink. All rights reserved.</p>
                <ul className="flex justify-between">
                    <li className="ml-6">
                        <Image src={Instagram} alt="Instagram logo" />
                    </li>
                    <li className="ml-6"> <Image src={Twitter} alt="Twitter logo" /></li>
                    <li className="ml-6"> <Image src={Youtube} alt="Youtube logo" /></li>
                    <li className="ml-6"> <Image src={Github} alt="Github logo" /></li>
                    <li className="ml-6"> <Image src={Facebook} alt="Facebook logo" /></li>
                    <li> <Image className="ml-6" src={Linkendin} alt="Linkendin logo" /></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
