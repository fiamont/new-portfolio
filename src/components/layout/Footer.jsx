import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="container-fluid text-center p-2 p-sm-3 p-md-4 p-lg-5">
        <div>
          <a
            href="https://github.com/fiamont"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 fs-1 fs-lg-2"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sofia-montgomery-3175a821a"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 fs-1 fs-lg-2"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="pt-2">
          &copy; {new Date().getFullYear()} Sofia Montgomery portfolio
        </p>
      </footer>
    </div>
  );
}

export default Footer;
