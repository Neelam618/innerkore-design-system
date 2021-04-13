import React from 'react';
import { FooterMini7, FooterMini7Types } from '../../components/Blocks/FooterMini7';
import Logo from '../../../public/img/logo.png';

import Insta from '../../../public/img/instagram.svg';
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';

export default {
  title: 'Blocks/FooterMini7',

  component: FooterMini7,
};

export const FooterMini7a = (args: FooterMini7Types) => {
  return <FooterMini7 {...args} />;
};

FooterMini7a.args = {
  copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
  logo: Logo,
  navLinks: [
    {anchorTxt: 'About', href: '#'},
    {anchorTxt: 'Features', href: '#'},
    {anchorTxt: 'Pricing', href: '#'},
    {anchorTxt: 'Careers', href: '#'},
    {anchorTxt: 'Help', href: '#'},
    {anchorTxt: 'Privacy Policy', href: '#'},
  ],

  icon1: Insta,
  iconLink1: 'https://instagram.com',
  icon2: Twitter,
  iconLink2: 'https://twitter.com',
  icon3: Dribble,
  iconLink3: 'https://dribble.com',
  icon4: Youtube,
  iconLink4: 'https://youtube.com',
};
