export type FooterMenuItem = {
  name: string;
  to: string;
  newWindow: boolean;
};
const pages: FooterMenuItem[] = [
  { name: 'Start', to: '/', newWindow: false },
  // { name: 'Über Plan F', to: '/ueber-uns' },
];

const legal: FooterMenuItem[] = [
  {
    name: 'Newsletter',
    to: 'https://21c51c7f.sibforms.com/serve/MUIEAGplIkaHl15aR0t77TNjvH7cDv4l8zcUfOrncK7K6guRKNllBJWifyt4jlFptCKiYzTo0bG-8Yki2vBvV_zEa-iaSrhDdFkL672BPNxBpijMD8iCnMJOFOiTmHDYSg_g2EuFAd2YLTRe5BTKYvjiNkqDQZT4SHRCgemWbXl8C60kIzzwmBd4uYzO65v3DYJvlmpHqLaRyVPz',
    newWindow: true,
  },
  {
    name: 'Kontakt',
    to: 'mailto:kontakt@plan-f.info',
    newWindow: false,
  },
  { name: 'Impressum', to: '/impressum/', newWindow: false },
  { name: 'Datenschutz', to: '/datenschutz/', newWindow: false },
];

export const footerLinks: { [key: string]: FooterMenuItem[] } = {
  pages,
  legal,
};
