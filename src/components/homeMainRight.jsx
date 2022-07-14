import { HiDocumentDownload } from "react-icons/hi";
import { SiHashnode } from "react-icons/si";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const HomeMainRight = () => {
  return (
    <div className="flex flex-col items-center my-4 gap-4 laptop:items-end flex-grow">
      <div className="text-white flex items-center laptop:gap-4 laptop:text-xl laptop:font-mono laptop:my-16 transition-all hover:text-gray-matte">
        <a href="https://github.com/">Download Resume</a>
        <HiDocumentDownload />
      </div>
      <ul className="flex gap-4 laptop:gap-0 laptop:flex-col text-white mb-4 laptop:mb-8">
        <li className="flex items-center laptop:gap-4 font-sans laptop:mb-2 transition-all hover:text-gray-matte">
          <a
            href="https://github.com/pariyar07"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <AiFillGithub />
        </li>
        <li className="flex items-center laptop:gap-4 font-sans laptop:mb-2 transition-all hover:text-gray-matte">
          <a
            href="https://twitter.com/satyamP_js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <AiOutlineTwitter />
        </li>
        <li className="flex items-center laptop:gap-4 font-sans laptop:mb-2 transition-all hover:text-gray-matte">
          <a
            href="https://www.linkedin.com/in/satyam-pariyar-761901195/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <AiFillLinkedin />
        </li>
        <li className="flex items-center laptop:gap-4 font-sans laptop:mb-2 transition-all hover:text-gray-matte">
          <a
            href="https://hashnode.com/@SatyamP"
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
