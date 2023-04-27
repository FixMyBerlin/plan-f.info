export type FooterMenuItem = {
  name: string;
  to: string;
};

const legal: FooterMenuItem[] = [
  {
    name: 'Kontakt',
    to: 'mailto:kontakt@plan-f.info',
  },
  { name: 'Impressum', to: '/impressum/' },
  { name: 'Datenschutz', to: '/datenschutz/' },
];

export const footerLinks: { [key: string]: FooterMenuItem[] } = {
  legal,
};
