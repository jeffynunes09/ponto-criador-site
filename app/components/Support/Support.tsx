import React from 'react'
import SupportCard from './SupportCard'
import Image from 'next/image'
import icon from "@/public/images/w.png"
import img from "@/public/images/fale-conosco.png"
import icon2 from "@/public/images/coding.png"
import icon3 from "@/public/images/gmail.png"

const Support = () => {
return (
<div data-aos="zoom-in-left" className='flex mx-auto w-[80%] justify-center items-center gap-10'>
<div className="flex-[0.5] ">
<div className='mb-[2rem]'>
<h1 className='mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-[#02073e]'>Precisa de ajuda?</h1>
<p className='mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]'>Entre em contato pelos nossos canais de atendimento. Estamos prontos para tirar qualquer dúvida!</p>
</div>
<div className='flex  bg-gray-100 py-2 px-4 hover:scale-105 rounded-t-lg  hover:rounded-lg'>
<div className='flex items-center '>
<Image src={icon3.src} width={60} height={60} alt='logo' className='mx-auto'/>
</div>
<SupportCard title='Email'  text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum n' />

</div>
<div className='flex  bg-gray-100 py-2 px-4 hover:scale-105 hover:rounded-lg '>
<div className='flex items-center '>
<Image src={icon2.src} width={60} height={60} alt='logo' className='mx-auto'/>
</div>
<SupportCard title='Chat'  text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum n' />

</div>
<div className='flex  bg-gray-100 py-2 px-4 hover:scale-105 rounded-b-lg hover:rounded-lg '>

<div className='flex items-center '>
<Image src={icon.src} width={60} height={60} alt='logo' className='mx-auto'/>
</div>
<SupportCard title='WhatsApp'  text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum n' />

</div>
</div>
<div className='flex-[0.5] ml-[4rem]'>

<Image src={img.src} width={400} height={400} alt='foto'/>
</div>
</div>
)
}

export default Support