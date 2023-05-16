import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React, { useState } from 'react';
import { LinkButtonWithArrow } from '../PageTopic/LinkButtonWithArrow';
import { H2, H3 } from '../Text';

type Props = {
  links: readonly {
    readonly url: string;
    readonly display: string;
  }[];
  title: string;
  titleMono?: boolean;
  className?: string;
};
export const LinkListBlackButton: React.FC<Props> = ({
  links,
  title,
  className,
  titleMono = false,
}) => {
  const [isExpand, setIsExpand] = useState(false);
  if (!links.length) return null;

  if (links.length < 3)
    return (
      <div className={clsx(className)}>
        {!titleMono ? <H3 className="uppercase">{title}</H3> : <H2>{title}</H2>}
        <div className="flex flex-col items-start gap-5">
          {links.map((resource) => (
            <LinkButtonWithArrow href={resource.url} key={resource.url}>
              {resource.display || resource.url}
            </LinkButtonWithArrow>
          ))}
        </div>
      </div>
    );

  return (
    <div className={clsx(className)}>
      {!titleMono ? <H3 className="uppercase">{title}</H3> : <H2>{title}</H2>}
      <div className="flex flex-col items-start gap-5">
        {links.slice(0, 2).map((resource) => (
          <LinkButtonWithArrow href={resource.url} key={resource.url}>
            {resource.display || resource.url}
          </LinkButtonWithArrow>
        ))}
        {isExpand &&
          links.slice(2).map((resource) => (
            <LinkButtonWithArrow href={resource.url} key={resource.url}>
              {resource.display || resource.url}
            </LinkButtonWithArrow>
          ))}
        <button
          className="flex items-center gap-2"
          type="button"
          onClick={() => setIsExpand(!isExpand)}
        >
          {isExpand ? (
            <MinusIcon className="h-8 rounded-full border border-black p-1" />
          ) : (
            <PlusIcon className="h-8 rounded-full border border-black p-1" />
          )}
          <p className=" whitespace-nowrap">{`${
            isExpand ? 'Weniger' : 'Mehr'
          } anzeigen`}</p>
        </button>
      </div>
    </div>
  );
};
