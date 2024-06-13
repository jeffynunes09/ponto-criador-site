"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import FeaturesCat from './Features c/Features'
import FeaturesM from './Features m/Features'
import Carousel from './Carousel/Carousel'
// ..


const Home = () => {

useEffect(() =>{

AOS.init({
duration: 800,
easing:"ease",
once:false,
anchorPlacement: "top-bottom"
})



},[])


return (
<div>
<Hero />
<Carousel/>
<Features/>
<FeaturesCat/>
<FeaturesM/>


</div>
)
}

export default Home