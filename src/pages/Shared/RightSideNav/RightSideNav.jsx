import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
        <IoLogoGoogle size={20} />
          Google
        </button>
        <button className="btn btn-outline w-full">
        <FaGithub size={20} />
          Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-2xl font-semibold mb-3">Find Us on</h2>
       <a className="flex items-center gap-2 p-4 rounded-t-lg border" href="">
            <FaFacebook size={20}></FaFacebook>
            Facebook
        </a>
       <a className="flex items-center gap-2 p-4  border-x" href="">
            <FaTwitter size={20}></FaTwitter>
            Twitter
        </a>
       <a className="flex items-center gap-2 p-4 rounded-b-lg border" href="">
            <FaInstagram size={20}></FaInstagram>
            Instagram
        </a>
      </div>
      <div className="p-4 space-y-3 mb-6 bg-base-200">
        <h2 className="text-2xl font-semibold">Q Zone</h2>
       <img src={qZone1} alt="" />
       <img src={qZone2} alt="" />
       <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
