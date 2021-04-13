import React, { FC } from 'react';

type LinksType = {
  href: string;
  anchorTxt: string;
};

type navLinksType = {
  href: string;
  anchorTxt: string;
}
type badgesType = {
  imgSrc: string;
  imgAlt: string;
}

export type FooterMini6Types = {
  /** Enter copyright text */
  copyRightTxt: string;

  logo: string;

  logoAlt: string;

  /** Add social icon links with img src url */
  Links: LinksType[];

  /** Add navigation links with text */
  navLinks: navLinksType[];

  badges: badgesType[];

  badgeTitle: string;
};

export const FooterMini6: FC<FooterMini6Types> = ({ Links, navLinks,
  copyRightTxt,
  badgeTitle, badges,
  logo
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-5 md:px-20 xl:px-40 py-16 bg-black">
      <div className="order-1 lg:order-0 mt-16 lg:mt-0">
        <img src={logo} alt="" className="w-20" />
        <div className="flex">
          {Links.map(({ href, anchorTxt }, index) => {
            return (
              <div className='mt-6 mr-6'>
                <a href={href} className='text-gray-400' target="_blank">
                  {anchorTxt}
                </a>
              </div>
            );
          })}
        </div>
        <div className="mt-3">
          <ul>
            <li className="flex flex-wrap leading-7">
              {navLinks.map(({ href, anchorTxt }, index) => {
                return (
                  <a href={href} className='text-gray-400 mr-6' target="_blank">
                    {anchorTxt}
                  </a>
                );
              })}
            </li>
          </ul>
        </div>
        <div className="text-gray-400 mt-6">{copyRightTxt}</div>
      </div>
      <div className="order-0 lg:order-1">
        <h5 className="text-gray-400">{badgeTitle}</h5>
        {badges.map(({ imgSrc, imgAlt }, index) => {
          return (
            <img src={imgSrc} alt={imgAlt} className="mt-4" />
          );
        })}
      </div>
    </div>
  );
};

export default FooterMini6;
