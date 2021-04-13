import React, { FC } from 'react';

type hrefWithanchorTxtType = {
  href: string;
  anchorTxt: string;
};

export type FooterMini3Types = {
  /** Add social icon links with text in anchor tag */
  hrefs_with_anchorTxts: hrefWithanchorTxtType[];

  /** Enter copyright text */
  copyRightTxt: string;
};

export const FooterMini3: FC<FooterMini3Types> = ({ copyRightTxt, hrefs_with_anchorTxts }) => {
  let anchorClassName = 'text-gray-400';
  return (
    <div className="lg:flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 px-5 md:px-20 xl:px-40 bg-black">
      <div className="flex justify-center lg:justify-start">
        {hrefs_with_anchorTxts.map(({ href, anchorTxt }, index) => {
          if (index === 0) {
            anchorClassName += ' ml-0';
          } else {
            anchorClassName += ' ml-8';
          }

          return (
            <a href={href} className={anchorClassName} target="_blank">
              {anchorTxt}
            </a>
          );
        })}
      </div>
      <div className="text-gray-400 text-sm text-center mt-6 lg:mt-0">{copyRightTxt}</div>
    </div>
  );
};

export default FooterMini3;
