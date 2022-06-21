import React from 'react';
import BMDVLogo from './assets/bmdv.svg';
import VeloplanLogo from './assets/veloplan.jpg';

export const Fundings: React.FC = () => {
  return (
    <div className="flex flex-row">
      <BMDVLogo />
      <div className="mt-4">
        <p className="text-[12px] text-dark-gray">Partner Plan F:</p>
        <img className="scale-50" src={VeloplanLogo} alt="veloplan logo" />
      </div>
    </div>
  );
};
