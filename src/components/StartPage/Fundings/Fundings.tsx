import React from 'react';
import { P } from '~/components/Text';
import BMDVLogo from './assets/bmdv.svg';
import FairSpacesLogo from './assets/fairspaces.svg';
import VeloplanLogo from './assets/veloplan.png';

export const Fundings: React.FC = () => {
  return (
    <div className="flex w-full flex-col px-10 py-16 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col sm:flex-row">
        <div className="flex flex-col">
          <P>Gefördert durch:</P>
          <BMDVLogo height="100" />
        </div>
        <div className="flex flex-col">
          <P>Partner von PlanF:</P>
          <div className="grid grid-cols-2 gap-4">
            <img src={VeloplanLogo} alt="veloplan logo" />
            <FairSpacesLogo />
          </div>
        </div>
      </div>
    </div>
  );
};
