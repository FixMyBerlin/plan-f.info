import React from 'react';

import { Link } from '~/components/links/Link';
import FacebookIcon from './assets/facebook-icon.svg'; // https://fontawesome.com/icons/twitter?s=brands
import GithubIcon from './assets/github-icon.svg';
import InstagramIcon from './assets/instagram-icon.svg';
import TwitterIcon from './assets/twitter-icon.svg'; // https://fontawesome.com/icons/twitter?s=brands

export const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 text-gray-400">
      <Link href="https://twitter.com/planf7">
        <TwitterIcon className="h-5 w-5" />
      </Link>
      <Link href="https://www.instagram.com/planf_impulse/">
        <InstagramIcon className="h-5 w-5" />
      </Link>
      {/* TODO gibt es diese Links? */}
      <Link href="https://twitter.com/planf7">
        <FacebookIcon className="h-5 w-5" />
      </Link>
      {/* TODO gibt es diese Links? */}
      <Link href="https://www.instagram.com/planf_impulse/">
        <GithubIcon className="h-5 w-5" />
      </Link>
    </div>
  );
};
