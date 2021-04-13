import React from 'react';

import { FooterMini4, FooterMini4Types } from '../../components/Blocks/FooterMini4';
import Insta from '../../../public/img/instagram.svg';
import MyLogo from '../../../public/img/mylogo.png';
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';
import Logo from '../../../public/img/logo.png';

export default {
  title: 'Blocks/FooterMini4',
  component: FooterMini4,
};

export const FooterMini4a = (args: FooterMini4Types) => {
  return <FooterMini4 {...args} />;
};

FooterMini4a.args = {
  hrefs_with_imgSrcs: [
    { imgSrc: Twitter, href: 'https://twitter.com/' },
    { imgSrc: Insta, href: 'https://instagram.com/' },
    { imgSrc: Dribble, href: 'https://dribble.com/' },
    { imgSrc: Youtube, href: 'https://youtube.com/' },
  ],
  copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
  logo: Logo,
  logoAlt: 'Landify',
  // leftComponent: <Logo />,
  // rightComponent: <SocialIcons />
};
