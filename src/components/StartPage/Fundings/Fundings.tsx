import React from 'react';
import BMDVLogo from './assets/bmdv.svg';
import VeloplanLogo from './assets/veloplan.png';
import fairSpacesLogo from './assets/fairspaces.png';

export const Fundings: React.FC = () => {
  return (
    <div className="flex flex-row pl-2 pr-4">
      <BMDVLogo className="mb-auto h-32" />
      <div className="grow-0">
        <span className="text-[10px] text-dark-gray">Partner Plan F</span>
        <img
          className="h-20 object-scale-down"
          src={VeloplanLogo}
          alt="veloplan logo"
        />
      </div>
      <div className="mx-10 flex grow-0 self-center">
        <img
          className="h-20 object-scale-down"
          src={fairSpacesLogo}
          alt="fair spaces Logo"
        />
      </div>
    </div>
  );
};
