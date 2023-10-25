import React from 'react';
import Image from 'next/image';
import hero from '@/assets/images/hero/hero.jpg';
import fb from '@/assets/images/hero/icon/fb.png';


const Hero = () => {
    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image loading='lazy' src={hero} className='max-w-lg rounded-lg shadow-2xl' alt='hero' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='flex gap-6'>
                            <button>
                                <div className="avatar">
                                    <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <Image loading='lazy' src={fb} alt='fb account' />
                                    </div>
                                </div>
                            </button>
                            <button>
                                <div className="avatar">
                                    <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <Image loading='lazy' src={fb} alt='fb account' />
                                    </div>
                                </div>
                            </button>
                            <button>
                                <div className="avatar">
                                    <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <Image loading='lazy' src={fb} alt='fb account' />
                                    </div>
                                </div>
                            </button>
                            <button>
                                <div className="avatar">
                                    <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <Image loading='lazy' src={fb} alt='fb account' />
                                    </div>
                                </div>
                            </button>
                            <button>
                                <div className="avatar">
                                    <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <Image loading='lazy' src={fb} alt='fb account' />
                                    </div>
                                </div>
                            </button>
                        </div>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;