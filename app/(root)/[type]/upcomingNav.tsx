import BlogCard from "./cardComp";

type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
    imageUrl: string; // Add image URL property for dynamic image loading
};

type BlogCardProps = {
    blogs: BlogCardStruct[];
};
const UpcomingNavBar = ({ params }: { params: { blogs: BlogCardProps } }) => {

    return (
        <>
            {/* <div className="googleadvertisement "> */}
                {/* <h3>advertisement comes here</h3> */}
            {/* </div> */}
            <div>
                <div className="p-0 m-0 border-b-4 b-generic-viridian">
                    <button className="bg-generic-viridian text-white px-6 py-2">Upcomings</button>
                </div>
                <div className="flex flex-row justify-around items-center my-4">
                    {['Games', 'Phone', 'Movies', 'More'].map((e) => (
                        <button type="button" key={e} className="generic-viridian font-bold">
                            <span className={`${e === 'Games' ? 'border-b-4 b-generic-viridian' : ''}`}>
                                {e}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="sidebarblogs border-2 b-generic-viridian p-0">
                <BlogCard blogs={params.blogs} />
            </div>

            {/* // <div className="googleadvertisement"> */}
                {/* // <h3>advertisement comes here</h3> */}
            {/* // </div> */}

        </>
    )
}

export default UpcomingNavBar