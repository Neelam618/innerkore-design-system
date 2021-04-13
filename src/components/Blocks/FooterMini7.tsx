import React, { FC } from 'react';

export type FooterMini7Types = {
  navLink1: string;
  navLink2: string;
  navLink3: string;
  navLink4: string;
  navLink5: string;
  navLink6: string;

  navTxt1: string;
  navTxt2: string;
  navTxt3: string;
  navTxt4: string;
  navTxt5: string;
  navTxt6: string;

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
};

export const FooterMini7: FC<FooterMini7Types> = ({
  copyRightTxt,
  navLink1,
  navLink2,
  navLink3,
  navLink4,
  navLink5,
  navLink6,
  navTxt1,
  navTxt2,
  navTxt3,
  navTxt4,
  navTxt5,
  navTxt6,
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
          <ul>
            <li className="flex justify-center flex-wrap leading-7">
              <a href={navLink1} className="text-gray-400 mr-6">
                {navTxt1}
              </a>
              <a href={navLink2} className="text-gray-400 mr-6">
                {navTxt2}
              </a>
              <a href={navLink3} className="text-gray-400 mr-6">
                {navTxt3}
              </a>
              <a href={navLink4} className="text-gray-400 mr-6">
                {navTxt4}
              </a>
              <a href={navLink5} className="text-gray-400 mr-6">
                {navTxt5}
              </a>
              <a href={navLink6} className="text-gray-400">
                {navTxt6}
              </a>
            </li>
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
