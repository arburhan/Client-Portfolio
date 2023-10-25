import React from 'react';
import Image from 'next/image';
import course1 from '@/assets/images/courses/course1.jpg';
import course2 from '@/assets/images/courses/course2.jpg';
import course3 from '@/assets/images/courses/course3.jpg';

const Courses = () => {
    return (
        <section className='py-10' >
            <div className="text-center my-10" >
                <h1 className=" text-4xl" >Courses</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center">
                <div className="card w-96 glass">
                    <figure>
                        <Image loading='lazy' src={course1} alt='course' className=" h-64"></Image>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary mt-8">Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure>
                        <Image loading='lazy' src={course2} alt='course' className=" h-64"></Image>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary mt-8">Enroll Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure>
                        <Image loading='lazy' src={course3} alt='course' className=" h-64"></Image>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary mt-8">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;