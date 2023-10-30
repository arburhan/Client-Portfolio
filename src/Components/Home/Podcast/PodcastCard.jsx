"use client"

import Image from 'next/image';
import React from 'react';
import podImage from '@/assets/images/others/Tom-and-Jerry-in-New-York-1000x600.jpg';
import { MdPlayCircleOutline } from "react-icons/md";


const PodcastCard = ({ details }) => {
    const podButton = () => {
        console.log("object");
    }
    return (
        <>
            <div onClick={podButton} className='w-72 cursor-pointer'>
                <Image src={podImage} loading='lazy' alt='podcast' className=' w-72 rounded-xl' />
                <MdPlayCircleOutline className="w-14 h-14 relative bottom-12" />
                {/* <div className='' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 relative bottom-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                </div> */}
                <div>
                    <h3 className=' text-base'>{details.name.length > 20 ? details.name.slice(0, 18) + "..." : details.name} </h3>
                    <h4 className='text-sm'>{details.date}</h4>
                    <p className='text-xs'>{details.description.length > 90 ? details.description.slice(0, 85) + "..." : details.description}</p>
                </div>
            </div>
        </>
    );
};

export default PodcastCard;