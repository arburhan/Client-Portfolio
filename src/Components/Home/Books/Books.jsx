import React from 'react';
import booksData from '@/data/books.json';
import BooksCard from '@/Components/Home/Books/BooksCard';
import booksImage from '@/assets/images/Books/unnamed.jpg';
import Title from '@/Components/Shared/Title';

const Books = () => {
    return (
        <section>
            <Title name={"Books"} />
            <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly items-center md: gap-y-12">
                {
                    booksData.map(book => <BooksCard key={book._id} book={book} booksImage={booksImage} />)
                }
            </div>
            <div className="text-center py-8" >
                <button className="btn btn-primary"> See All Books</button>
            </div>
        </section>
    );
};

export default Books;