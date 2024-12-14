import React, { useState } from 'react';
import BlogCard from './cardComp';
import { TypeHeading, SubTypeHeading } from './TypeHeading';

type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
};

type DropdownProps = {
    initialBlogs: BlogCardStruct[];
    initialType: string;
};

const fetchBlogsByType = async (type?: string, filter?: string): Promise<BlogCardStruct[]> => {
    // Simulating fetching blogs based on `type` and `filter` (e.g., 'popular', 'recent', 'upcoming')
    const allBlogs: BlogCardStruct[] = [
        { title: 'Understanding Next.js', description: 'Learn Next.js basics', slug: 'understanding-nextjs' },
        { title: 'React vs Vue', description: 'Compare React and Vue.js', slug: 'react-vs-vue' },
        { title: 'Advanced TypeScript', description: 'Deep dive into TypeScript', slug: 'advanced-typescript' },
        { title: 'React vs Vue', description: 'Compare React and Vue.js', slug: 'react-vs-vue' },
        { title: 'Advanced TypeScript', description: 'Deep dive into TypeScript', slug: 'advanced-typescript' },
    ];
    // You can add filtering logic based on `filter` parameter if necessary.
    return allBlogs;
};

const Dropdown = ({ initialBlogs, initialType }: DropdownProps) => {
    const [blogs, setBlogs] = useState<BlogCardStruct[]>(initialBlogs);
    const [selectedType, setSelectedType] = useState<string>(initialType);

    const handleFetchBlogs = async (filter: string) => {
        // Fetch blogs dynamically based on filter (popular, recent, upcoming)
        const fetchedBlogs = await fetchBlogsByType(selectedType, filter);
        setBlogs(fetchedBlogs);
        setSelectedType(filter);  // Update the selected filter type (popular, recent, upcoming)
    };

    return (
        <div>
            <TypeHeading params={{ type: selectedType }} />
            <SubTypeHeading params={{ type: selectedType }} />
            <h1 className="text-3xl font-bold mb-4">Blogs Related to "{selectedType}"</h1>

            <div className="mb-4">
                <button
                    className="mr-2 p-2 bg-blue-500 text-white rounded"
                    onClick={() => handleFetchBlogs('popular')}
                >
                    Popular
                </button>
                <button
                    className="mr-2 p-2 bg-blue-500 text-white rounded"
                    onClick={() => handleFetchBlogs('recent')}
                >
                    Recent
                </button>
                <button
                    className="p-2 bg-blue-500 text-white rounded"
                    onClick={() => handleFetchBlogs('upcoming')}
                >
                    Upcoming
                </button>
            </div>

            {blogs.length > 0 ? (
                <BlogCard blogs={blogs} />
            ) : (
                <p className="text-gray-600">No blogs found for this category.</p>
            )}
        </div>
    );
};

// Static Site Generation: Fetching initial data during build time
export async function getStaticProps() {
    const initialBlogs = await fetchBlogsByType('default', 'popular'); // Fetch popular blogs by default
    return {
        props: {
            initialBlogs,
            initialType: 'popular', // Set initial type as 'popular'
        },
        revalidate: 60, // Revalidate after 60 seconds for fresh data
    };
}

export default Dropdown;
