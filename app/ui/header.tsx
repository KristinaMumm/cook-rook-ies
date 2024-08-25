import logo from '@/pics/logo.png'
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
   
    return (
        <div className='flex flex-col justify-center items-center'>
          <Image src={logo.src} className="hidden md:block w-auto h-auto object-none" alt="cook-rook-ies logo" width={400} height={88} /> 
          <Image src={logo.src} className="block md:hidden w-auto h-auto object-none" alt="cook-rook-ies logo" width={200} height={44} /> 
          <h1 className='text-[#6B4B38] font-extrabold'>Do not know what to cook? I will help you out!</h1>
          <p className='text-[#6B4B38] font-light italic'>AI bot for generating recipes</p>
        </div>
    )

}
