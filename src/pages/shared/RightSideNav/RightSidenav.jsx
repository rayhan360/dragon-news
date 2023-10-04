import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSidenav = () => {
    return (
        <div>
            <div className="space-y-3 ">
                <h2 className="text-2xl font-semibold">Log in with</h2>
                <button className="btn btn-outline btn-info w-full">
                    <FaGoogle></FaGoogle>
                    Log In with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Log In with GitHub
                </button>
            </div>

            <div className="space-y-3 my-5">
                <h2 className="text-2xl font-semibold">Find Us on</h2>
                <div>
                    <a className="flex items-center text-xl gap-3 border p-4 rounded-t-lg">
                        <FaFacebook className="text-2xl"></FaFacebook>
                        Facebook
                    </a>
                    <a className="flex items-center text-xl gap-3 border p-4">
                        <FaInstagram className="text-2xl"></FaInstagram>
                        Instagram
                    </a>
                    <a className="flex items-center text-xl gap-3 border p-4 rounded-b-lg">
                        <FaTwitter className="text-2xl"></FaTwitter>
                        Twitter
                    </a>
                </div>
            </div>

            {/* Q-zone */}
            <div className='p-4 space-y-3 mb-6 bg-[#F3F3F3]'>
                <h2 className="text-2xl font-semibold">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSidenav;