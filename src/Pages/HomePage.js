import { Box } from "@chakra-ui/react";
import Banner from "../Components/Banner";
import Flights from "../Components/Flights";
import Footer from "../Components/Footer";
import Island from "../Components/Island";
import Navbar from "../Components/NavBar";
import Packages from "../Components/Packages";
import Testimonials from "../Components/Testimonials";

const HomePage = ({isLoggedIn, setFetchAgain, fetchAgain}) => {

  console.log('aedfasefsd', isLoggedIn);

  return (
    <>
      {/* <Box display={"flex"} flexDir = "column" justifyContent={"center"} gap = "100px"> */}
      <Navbar isLoggedIn={isLoggedIn} setFetchAgain = {setFetchAgain} fetchAgain={fetchAgain} />
      <Banner />
      <Flights />
      <Packages />
      <Island />
      <Testimonials />
      <Footer />
      {/* </Box> */}
    </>
  );
};

export default HomePage;
