import React from 'react';
import { FooterBig1, FooterBig1Types } from '../../components/Blocks/FooterBig1';
import Badge1 from '../../../public/img/badge1.png';
import Badge2 from '../../../public/img/badge2.png';

import Logo from '../../../public/img/logo.png';

import Insta from '../../../public/img/instagram.svg';
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';

export default {
  title: 'Blocks/FooterBig1',

  component: FooterBig1,
};

export const FooterBig1a = (args: FooterBig1Types) => {
  return <FooterBig1 {...args} />;
};

FooterBig1a.args = {
  // copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
  // navLink1: '#',
  // navLink2: '#',
  // navLink3: '#',
  // navLink4: '#',
  // navLink5: '#',
  // navLink6: '#',
  // logo: Logo,
  // navTxt1: 'About',
  // navTxt2: 'Features',
  // navTxt3: 'Pricing',
  // navTxt4: 'Careers',
  // navTxt5: 'Help',
  // navTxt6: 'Privacy Policy',
  // icon1: Insta,
  // iconLink1: 'https://instagram.com',
  // icon2: Twitter,
  // iconLink2: 'https://twitter.com',
  // icon3: Dribble,
  // iconLink3: 'https://dribble.com',
  // icon4: Youtube,
  // iconLink4: 'https://youtube.com',
  company: 'Company',
  companyLink1: '#',
  companyLink2: '#',
  companyLink3: '#',
  companyLink4: '#',
  companyTxt1: 'About Us',
  companyTxt2: 'Blog',
  companyTxt3: 'Careers',
  companyTxt4: 'Contact Us',
  support: 'Support',
  supportLink1: '#',
  supportLink2: '#',
  supportLink3: '#',
  supportTxt1: 'Help Center',
  supportTxt2: 'Safety Center',
  supportTxt3: 'Community Guidelines',
  legal: 'Legal',
  legalLink1: '#',
  legalLink2: '#',
  legalLink3: '#',
  legalLink4: '#',
  legalTxt1: 'Cookies Policy',
  legalTxt2: 'Privacy Policy',
  legalTxt3: 'Terms of Service',
  legalTxt4: 'Law Enforcement',
  badgeTitle: 'Install App',
  badge1: Badge1,
  badgeAlt1: 'App Store',
  badge2: Badge2,
  badgeAlt2: 'Google Play',
};
