"use client";

import React, { useState, useEffect } from "react";
import BlogCard from "@/app/(root)/[type]/cardComp";

type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
    imageUrl: string;
};

type Props = {
    initialBlogs: BlogCardStruct[];
};

const fetchBlogs = async (category: string): Promise<BlogCardStruct[]> => {
    // Mock fetching blog data based on category
    const allBlogs: BlogCardStruct[] = [
        { title: 'Understanding Next.js', description: 'Learn Next.js basics', slug: 'understanding-nextjs', imageUrl: "/assets/images/image15.png" },
        { title: 'React vs Vue', description: 'Compare React and Vue.js', slug: 'react-vs-vue', imageUrl: "/assets/images/image15.png" },
        { title: 'Advanced TypeScript', description: 'Deep dive into TypeScript', slug: 'advanced-typescript', imageUrl: "/assets/images/image15.png" },
        { title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd d', description: 'Learn Next.js basics d ', slug: 'understanding-nextjsd', imageUrl: "/assets/images/image15.png" },
        { title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Learn Next.js basics', slug: 'understanding-nextjs', imageUrl: "/assets/images/image15.png" },
        { title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Compare React and Vue.js', slug: 'react-vs-vue2', imageUrl: "/assets/images/image15.png" },
        // Add more blogs as necessary...
    ];

    // Filter blogs based on category
    return allBlogs;
    // return allBlogs.filter((blog) => blog.title.toLowerCase().includes(category.toLowerCase()));
};

// This will run on the server during the initial page load
export async function getServerSideProps() {
    // You can change this to dynamically get category if needed
    const initialBlogs = await fetchBlogs('Games');
    console.log(initialBlogs)// Default category 'Games'
    return {
        props: { initialBlogs }, // Will be passed to the page component as props
    };
}

const UpcomingNavBar = ({ initialBlogs }: Props) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("Games");
    const [blogs, setBlogs] = useState<BlogCardStruct[]>(initialBlogs);

    const handleButtonClick = async (category: string) => {
        setSelectedCategory(category);
        // Fetch new blogs when the category changes
        // const response = await fetch(`/api/blogs?category=${category}`);
        // const data: BlogCardStruct[] = await response.json();
        const data = await fetchBlogs(category); // Mocked API call for now
        setBlogs(data);
    };

    return (
        <>
            <div>
                <div className="p-0 m-0 border-b-4 b-generic-viridian">
                    <button className="bg-generic-viridian text-white px-6 py-2">Upcomings</button>
                </div>
                <div className="flex flex-row justify-around items-center my-4">
                    {['Games', 'Phone', 'Movies', 'More'].map((category) => (
                        <button
                            type="button"
                            key={category}
                            className={`generic-viridian font-bold ${selectedCategory === category ? 'border-b-4 b-generic-viridian' : ''}`}
                            onClick={() => handleButtonClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="border-2 b-generic-viridian p-2">
                <div className="sidebarblogs b-generic-viridian p-0">
                    <BlogCard blogs={blogs} />
                </div>
            </div>
        </>
    );
};

export default UpcomingNavBar;
