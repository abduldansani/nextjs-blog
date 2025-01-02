import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t-2 border-textInLight2 dark:border-textInDark2">
      <div className="container flex flex-col-reverse md:flex-row gap-4 justify-between items-center py-4">
        <p>&copy; Amsoshi Language Services {new Date().getFullYear()}</p>
        <div className="flex gap-4">
          <FaFacebook className="size-6" />
          <FaXTwitter className="size-6" />
          <FaInstagram className="size-6" />
          <FaPinterest className="size-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
