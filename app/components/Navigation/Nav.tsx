import Link from 'next/link'
import React from 'react'
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
interface Props {

openNav : ()=> void

}
const Nav = ({openNav}:Props) => {

   
return (
<div className='h-[12vh] bg-[#fdd128] shadow-md'>

<div className='w-[85%] flex items-center justify-between mx-auto h-[12vh]'>
 <Image  src={logo} alt='logo' width={190}/>   
<ul className='hidden lg:flex items-center space-x-5'>
<li className='text-[20px] cursor-pointer  hover:text-[25px] text-[#611616]'>

<Link href="/">Inicio</Link>
</li>
<li className='text-[20px] cursor-pointer hover:text-[#611616] hover:text-[25px] transition-all duration-200'>

<Link href="/about">Sobre</Link>
</li>
<li className='text-[20px] cursor-pointer hover:text-[#611616] hover:text-[25px] transition-all duration-200'>

<Link href="/services">Serviços</Link>
</li>

<li className='text-[20px] cursor-pointer hover:text-[#611616] hover:text-[25px] transition-all duration-200'>

<Link href="/contatos">Contatos</Link>
</li>

</ul>
<div className='flex items-center space-x-2 md:space-x-5'>



<Bars3BottomRightIcon onClick={openNav} className='w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer'/>

</div>

</div>
</div>

)
}

export default Nav