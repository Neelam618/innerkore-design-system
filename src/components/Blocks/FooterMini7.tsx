import React, { FC } from 'react';

type navLinksType = {
  href: string;
  anchorTxt: string;
}

export type FooterMini7Types = {

  /** Enter logo image path */
  logo: string;

  /** Enter logo alt text */
  logoAlt: string;

  /** Add url with anchor tag text  */
  navLinks: navLinksType[];

};

export const FooterMini7: FC<FooterMini7Types> = ({
  navLinks,
  logo,
  logoAlt,
}) => {
  return (
    <div className="px-5 md:px-20 xl:px-40 bg-black">
      <div className="lg:flex flex-col items-center py-12 border-b-2 border-gray-900">
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
    </div>
  );
};

export default FooterMini7;
