import React, { FC } from 'react';

type hrefWithimgSrcType = {
  href: string;
  imgSrc: string;
};

export type FooterMini1Types = {
  /** Add social imgSrc hrefs with imgSrc url */
  hrefs_with_imgSrcs: hrefWithimgSrcType[];

  /** Enter copyright text */
  copyRightTxt: string;
};

export const FooterMini1: FC<FooterMini1Types> = ({ copyRightTxt, hrefs_with_imgSrcs }) => {
  let hrefClassName =
    'bg-gray-800 inline-block w-6 h-6 rounded-full flex items-center justify-center';
  return (
    <div className="lg:flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 px-5 md:px-20 xl:px-40 bg-black">
      <div className="text-gray-400 text-sm text-center lg:text-left">{copyRightTxt}</div>
      <div className="flex mt-6 lg:mt-0 justify-center lg:justify-end lg:ml-8">
        {hrefs_with_imgSrcs.map(({ href, imgSrc }, index) => {
          if (index === 0) {
            hrefClassName += ' ml-0';
          } else {
            hrefClassName += ' ml-4';
          }

          return (
            <a href={href} className={hrefClassName} target="_blank">
              <img src={imgSrc} className="h-3" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterMini1;
