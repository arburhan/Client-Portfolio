import Image from 'next/image';
import React from 'react';
//01730171628
const CourseCard = () => {
    return (
        <div className="card w-96 glass">
            <figure>
                <Image src={course1} alt='course'></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;