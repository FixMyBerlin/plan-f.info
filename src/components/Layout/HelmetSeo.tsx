import React from 'react';
import { Helmet } from 'react-helmet';
import { domain } from '~/domain';

// FYI, https://www.gatsbyjs.com/docs/add-seo-component/ suggest to use useStaticQuery but I don't see why, yet
const seoDefaultValues = {
  defaultTitle: 'Plan F – Impulse für die fahrradfreundliche Kommune',
  defaultDescription:
    'Einen Plan zu haben, ist gut. Plan F zu haben, ist sehr gut. F wie Fahrrad, Fortschritt und Fachthemen. Plan F unterstützt Kommunen bei der Förderung des Radverkehrs. Dafür strukturieren wir bestehendes Wissen, Praxisbeispiele, Maßnahmen und Leitfäden zur Fahrradmobilität und zeigen notwendige Handlungsfelder auf.',
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
    image: image || `${domain() || ''}/social-sharing/default.jpg`,
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
