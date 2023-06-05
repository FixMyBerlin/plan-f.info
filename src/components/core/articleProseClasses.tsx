import clsx from 'clsx';

// Usage: `<Section className={articleProseClasses}><Content>HTML</Content></Section>`
export const articleProseClasses = clsx(
  // Basis
  'prose max-w-none',
  // H2
  'prose-h2:mb-3 prose-h2:mt-6 prose-h2:font-mono prose-h2:text-xl prose-h2:font-normal prose-h2:text-black prose-h2:md:mb-6 prose-h2:md:mt-14 prose-h2:md:text-3xl'
);

// Usage: `<Section className={articleProseClasses}><Content>HTML</Content></Section>`
// equivalent to components in --> headings.ts / Link/styles.ts / Quotebox
export const planfProseClasses = clsx(
  // Basis
  'prose max-w-none prose-img:mt-0 prose-img:mb-0 prose-div:mx-0 prose-div:mt-0',
  // div / img
  'prose-img:mt-0 prose-img:mb-0 prose-div:mx-0 prose-div:mt-0',
  // P
  'prose-p:mb-4 prose-p:mt-4 prose-p:text-sm prose-p:text-gray-700 prose-p:md:mb-6 prose-p:md:mt-6 prose-p:md:text-base',
  // H1
  'prose-h1:mb-5 prose-h1:text-3xl prose-h1:font-bold prose-h1:text-black prose-h1:md:mb-10 prose-h1:md:text-4xl',
  // H2
  'prose-h2:mb-5 prose-h2:mt-8 prose-h2:font-mono prose-h2:text-xl prose-h2:font-normal prose-h2:text-black prose-h2:md:mb-10 prose-h2:md:mt-10 prose-h2:md:text-3xl',
  // H3
  'prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-lg prose-h3:font-bold prose-h3:text-black prose-h3:md:mb-6 prose-h3:md:mt-10 prose-h3:md:text-xl',
  // Caption / <figcaption>
  'prose-figcaption:text-xs prose-figcaption:text-gray-700',
  // Link / <a>
  'prose-a:underline hover:prose-a:decoration-purple-600 hover:prose-a:text-purple-600 active:prose-a:decoration-purple-600 prose-a:underline-offset-2 active:prose-a:decoration-2',
  // <blockquote> / Quotebox
  'prose-blockquote:rounded-tr-[6rem] prose-blockquote:lg:rounded-tr-[10rem] prose-blockquote:rounded-tl-sm prose-blockquote:bg-purple-100 prose-blockquote:text-left prose-blockquote:mt-8 prose-blockquote:w-fit prose-blockquote:min-w-min prose-blockquote:rounded-b-[6rem] prose-blockquote:font-mono prose-blockquote:lg:rounded-b-[10rem] prose-blockquote:p-8 prose-blockquote:lg:p-16 prose-blockquote:not-italic prose-blockquote:border-l-0',
  // ul
  'prose-ul:list-disc prose-ul:my-6 prose-ul:list-inside'
);
