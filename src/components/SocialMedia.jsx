import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/sagarbhadauriya/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a
        href="https://github.com/sagarbhadauriya"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://leetcode.com/DevSagar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode />
      </a>
    </div>
  </div>
);

export default SocialMedia;
