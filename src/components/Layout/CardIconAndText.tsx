import React, { ReactNode } from 'react';
import { Link } from '../Link';

type Props = {
  link: string;
  icon: ReactNode;
  children: ReactNode;
};
export const CardIconAndText: React.FC<Props> = ({ children, link, icon }) => {
  return (
    <Link to={link}>
      <div className="flex flex-col gap-3 rounded-b-3xl bg-white p-6 sm:flex-row sm:items-center sm:gap-6 lg:p-8">
        {icon}
        <div>{children}</div>
      </div>
    </Link>
  );
};
