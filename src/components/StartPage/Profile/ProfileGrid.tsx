import React from 'react';
import { ProfileData } from 'src/types/ProfileData';
import { QuoteBox } from '../QuoteBox';
import { Profile } from './Profile';

type Props = {
  profiles: ProfileData[];
};

export const ProfileGrid: React.FC<Props> = ({ profiles }) => {
  return (
    <div className="grid gap-16 lg:grid-cols-2">
      {profiles.map((profile: ProfileData, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={profile.name}>
            <Profile profile={profile} mirror={isEven} />
            <QuoteBox mirror={isEven}>{profile.quote}</QuoteBox>
          </div>
        );
      })}
    </div>
  );
};
