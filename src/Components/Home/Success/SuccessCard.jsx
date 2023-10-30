import Image from 'next/image';
import React from 'react';
import profile from '@/assets/images/success/tom.jpg';
import { AiFillStar } from 'react-icons/ai';
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const SuccessCard = ({ testmoni }) => {
    return (
        <div className='text-center p-6 border-2  border-green-500 rounded-xl'>
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image src={profile} alt="success" />
                </div>
            </div>
            <div>
                <h3 className=' text-2xl'>{testmoni.name}</h3>
                <h5 className='text-lg'>Student</h5>
                <h3 className='text-lg flex justify-center'>
                    <AiFillStar color='gold' />
                    <AiFillStar color='gold' />
                    <AiFillStar color='gold' />
                    <AiFillStar color='gold' />
                    <AiFillStar color='gold' />
                </h3>
                <blockquote className='text-lg' >
                    <BiSolidQuoteAltLeft />
                    {testmoni.description.length > 160 ? testmoni.description.slice(0, 155) + "..." : testmoni.description}

                </blockquote>
            </div>
        </div>
    );
};

export default SuccessCard;