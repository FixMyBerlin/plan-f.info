import React from 'react';
import Smiley4 from './assets/smiley4.svg';
import Smiley3 from './assets/smiley3.svg';
import Smiley2 from './assets/smiley2.svg';
import Smiley1 from './assets/smiley1.svg';

type Props = {
  score: number;
};

export const SmileyScore: React.FC<Props> = ({ score }) => {
  if (score < 25)
    return (
      <div>
        <Smiley4 className="h-10 w-10" />
      </div>
    );
  if (score < 50)
    return (
      <div>
        <Smiley3 className="h-10 w-10" />
      </div>
    );
  if (score < 75)
    return (
      <div>
        <Smiley2 className="h-10 w-10" />
      </div>
    );
  return (
    <div>
      <Smiley1 className="h-10 w-10" />
    </div>
  );
};
