export type FooterMenuItem = {
  name: string;
  to: string;
  external: boolean;
};
const pages: FooterMenuItem[] = [
  { name: 'Start', to: '/', external: false },
  // { name: 'Über Plan F', to: '/ueber-uns' },
];

const legal: FooterMenuItem[] = [
  {
    name: 'Newsletter',
    to: 'https://21c51c7f.sibforms.com/serve/MUIEAMjW98vg7w0GP1kG2ZA2DFSP7395kHdbQWUiz9-np8R5ByL1lcmg41MT_tU9NfTH-40qsRO_EAV6llscH-xmR7Na56wzNBJqGqjQRHjJ-QQfCLJa9jrwJkbGTGVKfTqKBrRtALCidg1rzZTeSlja_f8PC6cmhk9JcppFYr3wMmJkjsMsau9090eKeAzr_HAgP-Hm5pp-GvRz',
    external: true,
  },
  { name: 'Kontakt', to: 'mailto:kontakt@plan-f.de', external: true },
  { name: 'Impressum', to: '/impressum/', external: false },
  { name: 'Datenschutz', to: '/datenschutz/', external: false },
];

export const footerLinks: { [key: string]: FooterMenuItem[] } = {
  pages,
  legal,
};
