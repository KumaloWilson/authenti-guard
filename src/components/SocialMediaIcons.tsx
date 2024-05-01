
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="flex mt-8">
      <div className="relative cursor-pointer transform transition-transform hover:-translate-y-1">
        <div className="w-12 h-12 rounded-full bg-transparent border-2 border-cyan-400 flex items-center justify-center">
          <FaLinkedin size={24} color="#08C4F3" />
        </div>
      </div>

      <div className="relative cursor-pointer transform transition-transform hover:-translate-y-1 ml-4">
        <div className="w-12 h-12 rounded-full bg-transparent border-2 border-cyan-400 flex items-center justify-center">
          <FaFacebook size={24} color="#08C4F3" />
        </div>
      </div>

      <div className="relative cursor-pointer transform transition-transform hover:-translate-y-1 ml-4">
        <div className="w-12 h-12 rounded-full bg-transparent border-2 border-cyan-400 flex items-center justify-center">
          <FaInstagram size={24} color="#08C4F3" />
        </div>
      </div>

      <div className="relative cursor-pointer transform transition-transform hover:-translate-y-1 ml-4">
        <div className="w-12 h-12 rounded-full bg-transparent border-2 border-cyan-400 flex items-center justify-center">
          <FaGithub size={24} color="#08C4F3" />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
