import React from 'react';
import { Helmet } from 'react-helmet';
import { domain } from '~/domain';

// FYI, https://www.gatsbyjs.com/docs/add-seo-component/ suggest to use useStaticQuery but I don't see why, yet
const seoDefaultValues = {
  defaultTitle: 'Plan-F.info',
  defaultDescription:
    'Jetzt sind Ihre Projekte gefragt für den #PlanfAward Wenn Sie in Ihrer Kommune aktuell ein Projekt zur Radverkehrsförderung umgesetzt haben, dann bewerben Sie sich bis zum 10. September 2022 um den Plan F Award.',
};

type Props = {
  noindex?: boolean;
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
};

export const HelmetSeo: React.FC<Props> = ({
  noindex = false,
  title,
  description,
  image,
  article,
}) => {
  const { defaultTitle, defaultDescription } = seoDefaultValues;

  const seo = {
    title: (title && `${title} | ${defaultTitle}`) || defaultTitle,
    description: description || defaultDescription,
    image: image || `${domain() || ''}/social-sharing/default.png`,
  };

  if (noindex === true) {
    return (
      <Helmet
        htmlAttributes={{
          lang: 'de',
        }}
      >
        <title>{seo.title}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
    );
  }

  // FYI, we do not inlcude the url meta tags since there was an issue with specs and `useLocation`.
  //  Since we do not need this field, its OK to remove it.
  return (
    <Helmet
      htmlAttributes={{
        lang: 'de',
      }}
    >
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta name="twitter:title" content={seo.title} />

      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:description" content={seo.description} />

      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:image" content={seo.image} />

      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="theme-color" content="#34d399" />
    </Helmet>
  );
};
