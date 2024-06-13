import React from 'react'

const Footer = () => {
return (
<div className='pt-[3rem] pb-[3rem]'>

  <div className='w-[80%] mx-auto grid grid-cols-1 border-b=[1.5px] border-b-slate-300 pb-[2rem] md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4 gap-[4rem] items-start'>
      <div className='md:mx-auto mx-0'>
      
        <h1 className='text-[17px] text-gray-900 font-semibold mb-[1.5rem]'>
          Empresa
        </h1>
        <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Sobre</p>
        <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Afiliados</p>
        <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Carreira e Cultura</p>
        <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Blog</p>
        <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Imprensa</p>
      </div>
      <div className='md:mx-auto mx-0'>
      
      <h1 className='text-[17px] text-gray-900 font-semibold mb-[1.5rem]'>
        Minha Conta
      </h1>
      <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Redes Sociais</p>
      <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Diretorios</p>
      <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Imagens</p>
      <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Permissões</p>
      <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Sobre</p>
    </div>
    <div className='md:mx-auto mx-0'>
      
      <h1 className='text-[17px] text-gray-900 font-semibold mb-[1.5rem]'>
       Sobre nós
      </h1>
      <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Políticas</p>
      <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Privacidade </p>
      <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Termos e Condiçõsd</p>
      <p className='text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600 '>Site Map</p>
      
    </div>
    
    </div>   
  
</div>
)
}

export default Footer