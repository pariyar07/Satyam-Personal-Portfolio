import Navbar from "components/navbar";
import HomeMainLeft from "components/homeMainLeft";
import HomeMainRight from "components/homeMainRight";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col px-12 py-12 gap-24">
          <div className="flex flex-col mt-8">
            <h1 className="text-white font-sans font-bold text-8xl w-full text-center">
              Hello! My name is{" "}
              <span className="font-black text-gray-matte">Satyam</span>👋
            </h1>
            <h1 className="text-white font-sans font-bold text-8xl w-full text-center">
              Based in Gurgaon, India.
            </h1>
          </div>
          <div className="flex mt-8 items-center justify-center">
            <h2 className="text-white text-xl w-1/3 font-mono font-light text-center">
              I like to craft solid and scalable front-end products with great
              user experience and focus on writing clean, elegant and efficient
              code.
            </h2>
            <img
              src="/assets/profile-pic.png"
              alt="Developer Pic"
              className="w-80 h-auto px-4"
            />
          </div>
        </div>
        <div className="flex mx-12 mt-16">
          <HomeMainLeft />
          <HomeMainRight />
        </div>
      </main>
    </>
  );
};

export default Homepage;
