import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSidenav from "../shared/RightSideNav/RightSidenav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom"
import News from "./News";

const Home = () => {

    const news = useLoaderData()
    // console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 text-center">
                    {
                        news.map(aNews => <News key={aNews._id} news={aNews}></News>)
                    }
                </div>
                <div className=""><RightSidenav></RightSidenav></div>
            </div>
        </div>
    );
};

export default Home;