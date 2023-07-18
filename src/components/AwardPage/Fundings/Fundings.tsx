import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { P } from '~/components/Text';
import BMDVLogo from './assets/bmdv.svg';
import FairSpacesLogo from './assets/fairspaces.svg';

export const Fundings: React.FC = () => {
  return (
    <div className="flex w-full flex-col px-10 py-16 sm:py-24">
      <div className="flex max-w-3xl flex-col sm:flex-row sm:gap-24">
        <div className="flex flex-col justify-between">
          <P className="!-mb-6">Gefördert durch:</P>
          <BMDVLogo width={160} />
        </div>
        <div className="flex flex-col justify-between">
          <P>Ein Projekt von:</P>
          <div className="flex items-center gap-6 pb-4 md:gap-10">
            <FairSpacesLogo width={160} />
            <StaticImage
              src="./assets/FixMyCity.png"
              className="w-[80px] overflow-hidden"
              alt="FixMyCity Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
