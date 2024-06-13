import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import PriceCard from './PriceCard'

const Price = () => {
return (
<div  data-aos="zoom-in-right" className='pt=[5rem] pb-[3rem]'>

<SectionHeading 
headingMini='Para seus negócios'
headingPrimary='Veja o melhor plano para você'/>

<div className='w-[80%] mx-auto grid pt-[6rem] lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center' >
<div>
<PriceCard bg="bg-[#81124a]" price="19.99" num="1" plan="Starter"></PriceCard>
</div>
<div>
<PriceCard bg="bg-[#22840c]" price="29.99" num="2" plan="Premium"></PriceCard>
</div>
<div>
<PriceCard bg="bg-[#112c60]" price="39.99" num="1" plan="Utimate"></PriceCard>
</div>
</div>

</div>
)
}

export default Price