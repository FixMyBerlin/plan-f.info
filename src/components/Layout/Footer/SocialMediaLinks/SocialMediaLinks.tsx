import React from 'react';
import { Link } from '~/components/core/links/Link';
import InstagramIcon from './assets/instagram-icon.svg';
import TwitterIcon from './assets/twitter-icon.svg'; // https://fontawesome.com/icons/twitter?s=brands

export const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 text-gray-400">
      <Link href="https://twitter.com/planf7" blank>
        <TwitterIcon className="h-5 w-5" />
      </Link>
      <Link href="https://www.instagram.com/planf_impulse/" blank>
        <InstagramIcon className="h-5 w-5" />
      </Link>
    </div>
  );
};
