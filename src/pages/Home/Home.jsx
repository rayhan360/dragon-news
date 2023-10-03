import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSidenav from "../shared/RightSideNav/RightSidenav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="font-poppins">This is home section</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 text-center">
                    <p className="text-3xl">news comming soon</p>
                </div>
                <div className=""><RightSidenav></RightSidenav></div>
            </div>
        </div>
    );
};

export default Home;