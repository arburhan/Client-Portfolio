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
            <div className="flex flex-col md:flex-row justify-evenly items-center" >
                {
                    blogData.map(blog => <BlogCard key={blog._id} blog={blog} />)
                }
            </div>
            <div className="text-center py-8" >
                <button className="btn btn-primary"> Read More Post</button>
            </div>

        </section>
    );
};

export default Blogs;
