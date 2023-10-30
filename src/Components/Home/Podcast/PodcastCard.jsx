"use client"

import Image from 'next/image';
import React from 'react';
import podImage from '@/assets/images/others/Tom-and-Jerry-in-New-York-1000x600.jpg';
import { AiOutlinePlayCircle } from "react-icons/ai";


const PodcastCard = ({ details }) => {
    const podButton = () => {
        console.log("object");
    }
    return (
        <>
            <div onClick={podButton} className='w-72 cursor-pointer relative'>
                <Image src={podImage} loading='lazy' alt='podcast' className=' w-72 rounded-xl' />
                <AiOutlinePlayCircle color='white' className="w-14 h-14 absolute bottom-[105px] hover:bottom-28 hover:ease-in-out" />
                <div className='py-2'>
                    <h3 className=' text-base'>{details.name.length > 20 ? details.name.slice(0, 18) + "..." : details.name} </h3>
                    <h4 className='text-sm py-1'>{details.date}</h4>
                    <p className='text-xs'>{details.description.length > 90 ? details.description.slice(0, 85) + "..." : details.description}</p>
                </div>
            </div>
        </>
    );
};

export default PodcastCard;