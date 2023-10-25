import React from "react";
import useSWR from 'swr';
import blogData from '@/data/blogs.json';
import BlogCard from "./BlogCard";
import Title from "@/Components/Shared/Title";


const Blogs = () => {
    return (
        <section className="py-12" >
            <Title name={"Blogs"} />
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
