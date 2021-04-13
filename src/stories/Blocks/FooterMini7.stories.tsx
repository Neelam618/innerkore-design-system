import React from 'react';
import { FooterMini7, FooterMini7Types } from '../../components/Blocks/FooterMini7';
import Logo from '../../../public/img/logo.png';
import { FooterMini1a } from '../../stories/Blocks/FooterMini1.stories';

export default {
  title: 'Blocks/FooterMini7',

  component: FooterMini7,
};

export const FooterMini7a = (args: FooterMini7Types) => {
  return <FooterMini7 {...args} />;
};

FooterMini7a.args = {
  logo: Logo,
  navLinks: [
    {anchorTxt: 'About', href: '#'},
    {anchorTxt: 'Features', href: '#'},
    {anchorTxt: 'Pricing', href: '#'},
    {anchorTxt: 'Careers', href: '#'},
    {anchorTxt: 'Help', href: '#'},
    {anchorTxt: 'Privacy Policy', href: '#'},
  ],
};

export const FooterMini7b = () => (
  <>
      <FooterMini7a 
        logo={Logo} logoAlt='My logo'
        navLinks={[
          { anchorTxt: 'About', href: '#' },
          { anchorTxt: 'Features', href: '#' },
          { anchorTxt: 'Pricing', href: '#' },
          { anchorTxt: 'Careers', href: '#' },
          { anchorTxt: 'Help', href: '#' },
          { anchorTxt: 'Privacy Policy', href: '#' }
        ]}
      />
      <FooterMini1a  
        copyRightTxt="© 2020 Landify UI Kit. All rights reserved"
        hrefs_with_imgSrcs={[
          {
            href: 'https://twitter.com/',
            imgSrc: 'static/media/public/img/twitter.svg'
          },
          {
            href: 'https://instagram.com/',
            imgSrc: 'static/media/public/img/instagram.svg'
          },
          {
            href: 'https://dribble.com/',
            imgSrc: 'static/media/public/img/dribble.svg'
          },
          {
            href: 'https://youtube.com/',
            imgSrc: 'static/media/public/img/youtube.svg'
          },
        ]}
      />
  </>
)