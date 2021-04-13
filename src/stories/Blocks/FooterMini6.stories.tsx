import React from 'react';
import { FooterMini6, FooterMini6Types } from '../../components/Blocks/FooterMini6';
import Logo from '../../../public/img/logo.png';
import Badge1 from '../../../public/img/badge1.png';
import Badge2 from '../../../public/img/badge2.png';

export default {
  title: 'Blocks/FooterMini6',
  component: FooterMini6,
};

export const FooterMini6a = (args: FooterMini6Types) => {
  return <FooterMini6 {...args} />;
};

FooterMini6a.args = {
  copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
  Links: [
    {href: '#', anchorTxt: 'Download Now'},
    {href: '#', anchorTxt: 'License'}
  ],
  navLinks: [
    {anchorTxt: 'About', href: '#'},
    {anchorTxt: 'Features', href: '#'},
    {anchorTxt: 'Pricing', href: '#'},
    {anchorTxt: 'Careers', href: '#'},
    {anchorTxt: 'Help', href: '#'},
    {anchorTxt: 'Privacy Policy', href: '#'},
  ],

  badgeTitle: 'Get the App',
  badges: [
    {imgSrc: Badge1, imgAlt: 'App Store' },
    {imgSrc: Badge2, imgAlt: 'Google Play' }
  ],
  logo: Logo
};
