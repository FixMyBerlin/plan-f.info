import { marked } from 'marked'

// Strapi richtext fields were Markdown, rendered to HTML by gatsby-transformer-remark
// (`childMarkdownRemark.html`). We mirror that with `marked` so the <Prose> component can
// keep using dangerouslySetInnerHTML and the output matches the old site.
marked.setOptions({ gfm: true, breaks: false })

/** Render a Markdown string to an HTML string. Empty/nullish input → ''. */
export function renderMarkdown(md: string | null | undefined): string {
  if (!md) return ''
  return marked.parse(md, { async: false }) as string
}
