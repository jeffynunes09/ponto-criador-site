import React from 'react'
import Image from 'next/image'
import CompanyImage from "@/public/images/Nova pasta/tech.jpeg"

const Company = () => {
return (
<div className='pt-[6rem] pb-[3rem] '>

<h1 className='mb-[1.5rem] font-bold text-[22px] 
text-center md:text-[30px] text-[#02073e]' >

Empresas que trabalham conosco 
</h1>

<p className='w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%]
xl:w-[55%] mx-auto text-[17px] text-center 
text-gray-950 opacity-80'>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ratione voluptatibus dignissimos
  asperiores cumque fugit praesent
ium illum dicta accusantium architecto optio autem, ullam repudiandae commodi, beatae itaque,
nesciunt provident aperiam.
</p>
<p className='text-center mt-[1.7rem] font-[500] cursor-pointer text-blue-600'>Veja detalhes</p>


<div className='mt-[2rem] text-center w-[80%] mx-auto'>

<Image src={CompanyImage} alt='image' ></Image>

</div>

</div>
)
}

export default Company