import React from "react";
import Image from "next/image";
import thumb1 from '@/Components/Home/Videos/Thumnail/thumb1.jpg';
import thumb2 from '@/Components/Home/Videos/Thumnail/thumb2.jpg';
import thumb3 from '@/Components/Home/Videos/Thumnail/thumb3.jpg';
const Videos = () => {

    return (
        <section className=" py-8" >
            <div className="text-center my-10" >
                <h1 className=" text-4xl" >Videos</h1>
            </div>
            {/* play button */}
            <div className=" absolute left-[200px] z-50 pt-20" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
            </div>
            {/* video thumbnail */}
            <div className="flex flex-col md:flex-row justify-evenly items-center rounded text-xl">
                <div className="text-center cursor-pointer">
                    <Image src={thumb1} alt="video thumbnail" className=" w-96 h-64 mask mask-hexagon-2 " />
                    <h3 className="py-3" >Moner Radio</h3>
                </div>
                <div className="text-center cursor-pointer">
                    <Image src={thumb2} alt="video thumbnail" className=" w-96 h-64 mask mask-hexagon-2 " />
                    <h3 className="py-3" >Moner Radio</h3>
                </div>
                <div className="text-center cursor-pointer">
                    <Image src={thumb3} alt="video thumbnail" className=" w-96 h-64 mask mask-hexagon-2 " />
                    <h3 className="py-3" >Moner Radio</h3>
                </div>
            </div>
            <div className="text-center py-12" >
                <button className="btn btn-primary" >Watch More Videos</button>
            </div>
        </section>
    );
};

export default Videos;
