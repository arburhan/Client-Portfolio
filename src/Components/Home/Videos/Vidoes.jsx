"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import thumb1 from '@/Components/Home/Videos/Thumnail/thumb1.jpg';
import thumb2 from '@/Components/Home/Videos/Thumnail/thumb2.jpg';
import thumb3 from '@/Components/Home/Videos/Thumnail/thumb3.jpg';
import Title from "@/Components/Shared/Title";
const Videos = () => {
    const [videoUrl, setVideoUrl] = useState('');
    return (
        <section className=" py-8" >
            <Title name={"Videos"} />

            {/* play button */}
            <lebel type="button"
                onClick={() => setVideoUrl("https://www.youtube.com/embed/p5AlT05myGk?si=-BZPhCYrC1Yu2FvC&autoplay=1&mute=0")}
                htmlFor="videoModal" className=" absolute left-[200px] z-50 pt-20 cursor-pointer" >
                Playit
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
            {/*  <div>
                <input type="checkbox" id="videoModal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-5/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <iframe
                            ref={videoRef}
                            className="w-[500px] h-[350px]"
                            src=""
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                    <label className="modal-backdrop" htmlFor="videoModal">Close</label>
                </div>
            </div> */}
            <div>
                <input type="checkbox" id="videoModal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-5/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close the modalsss</p>
                        {videoUrl !== '' &&
                            <iframe
                                className="w-[500px] h-[350px]"
                                src={videoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        }
                    </div>
                    <label role="button" onClick={() => setVideoUrl('')} className="modal-backdrop" htmlFor="videoModal">Close</label>
                </div>
            </div>
        </section>
    );
};

export default Videos;
