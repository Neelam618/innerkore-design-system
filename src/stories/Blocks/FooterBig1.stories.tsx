import React from 'react';
import { FooterBig1, FooterBig1Types } from '../../components/Blocks/FooterBig1';
import { FooterMini1a } from '../../stories/Blocks/FooterMini1.stories';
import Badge1 from '../../../public/img/badge1.png';
import Badge2 from '../../../public/img/badge2.png';

export default {
  title: 'Blocks/Footer/Big/FooterBig1',

  component: FooterBig1,
};

export const FooterBig1a = (args: FooterBig1Types) => {
  return <FooterBig1 {...args} />;
};

FooterBig1a.args = {

 navComponents: [
    { title: 'Company',
      navLinksWithAnchorTxt: [
        {href: '#', anchorTxt: 'About Us'}, 
        {href: '#', anchorTxt: 'Blog'},
        {href: '#', anchorTxt: 'Careers'},
        {href: '#', anchorTxt: 'Contact Us'} 
      ],
    },

    { title: 'Support',
      navLinksWithAnchorTxt: [
        {href: '#', anchorTxt: 'Help Center'}, 
        {href: '#', anchorTxt: 'Safety Center'},
        {href: '#', anchorTxt: 'Community Guidelines'},
      ],
    },
    { title: 'Legal',
      navLinksWithAnchorTxt: [
        {href: '#', anchorTxt: 'Cookies Policy'}, 
        {href: '#', anchorTxt: 'Privacy Policy'},
        {href: '#', anchorTxt: 'Terms of Service'},
        {href: '#', anchorTxt: 'Law Enforcement'},
      ],
    },
  ],

  badgeTitle: 'Get App',
  badges: [
    {imgSrc: Badge1, imgAlt: 'App Store' },
    {imgSrc: Badge2, imgAlt: 'Google Play' }
  ],
};

export const FooterBig1b = () => (
  <>
    <FooterBig1a 
      navComponents={[
        {
          navLinksWithAnchorTxt: [
            { anchorTxt: 'About Us', href: '#' },
            { anchorTxt: 'Blog', href: '#' },
            { anchorTxt: 'Careers', href: '#' },
            { anchorTxt: 'Contact Us', href: '#' }
          ],
          title: 'Company'
        },
        {
          navLinksWithAnchorTxt: [
            { anchorTxt: 'Help Center', href: '#' },
            { anchorTxt: 'Safety Center', href: '#' },
            { anchorTxt: 'Community Guidelines', href: '#' }
          ],
          title: 'Support'
        },
        {
          navLinksWithAnchorTxt: [
            { anchorTxt: 'Cookies Policy', href: '#' },
            { anchorTxt: 'Privacy Policy', href: '#' },
            { anchorTxt: 'Terms of Service', href: '#' },
            { anchorTxt: 'Law Enforcement', href: '#' }
          ],
          title: 'Legal'
        }
      ]}
      badgeTitle="Get App"
      badges={[
        { imgAlt: 'App Store', imgSrc: 'static/media/public/img/badge1.png' },
        { imgAlt: 'Google Play', imgSrc: 'static/media/public/img/badge2.png' }
      ]}
    />

    <FooterMini1a  
      copyRightTxt="© 2020 Landify UI Kit. All rights reserved"
      hrefs_with_imgSrcs={[
        { href: 'https://twitter.com/', imgSrc: 'static/media/public/img/twitter.svg' },
        { href: 'https://instagram.com/', imgSrc: 'static/media/public/img/instagram.svg' },
        { href: 'https://dribble.com/', imgSrc: 'static/media/public/img/dribble.svg' },
        { href: 'https://youtube.com/', imgSrc: 'static/media/public/img/youtube.svg' },
      ]}
    />
  </>
)
