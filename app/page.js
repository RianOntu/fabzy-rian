import Banner from "./components/Banner";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Welcome />
      <div className="paralax">
        <Featured/>
      </div>
    </>
  );
}
