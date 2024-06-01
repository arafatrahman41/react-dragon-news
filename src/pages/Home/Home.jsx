import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Header from "../Shared/Navbar/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header />
      <BreakingNews></BreakingNews>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
            <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 space-y-6">
           {
            news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
           }
        </div>
        <div>
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
