import React from 'react'


interface Props {

bg: string,
num:string,
price: string,
plan:string
}



const PriceCard = ({bg,num,price,plan}:Props) => {
const large = num == "2" ? "lg:scale-110 scale-100 z-[100]" : ""; 
return (
<div className={`relative ${large} bg-gray-200 shawdow-md transform`}>

<div className={`${bg} h-[200px] flex flex-col items-center justify-center rounded-t-md`}>
<p className='text-[20px] text-white font-[500] mb-[1.5rem] '>{plan}</p>
<h1 className='text-white text-[20px]'>
<span className='text-[30px] text-yellow-300 font-bold'>
    R$:{price}/

</span>
por mês
</h1>

</div>
<div className='p-4 mt-[1rem] text-center'>
<p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
Acesso total liberado
</p>
<p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
Multiplos Sites
</p>
<p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
Projetos com TypeScript
</p>
<p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
Projetos FullStack MERN
</p>
<p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
React JS 
</p>

<div className='mt-[1.5rem] mb-[1.5rem] text-center'>

</div>
</div>
</div>
)
}

export default PriceCard