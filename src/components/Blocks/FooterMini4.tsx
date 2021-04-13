import React, { FC } from 'react';

type hrefWithimgSrcType = {
  href: string;
  imgSrc: string;
};

export type FooterMini4Types = {

  /** Enter copyright text */
  copyRightTxt: string;

  logo: string;

  logoAlt: string;

   /** Add social icon links with img src url */
   hrefs_with_imgSrcs: hrefWithimgSrcType[];
};

export const FooterMini4: FC<FooterMini4Types> = ({ copyRightTxt, hrefs_with_imgSrcs, logo, logoAlt }) => {
  let anchorClassName =
    'bg-gray-800 inline-block w-6 h-6 rounded-full flex items-center justify-center';

  function SocialIcons(){
    return (
      <div className="flex mt-6 lg:mt-0 justify-center lg:justify-end lg:ml-8">
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
    );
  }

  function Logo(){
    return (
      <div className="order-1">
        <img src={logo} alt={logoAlt} className="w-20 mx-auto" />
      </div>
    );
  }

  return <FooterMini4Generic
    copyRightTxt={copyRightTxt}
    leftComponent={ <Logo /> }

    rightComponent={ <SocialIcons /> }
    />
};

type FooterMini4GenericTypes = {
   /** Enter copyright text */
   copyRightTxt: string;
 
   leftComponent: React.ReactNode;
   rightComponent: React.ReactNode;
};

const FooterMini4Generic: FC<FooterMini4GenericTypes> = ({
  copyRightTxt,
  leftComponent,
  rightComponent
}) => {
  return (
    <div className="lg:flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 px-5 md:px-20 xl:px-40 bg-black">
      {leftComponent}

      {rightComponent}

      <div className="text-gray-400 text-sm text-center lg:text-auto mt-6 lg:mt-0 lg:order-2">
        {copyRightTxt}
      </div>
    </div>
  );
};

export default FooterMini4;
