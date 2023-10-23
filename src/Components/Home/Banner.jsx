import React from 'react';
import Image from 'next/image';
import first from '@/assets/images/banner/1.jpg'
import second from '@/assets/images/banner/2.jpg'
import third from '@/assets/images/banner/3.jpg'
import four from '@/assets/images/banner/4.jpg'
import fifth from '@/assets/images/banner/5.jpg'
import sixth from '@/assets/images/banner/6.jpg'
import seven from '@/assets/images/banner/7.jpg'

const Banner = () => {
    return (
        <section>
            <div autoPlay interval={200} className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image src={first} className="w-full h-[80vh]" alt='feature carousel' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image src={second} className="w-full h-[80vh]" alt='feature carousel' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image src={third} className="w-full h-[80vh]" alt='feature carousel' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <Image src={four} className="w-full h-[80vh]" alt='feature carousel' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;