import React from 'react';
import BlogCard from './cardComp';
import {TypeHeading, SubTypeHeading } from './TypeHeading';
import HeroSection from './HeroSection';
type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
};

const fetchBlogs = async (type?: string , filter?:string): Promise<BlogCardStruct[]> => {
    // Mock fetching blog data (replace with actual API call in production)
    const allBlogs: BlogCardStruct[] = [
        { title: 'Understanding Next.js', description: 'Learn Next.js basics', slug: 'understanding-nextjs' },
        { title: 'React vs Vue', description: 'Compare React and Vue.js', slug: 'react-vs-vue2' },
        { title: 'Advanced TypeScript', description: 'Deep dive into TypeScript', slug: 'advanced-typescript2' },
        { title: 'React vs Vue', description: 'Compare React and Vue.js', slug: 'react-vs-vue' },
        { title: 'Advanced TypeScript', description: 'Deep dive into TypeScript', slug: 'advanced-typescript' },
    ];

    // Filter blogs based on the `type` parameter if provided
    // if (type) {
    //     return allBlogs.filter((blog) => blog.title.toLowerCase().includes(type.toLowerCase()));
    // }

    return allBlogs;
};

const Dropdown = async ({ params }: { params: { type: string } }) => {
    const popularblogs = await fetchBlogs(params.type, 'popular');
    const sidebarBlogs = await fetchBlogs(params.type,'sidebar')
    const recentblogs = await fetchBlogs(params.type, 'recent');
    const upcomingblogs = await fetchBlogs(params.type, 'upcoming');
    const herosectionblogs = await fetchBlogs(params.type , 'fetaured')
    const type = params.type

    return (
        <div>
            <TypeHeading params={{ type }} />
            <SubTypeHeading params={{ type }} />
            {herosectionblogs.length > 0 ? (
                
                <HeroSection blogs={herosectionblogs}/>
            ) : (
                    <p className="text-gray-600">No blogs found for this category.</p>  
            )}
            <h1 className="text-3xl font-bold mb-4">Blogs Related to "{params.type}"</h1>

            
            {popularblogs.length > 0 ? (
                <BlogCard blogs={popularblogs} />
            ) : (
                <p className="text-gray-600">No blogs found for this category.</p>
            )}
            {sidebarBlogs.length > 0 ? (
                <>
                <h1>this is side bar</h1>
                <BlogCard blogs={sidebarBlogs} />
                </>
            ) : (
                <p className="text-gray-600">No blogs found for this category.</p>
            )}
        </div>
    );
};

export default Dropdown;
