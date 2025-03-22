import Banner from "@/components/Home/Banner/Banner";
import LatestServices from "@/components/Home/LatestServices/LatestServices";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner />
      <div className="flex-grow">
        <LatestServices />

        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Home;
