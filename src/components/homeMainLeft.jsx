import { SiJavascript, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const HomeMainLeft = () => {
  return (
    <div className="text-white mb-16">
      <div className="flex flex-col gap-12">
        <div>
          <h1 className="text-4xl font-sans font-bold mb-10">
            Weapons of Choice
          </h1>
          <ul className="flex flex-wrap mx-4 gap-6">
            <li className="flex flex-col items-center font-mono font-semibold transition-all hover:text-gray-matte hover:animate-pulse">
              <SiJavascript />
              <p>Javascript</p>
            </li>
            <li className="flex flex-col items-center font-mono font-semibold transition-all hover:text-gray-matte hover:animate-pulse">
              <AiFillHtml5 />
              <p>HTML</p>
            </li>
            <li className="flex flex-col items-center font-mono font-semibold transition-all hover:text-gray-matte hover:animate-pulse">
              <IoLogoCss3 />
              <p>CSS</p>
            </li>
            <li className="flex flex-col items-center font-mono font-semibold transition-all hover:text-gray-matte hover:animate-pulse">
              <FaReact />
              <p>React</p>
            </li>
            <li className="flex flex-col items-center font-mono font-semibold transition-all hover:text-gray-matte hover:animate-pulse">
              <SiRedux />
              <p>Redux</p>
            </li>
            <li className="flex flex-col items-center font-mono font-semibold transition-all hover:text-gray-matte hover:animate-pulse">
              <SiTailwindcss />
              <p>Tailwind</p>
            </li>
            <li className="flex flex-col items-center font-mono font-semibold transition-all hover:text-gray-matte hover:animate-pulse">
              <FaBootstrap />
              <p>Bootstrap</p>
            </li>
            <li className="flex flex-col items-center font-mono font-semibold transition-all hover:text-gray-matte hover:animate-pulse">
              <AiFillGithub />
              <p>Github</p>
            </li>
            <li className="flex flex-col items-center font-mono font-semibold transition-all hover:text-gray-matte hover:animate-pulse">
              <FaGitAlt />
              <p>Git</p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-4xl font-sans font-bold mb-10">Projects</h1>
          <ul className="flex flex-wrap gap-6 mx-6">
            <li className="flex items-center font-mono font-semibold transition-all hover:text-gray-matte">
              <VscDebugBreakpointLog />
              <a href="https://waldo-ui.netlify.app/">Component Library</a>
            </li>
            <li className="flex items-center font-mono font-semibold transition-all hover:text-gray-matte">
              <VscDebugBreakpointLog />
              <a href="https://shoe-dog.netlify.app/">E-Commerce</a>
            </li>
            <li className="flex items-center font-mono font-semibold transition-all hover:text-gray-matte">
              <VscDebugBreakpointLog />
              <a href="https://deal-notes.netlify.app/">Notes App</a>
            </li>
            <li className="flex items-center font-mono font-semibold transition-all hover:text-gray-matte">
              <VscDebugBreakpointLog />
              <a href="https://hyperstream.netlify.app/">Video Library</a>
            </li>
            <li className="flex items-center font-mono font-semibold transition-all hover:text-gray-matte">
              <VscDebugBreakpointLog />
              <a href="https://github.com/pariyar07">Social Media</a>
            </li>
            <li className="font-mono font-semibold transition-all text-gray-matte hover:text-white">
              <a href="https://github.com/pariyar07">See More...</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeMainLeft;
