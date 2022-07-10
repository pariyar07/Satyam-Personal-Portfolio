import { HiDocumentDownload } from "react-icons/hi";
import { SiHashnode } from "react-icons/si";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const HomeMainRight = () => {
  return (
    <div className="flex justify-center flex-grow">
      <ul className="text-white mb-8">
        <li className="flex items-center gap-4 text-xl font-mono my-16 transition-all hover:text-gray-matte">
          <a href="https://github.com/">Download Resume</a>
          <HiDocumentDownload />
        </li>
        <li className="flex items-center gap-4 font-sans mb-2 transition-all hover:text-gray-matte">
          <a
            href="https://github.com/pariyar07"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <AiFillGithub />
        </li>
        <li className="flex items-center gap-4 font-sans mb-2 transition-all hover:text-gray-matte">
          <a
            href="https://twitter.com/satyamP_js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <AiOutlineTwitter />
        </li>
        <li className="flex items-center gap-4 font-sans mb-2 transition-all hover:text-gray-matte">
          <a
            href="https://www.linkedin.com/in/satyam-pariyar-761901195/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <AiFillLinkedin />
        </li>
        <li className="flex items-center gap-4 font-sans mb-2 transition-all hover:text-gray-matte">
          <a
            href="https://satyampariyar.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <SiHashnode />
        </li>
      </ul>
    </div>
  );
};

export default HomeMainRight;
