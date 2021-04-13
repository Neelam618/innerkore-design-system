import React, { FC } from 'react';

type hrefWithimgSrcType = {
  href: string;
  imgSrc: string;
};

export type FooterMini1Types = {
  /** Add social icon links with img src url */
  hrefs_with_imgSrcs: hrefWithimgSrcType[];

  /** Enter copyright text */
  copyRightTxt: string;
};

export const FooterMini1: FC<FooterMini1Types> = ({ copyRightTxt, hrefs_with_imgSrcs }) => {
  let anchorClassName =
    'bg-gray-800 inline-block w-6 h-6 rounded-full flex items-center justify-center';
  return (
    <div className="lg:flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 px-5 md:px-20 xl:px-40 bg-black">
      <div className="flex justify-center order-1 lg:order-2">
        {hrefs_with_imgSrcs.map(({ href, imgSrc }, index) => {
          if (index === 0) {
            anchorClassName += ' ml-0';
          } else {
            anchorClassName += ' ml-4';
          }

          return (
            <a href={href} className={anchorClassName} target="_blank">
              <img src={imgSrc} className="h-3" />
            </a>
          );
        })}
      </div>
      <div className="text-gray-400 text-sm text-center mt-8 lg:mt-0 order-2 lg:order-1">{copyRightTxt}</div>
    </div>
  );
};

export default FooterMini1;
