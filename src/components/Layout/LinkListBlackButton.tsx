import { Transition } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import React, { useState } from 'react';
import { LinkButtonWithArrow } from '../PageTopic/LinkButtonWithArrow';
import { H2, H3 } from '../Text';
import { trackEvent } from '../matomo/trackEvent';

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

  const toggleExpanded = () => {
    setIsExpand((prev) => {
      trackEvent({
        category: `Show more "${title}" on ${window.location.pathname}`,
        action: prev ? 'Click show more' : 'Click show less',
        label: `List has ${links.length} items`,
      });
      return !prev;
    });
  };

  if (links.length < 3)
    return (
      <div className={clsx(className)}>
        {!titleMono ? <H3 className="uppercase">{title}</H3> : <H2>{title}</H2>}
        <div className="flex flex-col items-start gap-5">
          {links.map((resource) => (
            <LinkButtonWithArrow blank href={resource.url} key={resource.url}>
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
          <LinkButtonWithArrow blank href={resource.url} key={resource.url}>
            {resource.display || resource.url}
          </LinkButtonWithArrow>
        ))}
        <Transition
          show={isExpand}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="flex flex-col items-start gap-5"
        >
          {links.slice(2).map((resource) => (
            <LinkButtonWithArrow href={resource.url} key={resource.url}>
              {resource.display || resource.url}
            </LinkButtonWithArrow>
          ))}
        </Transition>

        <button
          className="flex items-center gap-2"
          type="button"
          onClick={() => toggleExpanded()}
        >
          {isExpand ? (
            <MinusIcon className="h-8 rounded-full border border-black p-1" />
          ) : (
            <PlusIcon className="h-8 rounded-full border border-black p-1" />
          )}
          <p className="whitespace-nowrap">{`${
            isExpand ? 'Weniger' : 'Mehr'
          } anzeigen`}</p>
        </button>
      </div>
    </div>
  );
};
