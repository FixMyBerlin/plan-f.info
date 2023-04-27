import clsx from 'clsx';
import React from 'react';
import { H2 } from '../Text';

type Props = {
  title: string;
  list: string[];
  className?: string;
};
export const CardText: React.FC<Props> = ({ title, list, className }) => {
  return (
    <div className={clsx(className, 'rounded-b-3xl bg-gray-50')}>
      <H2 className=" bg-lime-200 p-4">{title}</H2>
      <div className="-mt-6 p-4">
        <ul className=" pl-4">
          {list.map((item) => (
            <li className="list-disc">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
