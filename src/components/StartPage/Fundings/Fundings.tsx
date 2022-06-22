import React from 'react';
import BMDVLogo from './assets/bmdv.svg';
import VeloplanLogo from './assets/veloplan.jpg';

export const Fundings: React.FC = () => {
  return (
    <div className="flex flex-row">
      <BMDVLogo />
      <div className="ml-6">
        <span className="text-[10px] text-dark-gray">Partner Plan F</span>
        <img src={VeloplanLogo} alt="veloplan logo" />
      </div>
    </div>
  );
};
