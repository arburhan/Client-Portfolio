"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import thumb1 from '@/Components/Home/Videos/Thumnail/thumb1.jpg';
import thumb2 from '@/Components/Home/Videos/Thumnail/thumb2.jpg';
import thumb3 from '@/Components/Home/Videos/Thumnail/thumb3.jpg';
import Title from "@/Components/Shared/Title";
import VideoModal from "./VideoModal";
const Videos = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [modall, setModall] = useState(false);
    return (
        <section className=" py-8 relative select-none" >
            <Title name={"Videos"} />

            {/* play button */}
            <lebel role="button"
                onClick={() => { setModall(true); setVideoUrl("https://www.youtube.com/embed/p5AlT05myGk?si=-BZPhCYrC1Yu2FvC&autoplay=1&mute=0") }}
                className=" absolute left-[200px] z-50 pt-20 cursor-pointer" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
            </lebel>
            {/* video thumbnail */}
            <div className="flex flex-col md:flex-row justify-evenly items-center rounded text-xl">
                <label type="button" onClick={() => setVideoUrl("https://www.youtube.com/embed/p5AlT05myGk?si=-BZPhCYrC1Yu2FvC&autoplay=1&mute=0")} htmlFor="videoModal" className="text-center cursor-pointer">
                    <Image loading='lazy' src={thumb1} alt="video thumbnail" className=" w-96 h-64 mask mask-hexagon-2 " />
                    <h3 className="py-3" >Moner Radio</h3>
                </label>
                <label type="button" onClick={() => setVideoUrl("https://www.youtube.com/embed/p5AlT05myGk?si=-BZPhCYrC1Yu2FvC&autoplay=1&mute=0")} htmlFor="videoModal" className="text-center cursor-pointer">
                    <Image loading='lazy' src={thumb2} alt="video thumbnail" className=" w-96 h-64 mask mask-hexagon-2 " />
                    <h3 className="py-3" >Moner Radio</h3>
                </label>
                <label type="button" onClick={() => setVideoUrl("https://www.youtube.com/embed/p5AlT05myGk?si=-BZPhCYrC1Yu2FvC&autoplay=1&mute=0")} htmlFor="videoModal" className="text-center cursor-pointer">
                    <Image loading='lazy' src={thumb3} alt="video thumbnail" className=" w-96 h-64 mask mask-hexagon-2 " />
                    <h3 className="py-3" >Moner Radio</h3>
                </label>
            </div>
            <div className="text-center py-12" >
                <button className="btn btn-primary" >Watch More Videos</button>
            </div>
            {/* modal content */}
            {modall && <VideoModal title={"hi"} description={"kichui nai apatoto"} videoUrl={videoUrl} setModall={(n) => setModall(n)} />}
        </section>
    );
};

export default Videos;
