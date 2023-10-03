import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex h-[8vh] items-center bg-gray-200 my-8">
            <button className="bg-[#D72050] px-5 py-2 ml-2 text-white">Latest</button>
            <Marquee pauseOnHover={true} speed={80} className="ml-5">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;