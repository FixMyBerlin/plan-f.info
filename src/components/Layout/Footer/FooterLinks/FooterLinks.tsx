import clsx from 'clsx';
import React from 'react';
import { Link } from '~/components/core/links/Link';

const footerLinks = [
  { name: 'Kontakt & Impressum', to: '/impressum/' },
  { name: 'Datenschutz', to: '/datenschutz/' },
  {
    name: 'Newsletter',
    to: 'https://21c51c7f.sibforms.com/serve/MUIEAGplIkaHl15aR0t77TNjvH7cDv4l8zcUfOrncK7K6guRKNllBJWifyt4jlFptCKiYzTo0bG-8Yki2vBvV_zEa-iaSrhDdFkL672BPNxBpijMD8iCnMJOFOiTmHDYSg_g2EuFAd2YLTRe5BTKYvjiNkqDQZT4SHRCgemWbXl8C60kIzzwmBd4uYzO65v3DYJvlmpHqLaRyVPz/',
  },
];

type Props = {
  className?: string;
};

export const FooterLinks: React.FC<Props> = ({ className }) => {
  return (
    <ul className={clsx('flex justify-start gap-4 sm:justify-end', className)}>
      {footerLinks.map((item) => (
        <li key={item.name}>
          <Link href={item.to} className="text-gray-400">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
