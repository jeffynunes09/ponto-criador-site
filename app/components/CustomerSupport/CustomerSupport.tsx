import React from 'react'
import Image from 'next/image'
import supportImage from "@/public/images/pngegg.png"
import { CheckIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
const CustomerSupport = () => {
return (
<div className='pt-[5rem] pb-[3rem]'>

<div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center ' >
<div className='order-2 lg:order-1'>
<Image src={supportImage} alt='imagem de suporte' width={500} height={500}></Image>
</div>
<div className='order-2 lg:order-1'>
<h1 className='text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem]'>

O suporte ao cliente é nossa principal prioridade!</h1>
<p className='mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore alias optio, illum porro ad,
aliquid vero corrupti est accusantium molestiae eum necessitatibus quaerat atque accus
amus nisi doloribus rerum deleniti!</p>

<div className='flex items-center mb-[1rem] space-x-3'>

<Link href='https://wa.link/dnf5rv'>
      <div className='rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-green-800 relative hover:bg-gradient-to-r hover:from-green-800 hover:to-green-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-500 transition-all ease-out duration-300'>
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:translate-x-40 bg-white opacity-10 rotate-12 ease'></span>
        <span className='relative'>Whatsapp</span>
      </div>
</Link>
<Link href='tel:+3134754172'>

      <div className='rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-green-800 relative hover:bg-gradient-to-r hover:from-green-800 hover:to-green-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-500 transition-all ease-out duration-300'>
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:translate-x-40 bg-white opacity-10 rotate-12 ease'></span>
        <span className='relative'>Ligar</span>
      </div>
</Link>
</div>

</div>
</div>
</div>
)
}

export default CustomerSupport