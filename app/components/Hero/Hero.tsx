import React from 'react'
import Image from 'next/image'
import heroImage from '@/public/images/header.png'
import Link from 'next/link'
const Hero = () => {
return (
<div className='h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[100vh] flex items-center flex-col mt-10'>

<div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto gap-[100px] '>
<div className='col-span-2'>
<h1  data-aos="fade-left" className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[3rem]'>"Nutrição que faz seu pet feliz!"</h1>
<p className='md:text-[17px] text-[15px] mb-[2.4rem] text-black opacity-90'>
Por que Escolher o Ponto do Criador?
Qualidade e Confiança.
Compromisso com a Saúde Animal.
Facilidade e Comodidade: Com nosso serviço de entrega, você não precisa se preocupar em sair de casa.
</p>
<div   className='flex items-center space-x-4 md:space-x-6' >

<Link href='/about'>
      <div className='rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-red-800 relative hover:bg-gradient-to-r hover:from-red-800 hover:to-red-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-500 transition-all ease-out duration-300'>
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:translate-x-40 bg-white opacity-10 rotate-12 ease'></span>
        <span className='relative'>Sobre</span>
      </div>
</Link>
<Link href='/services'>
      <div className='rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-red-800 relative hover:bg-gradient-to-r hover:from-red-800 hover:to-red-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-500 transition-all ease-out duration-300'>
        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:translate-x-40 bg-white opacity-10 rotate-12 ease'></span>
        <span className='relative'>Serviços</span>
      </div>
</Link>

</div>
</div>
<div   className='col-span-3 hidden sm:block '>
<Image src={heroImage}  alt='' width={300} ></Image>
</div>
</div>
</div>
)
}

export default Hero