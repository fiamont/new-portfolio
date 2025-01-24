import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="container-fluid text-center p-2 p-sm-3 p-md-4 p-lg-5">
        <div>
          <FaLinkedin className="mx-2 fs-1 fs-lg-2" />
          <FaGithub className="mx-2 fs-1 fs-lg-2" />
        </div>
        <p className="pt-2">
          &copy; {new Date().getFullYear()} Sofia Montgomery portfolio
        </p>
      </footer>
    </div>
  );
}

export default Footer;
