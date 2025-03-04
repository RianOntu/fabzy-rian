import Banner from "./components/Banner";
import ClientReviews from "./components/ClientReviews";
import Featured from "./components/Featured";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
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
        <Featured />
      </div>
      <ClientReviews/>
    </>
  );
}
