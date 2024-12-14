import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
    imageUrl: string; // Add image URL property for dynamic image loading
};

type BlogCardProps = {
    blogs: BlogCardStruct[];
};

export default function BlogCard({ blogs }: BlogCardProps) {
    if (!blogs || blogs.length === 0) {
        return <p className="text-gray-600">No blogs available.</p>;
    }

    return (
        <div className="blog-cards-container">
            {blogs.map((blog) => (
                <div key={blog.slug} className="blogcard">
                    <Link
                        href={`/blogs/${blog.slug}`}
                        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        {/* Using next/image for better image handling */}
                        <Image
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                            src={blog.imageUrl} // Dynamic image URL
                            alt={blog.title}
                            width={200} // Set width for static or dynamic image handling
                            height={300} // Set height for static or dynamic image handling
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {blog.title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {blog.description}
                            </p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
