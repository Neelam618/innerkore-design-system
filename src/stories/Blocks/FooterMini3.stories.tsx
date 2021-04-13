import React from 'react';
import { FooterMini3, FooterMini3Types } from '../../components/Blocks/FooterMini3';

export default {
  title: 'Blocks/FooterMini3',
  component: FooterMini3,
};

export const FooterMini3a = (args: FooterMini3Types) => {
  return <FooterMini3 {...args} />;
};
FooterMini3a.args = {
  copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
  hrefs_with_anchorTxts: [
    { anchorTxt: 'Home', href: 'https://twitter.com/' },
    { anchorTxt: 'About', href: 'https://instagram.com/' },
    { anchorTxt: 'Blog', href: 'https://dribble.com/' },
    { anchorTxt: 'Contact', href: 'https://youtube.com/' },
  ],
};
