import { SocialLinkSchema } from "@data/schema/social-links.schema";
import { envelope } from './../icon/solid.icon'
import { github, linkedin } from './../icon/brand.icon'


const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'Github',
    path: github,
    link: 'https://github.com/NikolyStradiotto',
    color: '#c3c3c3',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'https://www.linkedin.com/in/nikoly-stradiotto-3017a7256/',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'mailto:nikolystradiotto@hotmail.com?subject=Hi Nikoly!',
    color: '#e74c3c',
  }
];

export default socialLinkData;
