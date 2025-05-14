import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" text-white py-6 px-10">
      <div className="max-w-4xl mx-auto flex justify-center gap-8 text-xl">
        <a
          href="mailto:mohasim3283@gmail..com"
          aria-label="Email"
          className="hover:text-secondry transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/mohasim328"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-secondry transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/mohasim328"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-secondry transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/mohasim328"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="hover:text-secondry transition"
        >
          <FaXTwitter />
        </a>
      </div>

      <p className="text-center text-sm mt-4 text-gray-400">
       copyright &copy; {new Date().getFullYear()} Mo Hasim . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
