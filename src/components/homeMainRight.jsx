import { HiDocumentDownload } from "react-icons/hi";
import { SiHashnode } from "react-icons/si";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const HomeMainRight = () => {
  const listStyle =
    "flex items-center laptop:gap-4 font-sans laptop:mb-2 transition-all hover:text-gray-matte";

  return (
    <div className="flex flex-col items-center my-4 gap-4 laptop:items-end flex-grow">
      <div className="text-white flex items-center laptop:gap-4 laptop:text-xl laptop:font-mono laptop:my-16 transition-all hover:text-gray-matte">
        <a
          href={require("assets/Satyam_Pariyar_Resume.pdf")}
          download="Satyam_Pariyar_Resume"
        >
          Download Resume
        </a>
        <HiDocumentDownload />
      </div>
      <ul className="flex gap-4 laptop:gap-0 laptop:flex-col text-white mb-4 laptop:mb-8">
        <li className={listStyle}>
          <img
            src="/assets/peerlist.jpeg"
            alt="peerlist"
            className="w-4 rounded"
          />
          <a
            href="https://hashnode.com/@SatyamP"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peerlist
          </a>
        </li>
        <li className={listStyle}>
          <AiFillGithub />
          <a
            href="https://github.com/pariyar07"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li className={listStyle}>
          <AiOutlineTwitter />
          <a
            href="https://twitter.com/satyamP_js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className={listStyle}>
          <AiFillLinkedin />
          <a
            href="https://www.linkedin.com/in/satyam-pariyar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={listStyle}>
          <SiHashnode />
          <a
            href="https://hashnode.com/@SatyamP"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomeMainRight;
