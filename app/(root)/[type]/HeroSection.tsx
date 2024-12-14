import Link from "next/link";
import Image from "next/image";
import imgrec from "./Untitled.jpg";

type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
    imageUrl: string;
};

type BlogCardProps = {
    blogs: BlogCardStruct[];
};

const HeroSection = ({ blogs }: BlogCardProps) => {
    if (!blogs || blogs.length === 0) {
        return <p className="text-gray-600">No blogs available.</p>;
    }

    const firstTwoBlogs = blogs.slice(0, 2);
    const remainingBlogs = blogs.slice(2);

    return (
        <div className="hero-section">
            {/* First two cards */}
            <div className="flex justify-between mb-4 space-x-4 items-stretch">
                {/* First card with 16:9 aspect ratio */}
                <Link
                    href={`/blogs/${firstTwoBlogs[0]?.slug}`}
                    className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    style={{ flex: "0 0 70%" }}
                >
                    <div className="relative w-full" style={{ aspectRatio : "16/9" }}>
                        <Image
                            src={imgrec}
                            alt={firstTwoBlogs[0]?.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                        />
                    </div>
                    <div className="flex-grow flex flex-col p-4">
                        <h2 className="text-xl font-semibold">{firstTwoBlogs[0]?.title}</h2>
                        <p className="text-gray-600">{firstTwoBlogs[0]?.description}</p>
                    </div>
                </Link>

                {/* Second card with 1:1 aspect ratio */}
                <Link
                    href={`/blogs/${firstTwoBlogs[1]?.slug}`}
                    className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    style={{ flex: "0 0 30%" }}
                >
                    <div className="relative w-full" style={{ aspectRatio : "3/3.95" }}>
                        <Image
                            src={imgrec}
                            alt={firstTwoBlogs[1]?.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                        />
                    </div>
                    <div className="flex-grow flex flex-col p-4">
                        <h2 className="text-xl font-semibold">{firstTwoBlogs[1]?.title}</h2>
                        <p className="text-gray-600">{firstTwoBlogs[1]?.description}</p>
                    </div>
                </Link>
            </div>

            {/* Remaining blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {remainingBlogs.map((blog) => (
                    <Link
                        key={blog.slug}
                        href={`/blogs/${blog.slug}`}
                        className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                            <Image
                                src={blog.imageUrl}
                                alt={blog.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{blog.title}</h2>
                            <p className="text-gray-600">{blog.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
