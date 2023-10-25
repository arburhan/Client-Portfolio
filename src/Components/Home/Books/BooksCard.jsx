import Image from 'next/image';
import React from 'react';

const BooksCard = ({ booksImage, book }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <Image loading='lazy' src={booksImage} alt='books image' className=' w-[220px] rounded-lg' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.name}</h2>
                <h3>Author: {book.author}</h3>
                <h5>Publication: {book.publication}</h5>
                {/* <p>{book.description}</p> */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read Now</button>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;