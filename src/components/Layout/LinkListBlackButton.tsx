import clsx from 'clsx';
import React from 'react';
import { LinkButtonWithArrow } from '../PageTopic/LinkButtonWithArrow';
import { H2, H3 } from '../Text';
import { truncateString } from '../utils/truncateString';

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
  return (
    <div className={clsx(className)}>
      {!titleMono ? <H3 className="uppercase">{title}</H3> : <H2>{title}</H2>}
      <div className="flex flex-col items-start gap-5">
        {links.map((resource) => (
          <LinkButtonWithArrow href={resource.url}>
            {truncateString(resource.display) || truncateString(resource.url)}
          </LinkButtonWithArrow>
        ))}
      </div>
    </div>
  );
};
