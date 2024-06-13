"use client"; 
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




// app/components/Carousel.js
// Para garantir que o componente é renderizado no lado do cliente

import Slider from "react-slick";
import styles from '@/app/components/Carousel/Carousel.module.css'

const images = [
    {
        src: '..//images/Nova pasta/formula.png',
        title: 'Título 1',
        description: 'Descrição breve 1',
        link: '/page1'
    },
    {
        src: '..//images/Nova pasta/specialDog.png',
        title: 'Título 2',
        description: 'Descrição breve 2',
        link: '/page2'
    },
    {
        src: '..//images/Nova pasta/supreme.png',
        title: 'Título 3',
        description: 'Descrição breve 3',
        link: '/page3'
    }
];

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <Slider {...settings} className={styles.carousel}>
            {images.map((image, index) => (
                <div  key={index} className={styles.slide}>
                    <img src={image.src} alt={image.title} className={styles.image} />
                    <div className={styles.caption}>
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                        <a href={image.link} className={styles.button}>Abrir</a>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
