import React from "react";
import useSWR from 'swr';
import blogData from '@/data/blogs.json';
import BlogCard from "./BlogCard";


const Blogs = () => {
    return (
        <section className="py-12" >
            <div className="text-center my-10" >
                <h1 className=" text-4xl" >Blogs</h1>
            </div>
            <div className="flex justify-evenly items-center" >
                {
                    blogData.map(blog => <BlogCard key={blog._id} blog={blog} />)
                }
            </div>

        </section>
    );
};

export default Blogs;
