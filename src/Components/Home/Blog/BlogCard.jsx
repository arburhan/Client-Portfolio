import React from 'react';

const BlogCard = ({ blog }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={blog.image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {blog.name.length > 25 ? blog.name.slice(0, 18) + "..." : blog.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{blog.description.length > 130 ? blog.description.slice(0, 120) + "..." : blog.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{blog.category}</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;