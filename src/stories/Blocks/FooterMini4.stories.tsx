import React from 'react';

import { FooterMini4, FooterMini4Types } from '../../components/Blocks/FooterMini4';
import Insta from '../../../public/img/instagram.svg';
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';
import Logo from '../../../public/img/logo.png';

export default {
  title: 'Blocks/Footer/Mini/FooterMini4',
  component: FooterMini4,
};

export const FooterMini4a = (args: FooterMini4Types) => {
  return <FooterMini4 {...args} />;
};

FooterMini4a.args = {
  socialIconLinks: [
    { imgSrc: Twitter, href: 'https://twitter.com/' },
    { imgSrc: Insta, href: 'https://instagram.com/' },
    { imgSrc: Dribble, href: 'https://dribble.com/' },
    { imgSrc: Youtube, href: 'https://youtube.com/' },
  ],
  copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
  logo: Logo,
  logoAlt: 'Landify',
  logoPosition: 'left'
};

export const FooterMini5a = (args: FooterMini4Types) => {
  return <FooterMini4 {...args} />;
};

FooterMini5a.args = {
  socialIconLinks: [
    { imgSrc: Twitter, href: 'https://twitter.com/' },
    { imgSrc: Insta, href: 'https://instagram.com/' },
    { imgSrc: Dribble, href: 'https://dribble.com/' },
    { imgSrc: Youtube, href: 'https://youtube.com/' },
  ],
  copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
  logo: Logo,
  logoAlt: 'Landify',
  logoPosition: 'right'
};
