import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import FeatureCard from './FeatureCard'
import Icon1 from "@/public/images/Nova pasta/special.png"
import Icon2 from "@/public/images/Nova pasta/special.png"
import Icon3 from "@/public/images/Nova pasta/special.png"
import Icon4 from "@/public/images/Nova pasta/special.png"
import Icon5 from "@/public/images/Nova pasta/special.png"
import Icon6 from "@/public/images/Nova pasta/special.png"

const FeaturesCat = () => {
  return (
    <div data-aos="zoom-in" className='pt=[5rem] pb-[3rem] mt-[80px] ' >
        <SectionHeading 
        headingMini="Produtos para Gatos" 
        headingPrimary="Veja os últimos destaques"/>

        <div   data-aos="flip-left" className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
        
        <div > 
              <FeatureCard title="Special Cat " image={Icon1.src} />
        </div>
        <div>
              <FeatureCard title="Special Cat " image={Icon2.src} />
        </div>
        <div>
              <FeatureCard title="Special Cat " image={Icon3.src} />
        </div>
        <div>
              <FeatureCard title="Special Cat " image={Icon4.src} />
        </div>
        <div>
              <FeatureCard title="Special Cat " image={Icon5.src} />
        </div>
        <div>
              <FeatureCard title="Special Cat " image={Icon6.src} />
        </div>

        </div>
       
    </div>
  )
}

export default FeaturesCat