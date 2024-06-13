import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import heroImage from '@/public/images/header.png'
import pets from "@/public/images/Nova pasta/pets.png"
import Dog from "@/public/images/Nova pasta/Dog.png"
import dog1 from "@/public/images/Nova pasta/dog1.png"
const Services = () => {
  return (
  <div className=' flex items-center flex-col mt-10'>

<div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto gap-[100px] '>
<div className='col-span-2'>
<h1   className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[3rem]'>"O que nós fazemos ?"</h1>
<p className='md:text-[17px] text-[15px] mb-[2.4rem] text-black opacity-90'>
A empresa Ponto do Criador é a escolha ideal para quem procura produtos de alta qualidade para seus animais de estimação e para o jardim. Oferecemos uma vasta gama de rações para cães, gatos e aves, garantindo uma alimentação equilibrada e saudável para os seus melhores amigos. Além disso, dispomos de uma seleção completa de artigos para jardinagem, ajudando-o a manter o seu espaço verde sempre bonito e bem cuidado. Venha conhecer a Ponto do Criador e descubra tudo o que precisa para o bem-estar dos seus animais e para o seu jardim.
</p>
<div  className='flex items-center space-x-4 md:space-x-6' >


</div>
</div>
<div    className='col-span-3 hiddn sm:block'>
<Image src={pets}  alt='' width={300} ></Image>
</div>
</div>

<div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto gap-[100px] '>
<div   className='col-span-3 hiddn sm:block'>
<Image src={Dog}  alt='' width={300} ></Image>
</div>
<div className='col-span-2'>
<h1   className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[3rem]'>"O que nós fazemos ?"</h1>
<p className='md:text-[17px] text-[15px] mb-[2.4rem] text-black opacity-90'>
A Ponto do Criador não só se destaca pela variedade de rações e artigos para jardinagem, mas também oferece uma linha completa de medicamentos e vacinas para pets. Sabemos o quanto é importante cuidar da saúde dos seus animais de estimação e, por isso, disponibilizamos medicamentos de alta qualidade para tratar diversas condições de saúde, bem como vacinas essenciais para a prevenção de doenças. Nossa missão é proporcionar o melhor cuidado possível para os seus cães, gatos e aves, garantindo bem-estar e longevidade. Confie na Ponto do Criador para manter seus animais saudáveis e felizes.
</p>
<div   className='flex items-center space-x-4 md:space-x-6' >


</div>
</div>

</div>

<div className='grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto gap-[100px] '>
<div className='col-span-2'>
<h1  className='text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[3rem]'>"O que nós fazemos ?"</h1>
<p className='md:text-[17px] text-[15px] mb-[2.4rem] text-black opacity-90'>
Na Ponto do Criador, nos preocupamos em oferecer conveniência e praticidade aos nossos clientes. Por isso, entregamos na região do bairro Urca para compras acima de 50 reais. Consulte a taxa de entrega ao finalizar o seu pedido para garantir que todos os detalhes estão cobertos. Queremos que seus produtos cheguem até você de forma rápida e segura, mantendo a qualidade que você merece. Seja para rações, medicamentos, vacinas ou artigos de jardinagem, conte com a Ponto do Criador para atender todas as suas necessidades com eficiência e cuidado.
</p>
<div   className='flex items-center space-x-4 md:space-x-6' >


</div>
</div>
<div    className='col-span-3 hiddn sm:block'>
<Image src={dog1}  alt='' width={300} ></Image>
</div>
</div>
</div>
  )
}

export default Services