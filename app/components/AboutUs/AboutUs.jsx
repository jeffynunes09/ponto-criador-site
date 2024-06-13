"use client"; 
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Slider from "react-slick";
import styles from '@/app/components/AboutUs/AboutUs.module.css';

const images = [
    {
        src: '../images/Nova pasta/item1.png',
        link: '/page1'
    },
    {
        src: '../images/Nova pasta/item1.png',
        link: '/page2'
    },
    {
        src: '../images/Nova pasta/item1.png',
        link: '/page3'
    }
];

export default function AboutUs() {
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
        <div className='w-full max-w-4xl mx-auto items-center px-4'>
            <h1 className={styles.title}>Loja Urca</h1>
            <Slider {...settings} className={styles.carousel}>
                {images.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <img src={image.src} alt={`Slide ${index + 1}`} className={styles.image} />
                    </div>
                ))}
            </Slider>
            <p className={styles.description}>
                Avenida Expedicionário Paulo de Souza, número 359 - Bairro Urca - Belo Horizonte
                <br />
                31 3475-4949
            </p>
            <div className='w-[200px] mx-auto mt-8 h-[40px] mb-[50px]'>
                <Link href='https://www.google.com.br/maps/place/Nutricampos+Ra%C3%A7%C3%B5es/@-19.8708349,-44.1588974,12z/data=!3m1!5s0xa6915c3c8ac9e5:0x5656cbcbf77a673c!4m10!1m2!2m1!1sEX+PAULO+DE+SOUZA+359!3m6!1s0xa6915c2c98a675:0x5fd89ec7ed7da26a!8m2!3d-19.8708349!4d-44.0147018!15sChVFWCBQQVVMTyBERSBTT1VaQSAzNTlaFyIVZXggcGF1bG8gZGUgc291emEgMzU5kgEKZmVlZF9zdG9yZeABAA!16s%2Fg%2F11c3mpk_21?entry=ttu'>
                    <div className='rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-red-800 relative hover:bg-gradient-to-r hover:from-red-800 hover:to-red-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-500 transition-all ease-out duration-300'>
                        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:translate-x-40 bg-white opacity-10 rotate-12 ease'></span>
                        <span className='relative'>Ver no mapa</span>
                    </div>
                </Link>
            </div>

            <h1 className={styles.title}>Loja Serrano</h1>
            <Slider {...settings} className={styles.carousel}>
                {images.map((image, index) => (
                    <div key={index} className={styles.slide}>
                        <img src={image.src} alt={`Slide ${index + 1}`} className={styles.image} />
                    </div>
                ))}
            </Slider>
            <p className={styles.description}>
                Avenida Serrano, número 711 - Bairro Serrano - Belo Horizonte
                <br />
                31 3475-4172
            </p>
            <div className='w-[200px] mx-auto mt-8 h-[40px] mb-[50px]'>
                <Link href='https://www.google.com.br/maps/place/Ponto+do+Criador/@-19.8792224,-44.0120696,20.75z/data=!4m6!3m5!1s0xa6915071abbe0b:0x5784c9295093333b!8m2!3d-19.8792566!4d-44.0120619!16s%2Fg%2F1pv5vm_7r?entry=ttu'>
                    <div className='rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-red-800 relative hover:bg-gradient-to-r hover:from-red-800 hover:to-red-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-500 transition-all ease-out duration-300'>
                        <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:translate-x-40 bg-white opacity-10 rotate-12 ease'></span>
                        <span className='relative'>Ver no mapa</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
