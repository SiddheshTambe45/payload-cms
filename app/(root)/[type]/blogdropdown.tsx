import React from 'react';
import BlogCard from './cardComp';
import {TypeHeading, SubTypeHeading } from './TypeHeading';
import HeroSection from './HeroSection';
import TypeSideBar from './sidebar';
type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
    imageUrl: string;
};

const fetchBlogs = async (type?: string , filter?:string): Promise<BlogCardStruct[]> => {
    // Mock fetching blog data (replace with actual API call in production)
    const allBlogs: BlogCardStruct[] = [
        { title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd d', description: 'Learn Next.js basics d ', slug: 'understanding-nextjsd', imageUrl: "/assets/images/image15.png" },
        { title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Learn Next.js basics', slug: 'understanding-nextjs', imageUrl: "/assets/images/image15.png" },
        { title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Compare React and Vue.js', slug: 'react-vs-vue2', imageUrl : "/assets/images/image15.png" },
        { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescript2' , imageUrl : "/assets/images/image15.png"},
        { title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Compare React and Vue.js', slug: 'react-vs-vue' , imageUrl : "/assets/images/image15.png"},
        { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescript', imageUrl : "/assets/images/image15.png" },
    ];

    // Filter blogs based on the `type` parameter if provided
    // if (type) {
    //     return allBlogs.filter((blog) => blog.title.toLowerCase().includes(type.toLowerCase()));
    // }
    if (filter === "sidebar") {
        return allBlogs.slice(1)
    }

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
        // <div>
        <section className="popular-recent mt-8 lg:grid lg:grid-cols-3">

            <section className="lg:col-span-2 px-3">
                <div className="border border-y-2 border-x-0 flex flex-row gap-8 my-4">
                    <button type="button" className="h6 generic-viridian">
                        Popular
                    </button>
                    <button type="button" className="h6 generic-viridian">
                        Recent
                    </button>
                    <button type="button" className="h6 generic-viridian">
                        upcoming
                    </button>
                </div>
                {popularblogs.length > 0 ? (
                    <BlogCard blogs={popularblogs} />
                ) : (
                    <p className="text-gray-600">No blogs found for this category.</p>
                )}
            </section>

            {/* <TypeHeading params={{ type }} /> */}
            {/* <SubTypeHeading params={{ type }} /> */}
            {/* {herosectionblogs.length > 0 ? (
                
                <HeroSection blogs={herosectionblogs}/>
            ) : (
                    <p className="text-gray-600">No blogs found for this category.</p>  
            )}
            <h1 className="text-3xl font-bold mb-4">Blogs Related to "{params.type}"</h1> */}

            
            <section className='lg:col-span-1 px-3'>
                <div className="border-gray-400 border w-full h-[230px] my-4"></div>

                

            {sidebarBlogs.length > 0 ? (
                <>
                {/* <h1>this is side bar</h1> */}
                        {/* <BlogCard blogs={sidebarBlogs} /> */}
                        <TypeSideBar params={{blogs : sidebarBlogs.slice(1)}} />
                </>
            ) : (
                <p className="text-gray-600">No blogs found for this category.</p>
            )}
            <div className="border-gray-400 border w-full h-[230px] my-4"></div>
            </section>
            {/* </div> */}
        </section>
    );
};

export default Dropdown;
