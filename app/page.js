"use client";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import ClientReviews from "./components/ClientReviews";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import NewArrival from "./components/NewArrival";
import ScrollToTopButton from "./components/ScrollToTop";
import ShopTheLook from "./components/ShopTheLook";
import Subscribe from "./components/Subscribe";
import Video from "./components/Video";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Welcome />
      <div className="paralax">
        <Featured />
      </div>
      <Grid />
      <div className="paralax1">
        <NewArrival />
      </div>
      <ShopTheLook />
      <ClientReviews />
      <div className="paralax">
        <Video />
      </div>
      <ScrollToTopButton />
      <Blog />
      <Subscribe />
      <Footer />
    </>
  );
}
