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
const TypeSideBar = ({ params }: { params: { blogs: BlogCardProps } }) => {

    return (
        <>
            <div className="googleadvertisement">
                <h3>advertisement comes here</h3>
            </div>

            <div className="sidebarblogs">
                <BlogCard blogs={params.blogs} />
            </div>

            <div className="googleadvertisement">
                <h3>advertisement comes here</h3>
            </div>

        </>
    )
}

export default TypeSideBar