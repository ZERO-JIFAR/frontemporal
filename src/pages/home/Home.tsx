import AboutUs from "../../components/AboutUs/AboutUs";
import CarouselHome from "./homeComponents/CarouselHome/CarouselHome";
import "./home.css";

const Home = () => {
  return (
    <>
      <CarouselHome />
      <AboutUs/>
    </>
  );
};

export default Home;
