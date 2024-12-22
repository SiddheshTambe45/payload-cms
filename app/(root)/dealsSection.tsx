
import Link from "next/link";
import Image from "next/image";

type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
    imageUrl: string;
};



const fetchMobileDeals = async (): Promise<BlogCardStruct[]> => {
    // Mock fetching blog data (replace with actual API call in production)
    const mobiledeals: BlogCardStruct[] = [
        { title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd d', description: 'Learn Next.js basics d ', slug: 'understanding-nextjsd', imageUrl: "/assets/images/image15.png" },
        { title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Learn Next.js basics', slug: 'understanding-nextjs', imageUrl: "/assets/images/image15.png" },
        { title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Compare React and Vue.js', slug: 'react-vs-vue2', imageUrl: "/assets/images/image15.png" },
        { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescript2', imageUrl: "/assets/images/image15.png" },
        { title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Compare React and Vue.js', slug: 'react-vs-vue', imageUrl: "/assets/images/image15.png" },
        { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescript', imageUrl: "/assets/images/image15.png" },
        // { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescriptv', imageUrl: "/assets/images/image15.png" },
    ];

    // Filter blogs based on the `type` parameter if provided
    // if (type) {
    //     return allBlogs.filter((blog) => blog.title.toLowerCase().includes(type.toLowerCase()));
    // }


    return mobiledeals;
};

    const fetchtechDeals = async (): Promise<BlogCardStruct[]> => {
    // Mock fetching blog data (replace with actual API call in production)
    const techdeals: BlogCardStruct[] = [
        { title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd d', description: 'Learn Next.js basics d ', slug: 'understanding-nextjsd', imageUrl: "/assets/images/image15.png" },
        { title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Learn Next.js basics', slug: 'understanding-nextjs', imageUrl: "/assets/images/image15.png" },
        { title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Compare React and Vue.js', slug: 'react-vs-vue2', imageUrl: "/assets/images/image15.png" },
        { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescript2', imageUrl: "/assets/images/image15.png" },
        { title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Compare React and Vue.js', slug: 'react-vs-vue', imageUrl: "/assets/images/image15.png" },
        { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescript', imageUrl: "/assets/images/image15.png" },
        // { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescriptv', imageUrl: "/assets/images/image15.png" },
    ];

    // Filter blogs based on the `type` parameter if provided
    // if (type) {
    //     return allBlogs.filter((blog) => blog.title.toLowerCase().includes(type.toLowerCase()));
    // }
    

    return techdeals;
};


const TechDealSection = async () => {
    const techdeals = await fetchtechDeals();

    return (
        <>
            <section className="Tech-Deals mt-10 p-3">
                <Link className="h5 generic-viridian" href="/tech-deals">
                    <span className="font-bold">Tech Deals</span> | See All
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
                    {techdeals.slice(0, 4).map((deal) => (
                        <Link
                            key={deal.slug}
                            className="flex flex-col items-start"
                            href={`/tech-deals/${deal.slug}`}
                        >
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src={deal.imageUrl}
                                    alt={deal.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-2 text-left text-lg font-semibold">{deal.title}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

const MobileDealSection = async () => {
    const mobiledeals = await fetchMobileDeals();

    return (
        <>
            <section className="Mobile-Deals mt-10 p-3">
                <Link className="h5 generic-viridian" href="/mobile-deals">
                    <span className="font-bold">Mobile Deals</span> | See All
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
                    {mobiledeals.slice(0, 4).map((deal) => (
                        <Link
                            key={deal.slug}
                            className="flex flex-col items-start"
                            href={`/mobile-deals/${deal.slug}`}
                        >
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src={deal.imageUrl}
                                    alt={deal.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-2 text-left text-lg font-semibold">{deal.title}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};


export {TechDealSection , MobileDealSection}