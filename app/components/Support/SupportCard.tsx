import React from 'react'

interface Props {

title: string,

text: string
}


const SupportCard = ({title,text}: Props) => {
return (
<div >
<div className='ml-[1rem]'>
<h1 className='text-[17px] text-[#02073e] font-[500]'>{title}</h1>
<p className=' mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]'>{text}</p>
<a href='#'className='mt-[1.4rem] text-red-600 font-[500] cursor-pointer hover:text-red-800'>Clique Aqui</a>
</div>
</div>
)
}

export default SupportCard