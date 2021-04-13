import React, { FC } from 'react';

export type FooterMini3Types = {
  /** Enter copyright text */
  copyRightTxt: string;

  navLink1: string;
  navLink2: string;
  navLink3: string;
  navLink4: string;

  navTxt1: string;
  navTxt2: string;
  navTxt3: string;
  navTxt4: string;
};

export const FooterMini3: FC<FooterMini3Types> = ({
  copyRightTxt,
  navLink1,
  navLink2,
  navLink3,
  navLink4,
  navTxt1,
  navTxt2,
  navTxt3,
  navTxt4,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between py-6 px-5 md:px-20 xl:px-40 bg-black">
      <div>
        <nav>
          <ul className="flex flex-col md:flex-row justify-center lg:justify-start">
            <li>
              <a href={navLink1} className="text-gray-400 text-sm md:mr-8 text-center block">
                {navTxt1}
              </a>
            </li>
            <li>
              <a
                href={navLink2}
                className="text-gray-400 text-sm md:mr-8 text-center block mt-4 md:mt-0"
              >
                {navTxt2}
              </a>
            </li>
            <li>
              <a
                href={navLink3}
                className="text-gray-400 text-sm md:mr-8 text-center block mt-4 md:mt-0"
              >
                {navTxt3}
              </a>
            </li>
            <li>
              <a
                href={navLink4}
                className="text-gray-400 text-sm mr-0 text-center block mt-4 md:mt-0"
              >
                {navTxt4}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-gray-400 text-sm mt-6 lg:mt-0 text-center">{copyRightTxt}</div>
    </div>
  );
};

export default FooterMini3;
