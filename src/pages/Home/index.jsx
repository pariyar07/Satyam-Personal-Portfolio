import Navbar from "components/navbar";
import HomeMainLeft from "components/homeMainLeft";
import HomeMainRight from "components/homeMainRight";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col laptop:px-12 laptop:py-12 laptop:gap-24">
          <div className="flex flex-col mt-4 laptop:mt-8">
            <h1 className="text-white font-sans font-bold text-2xl laptop:text-8xl w-full text-center">
              Hello! My name is{" "}
              <span className="font-black text-gray-matte">Satyam</span>👋
            </h1>
            <h1 className="text-white font-sans font-bold text-2xl laptop:text-8xl w-full text-center">
              Based in Gurgaon, India.
            </h1>
          </div>
          <div className="flex flex-col mt-4 laptop:flex-row laptop:mt-8 items-center justify-center">
            <span className="text-gray-matte laptop:hidden block font-mono mb-4">
              Front-end Web Developer
            </span>
            <img
              src="/assets/profile-pic.png"
              alt="Developer Pic"
              className="w-36 laptop:w-80 h-auto laptop:px-4"
            />
            <h2 className="text-white text-sm mt-2 px-2 laptop:text-xl laptop:w-1/3 font-mono font-light text-center">
              I like to craft solid and scalable front-end products with great
              user experience and focus on writing clean, elegant and efficient
              code.
            </h2>
          </div>
        </div>
        <div className="flex flex-col laptop:flex-row laptop:mx-12 laptop:mt-16">
          <HomeMainLeft />
          <HomeMainRight />
        </div>
      </main>
    </>
  );
};

export default Homepage;
