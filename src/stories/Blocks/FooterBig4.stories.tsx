import React from 'react';
import { FooterBig4, FooterBig4Types } from '../../components/Blocks/FooterBig4';
import Insta from '../../../public/img/instagram.svg';
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';

import Logo from '../../../public/img/logo.png';

export default {
    title: 'Blocks/Footer/Big/FooterBig4',
  
    component: FooterBig4,
};
  
export const FooterBig4a = (args: FooterBig4Types) => {
    return <FooterBig4 {...args} />;
};
  
FooterBig4a.args = {
  
   navComponents: [
  
      { title: 'Company',
        navLinksWithAnchorTxt: [
          {href: '#', anchorTxt: 'About Us'}, 
          {href: '#', anchorTxt: 'Blog'},
          {href: '#', anchorTxt: 'Contact Us'},
          {href: '#', anchorTxt: 'Pricing'},
          {href: '#', anchorTxt: 'Testimonials'},
        ],
      },
      { title: 'Support',
        navLinksWithAnchorTxt: [
          {href: '#', anchorTxt: 'Help Center'}, 
          {href: '#', anchorTxt: 'Terms of service'},
          {href: '#', anchorTxt: 'Legal'},
          {href: '#', anchorTxt: 'Privacy Policy'},
          {href: '#', anchorTxt: 'Status'},
        ],
      },
    ],
    logo: Logo,
    logoAlt: 'My Logo',
    copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',

    socialLinks: [
        { imgSrc: Twitter, href: 'https://twitter.com/' },
        { imgSrc: Insta, href: 'https://instagram.com/' },
        { imgSrc: Dribble, href: 'https://dribble.com/' },
        { imgSrc: Youtube, href: 'https://youtube.com/' },
      ],
};