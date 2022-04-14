import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.facebook.com/klint.keown">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/cobaltbass">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;