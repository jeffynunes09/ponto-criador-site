import React from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

interface Props {
nav:boolean;
closeNav: ()=> void;
}



const MobileNav = ({nav,closeNav}:Props) => {
const navOpenStyle = nav ? "translate-x-0" : "translate-x-[100%]"
return (

<div className={`transform transition-all ${navOpenStyle} duration-500
fixed top-0 right-0 left-0 bottom-0 h-[100vh] bg-[#611616] shadow-md z-[200]`} >
<XMarkIcon onClick={closeNav} className='w-[2rem] absolute top-[2rem] text-white z-[202] right-[2rem]'></XMarkIcon>

<ul className='relative z-[201] space-y-10 flex flex-col justify-center h-[100%] items-center '>
<li onClick={closeNav} className='text-[25px] cursor-pointer text-yellow-300  '>

<Link href="/">Inicio</Link>
</li>
<li  onClick={closeNav} className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>

<Link href="/about">Sobre</Link>
</li>
<li onClick={closeNav} className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>

<Link href="/services">Serviços</Link>
</li>
<li onClick={closeNav} className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>

<Link href="/cliente">Cliente</Link>
</li>
<li className='text-[25px] cursor-pointer text-white hover:text-yellow-300 transition-all duration-200'>

<Link href="/blog">Blog</Link>
</li>


</ul>
</div>
)
}

export default MobileNav