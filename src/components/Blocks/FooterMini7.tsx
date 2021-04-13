import React, { FC } from 'react';

type navLinksType = {
  href: string;
  anchorTxt: string;
}

export type FooterMini7Types = {
  iconLink1: string;
  iconLink2: string;
  iconLink3: string;
  iconLink4: string;
  iconLink5: string;

  icon1: string;
  icon2: string;
  icon3: string;
  icon4: string;
  icon5: string;

  /** Enter copyright text */
  copyRightTxt: string;

  /** Enter logo image path */
  logo: string;

  /** Enter logo alt text */
  logoAlt: string;

  /** Add url with anchor tag text  */
  navLinks: navLinksType[];

};

export const FooterMini7: FC<FooterMini7Types> = ({
  copyRightTxt,
  navLinks,
  logo,
  logoAlt,
  iconLink1,
  iconLink2,
  iconLink3,
  iconLink4,
  iconLink5,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}) => {
  return (
    <div className="px-5 md:px-20 xl:px-40 bg-black">
      <div className="lg:flex flex-col items-center  py-12">
        <div className="">
          <img src={logo} alt={logoAlt} className="w-20 mx-auto" />
        </div>
        <div className="mt-8">
          <ul className="flex justify-center flex-wrap leading-7">
              {navLinks.map(({ href, anchorTxt }, index) => {
                return (
                  <li><a href={href} className="text-gray-400 mr-6">{anchorTxt}</a></li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between py-6 bg-black border-t border-gray-800">
        <div className="text-gray-400 text-sm text-center lg:text-start">{copyRightTxt}</div>
        <div className="flex justify-center lg:justify-end mt-5 lg:mt-0">
          <a
            href={iconLink1}
            className={
              icon1
                ? 'bg-gray-800 inline-block w-6 h-6 rounded-full flex items-center justify-center'
                : ''
            }
            target="_blank"
          >
            <img src={icon1} className="h-3" />
          </a>
          <a
            href={iconLink2}
            className={
              icon2
                ? 'inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center'
                : ''
            }
            target="_blank"
          >
            <img src={icon2} className="h-3" />
          </a>
          <a
            href={iconLink3}
            className={
              icon3
                ? 'inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center'
                : ''
            }
            target="_blank"
          >
            <img src={icon3} className="h-3" />
          </a>
          <a
            href={iconLink4}
            className={
              icon4
                ? 'inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center'
                : ''
            }
            target="_blank"
          >
            <img src={icon4} className="h-3" />
          </a>
          <a
            href={iconLink5}
            className={
              icon5
                ? 'inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center'
                : ''
            }
            target="_blank"
          >
            <img src={icon5} className="h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMini7;
