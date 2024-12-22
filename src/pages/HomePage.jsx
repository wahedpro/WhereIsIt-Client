import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import HowItWorks from "../components/HowItWorks/HowItWorks";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <AboutUs></AboutUs>
        </div>
    );
};

export default HomePage;