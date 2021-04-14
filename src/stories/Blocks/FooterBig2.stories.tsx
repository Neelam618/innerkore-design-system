import React from 'react';
import { FooterBig2, FooterBig2Types } from '../../components/Blocks/FooterBig2';
import Badge1 from '../../../public/img/badge1.png';
import Badge2 from '../../../public/img/badge2.png';

import Logo from '../../../public/img/logo.png';

export default {
    title: 'Blocks/Footer/Big/FooterBig2',
  
    component: FooterBig2,
  };
  
  export const FooterBig2a = (args: FooterBig2Types) => {
    return <FooterBig2 {...args} />;
  };
  
  FooterBig2a.args = {
  
   navComponents: [
      { title: 'Product',
        navLinksWithAnchorTxt: [
          {href: '#', anchorTxt: 'Overview'}, 
          {href: '#', anchorTxt: 'Features'},
          {href: '#', anchorTxt: 'Tutorials'},
          {href: '#', anchorTxt: 'Pricing'},
          {href: '#', anchorTxt: 'Releases'}  
        ],
      },
  
      { title: 'Company',
        navLinksWithAnchorTxt: [
          {href: '#', anchorTxt: 'About'}, 
          {href: '#', anchorTxt: 'Press'},
          {href: '#', anchorTxt: 'Careers'},
          {href: '#', anchorTxt: 'Contact'},
          {href: '#', anchorTxt: 'Partners'},
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
      { title: 'Follow us',
        navLinksWithAnchorTxt: [
          {href: '#', anchorTxt: 'Facebook'}, 
          {href: '#', anchorTxt: 'Twitter'},
          {href: '#', anchorTxt: 'Dribbble'},
          {href: '#', anchorTxt: 'Instagram'},
          {href: '#', anchorTxt: 'LinkedIn'},
        ],
      },
    ],
  
    badgeTitle: 'Get App',
    badges: [
      {imgSrc: Badge1, imgAlt: 'App Store' },
      {imgSrc: Badge2, imgAlt: 'Google Play' }
    ],
    logo: Logo,
    logoAlt: 'My Logo',
    copyRightTxt: '© 2020 Landify UI Kit. All rights reserved'
  };
  
  export const FooterBig3 = () => (
    <>
      <FooterBig2a 
        navComponents={[
          {
            navLinksWithAnchorTxt: [
              { anchorTxt: 'Overview', href: '#' },
              { anchorTxt: 'Features', href: '#' },
              { anchorTxt: 'Tutorials', href: '#' },
              { anchorTxt: 'Pricing', href: '#' },
              { anchorTxt: 'Releases', href: '#' }
            ],
            title: 'Product'
          },
          {
            navLinksWithAnchorTxt: [
              { anchorTxt: 'About', href: '#' },
              { anchorTxt: 'Press', href: '#' },
              { anchorTxt: 'Careers', href: '#' },
              { anchorTxt: 'Contact', href: '#' },
              { anchorTxt: 'Partners', href: '#' }
            ],
            title: 'Company'
          },
          {
            navLinksWithAnchorTxt: [
              { anchorTxt: 'Help Center', href: '#' },
              { anchorTxt: 'Terms of service', href: '#' },
              { anchorTxt: 'Legal', href: '#' },
              { anchorTxt: 'Privacy Policy', href: '#' },
              { anchorTxt: 'Status', href: '#' }
            ],
            title: 'Support'
          }
        ]} 
        logo={Logo}
        logoAlt='My Logo'
      />
    </>
  )
  