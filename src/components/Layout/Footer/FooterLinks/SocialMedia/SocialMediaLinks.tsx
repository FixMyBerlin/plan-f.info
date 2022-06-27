import React from 'react';
import { Link } from '~/components/Link';
import TwitterIcon from './assets/twitter-icon.svg'; // https://fontawesome.com/icons/twitter?s=brands
import InstagramIcon from './assets/instagram-icon.svg';

export const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 text-white">
      <Link newWindow to="https://twitter.com/planf7">
        <TwitterIcon className="h-5 w-5 hover:text-light-gray" />
      </Link>
      <Link newWindow to="https://www.instagram.com/planf_impulse/">
        <InstagramIcon className="h-5 w-5 hover:text-light-gray" />
      </Link>
    </div>
  );
};
