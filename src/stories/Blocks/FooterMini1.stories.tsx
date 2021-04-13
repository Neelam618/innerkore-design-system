import React from 'react';
import { FooterMini1, FooterMini1Types } from '../../components/Blocks/FooterMini1';

import Insta from '../../../public/img/instagram.svg';
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';

import Github from '../../../public/img/github.svg';

export default {
  title: 'Blocks/FooterMini1',
  component: FooterMini1,
};

export const FooterMini1a = (args: FooterMini1Types) => {
  return <FooterMini1 {...args} />;
};
FooterMini1a.args = {
  copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
  hrefs_with_imgSrcs: [
    { imgSrc: Twitter, href: 'https://twitter.com/' },
    { imgSrc: Insta, href: 'https://instagram.com/' },
    { imgSrc: Dribble, href: 'https://dribble.com/' },
    { imgSrc: Youtube, href: 'https://youtube.com/' },
    { imgSrc: Github, href: 'https//github.com' },
  ],
};
