import React from 'react'
import icon1 from "@/public/images/gmail.png"
import icon2 from "@/public/images/coding.png"
import supportImage from "@/public/images/fale-conosco.png"
import Image from 'next/image'

const SupportTeam = () => {
return (
<div className='pt-[7rem] pb-[3rem] flex justify-between '>
<div className='w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[6rem]'>

<div>
<h1 className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leadind-[2.4rem] md:leading-[4rem]'>
Precisa de ajuda ? nosso time esta pronto para ajuda-lo
</h1>
<p className='text-gray-900 opacity-90 text-[17px] mt-[1rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque adipisci, incidunt voluptate est, d
eleniti explicabo aperiam unde alias perferendis quisquam, minima non
? Asperiores sequi atque at minus delectus nemo officia!</p>
<div className='flex items-center space-x-6 mt-[2rem]'>
<Image src={icon1.src} width={60} height={60} alt='img'/>
<div >
<h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>
Email</h1>
<p className='md:w-[70%] w-[90%] text-[15px] text-black opacity-85'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. B</p>
</div>
</div>
<div className='flex items-center space-x-6 mt-[2rem]'>
<Image src={icon2.src} width={60} height={60} alt='img'/>
<div >
<h1 className='text-[18px] text-gray-900 font-[500] mb-[0.5rem]'>
Chat</h1>
<p className='md:w-[70%] w-[90%] text-[15px] text-black opacity-85'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. B</p>
</div>
</div>
</div>
<div>
<Image src={supportImage.src} width={400} height={400} alt='suporte image'/>
</div>
</div>
</div>
)
}

export default SupportTeam