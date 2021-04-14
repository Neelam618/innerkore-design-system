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
  
//   export const FooterBig1b = () => (
//     <>
//       <FooterBig2a 
//         navComponents={[
//           {
//             navLinksWithAnchorTxt: [
//               { anchorTxt: 'About Us', href: '#' },
//               { anchorTxt: 'Blog', href: '#' },
//               { anchorTxt: 'Careers', href: '#' },
//               { anchorTxt: 'Contact Us', href: '#' }
//             ],
//             title: 'Company'
//           },
//           {
//             navLinksWithAnchorTxt: [
//               { anchorTxt: 'Help Center', href: '#' },
//               { anchorTxt: 'Safety Center', href: '#' },
//               { anchorTxt: 'Community Guidelines', href: '#' }
//             ],
//             title: 'Support'
//           },
//           {
//             navLinksWithAnchorTxt: [
//               { anchorTxt: 'Cookies Policy', href: '#' },
//               { anchorTxt: 'Privacy Policy', href: '#' },
//               { anchorTxt: 'Terms of Service', href: '#' },
//               { anchorTxt: 'Law Enforcement', href: '#' }
//             ],
//             title: 'Legal'
//           }
//         ]}
//       />
  
//       <FooterMini1a  
//         copyRightTxt="© 2020 Landify UI Kit. All rights reserved"
//         hrefs_with_imgSrcs={[
//           { href: 'https://twitter.com/', imgSrc: 'static/media/public/img/twitter.svg' },
//           { href: 'https://instagram.com/', imgSrc: 'static/media/public/img/instagram.svg' },
//           { href: 'https://dribble.com/', imgSrc: 'static/media/public/img/dribble.svg' },
//           { href: 'https://youtube.com/', imgSrc: 'static/media/public/img/youtube.svg' },
//         ]}
//       />
//     </>
//   )
  