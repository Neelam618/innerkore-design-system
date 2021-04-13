import React, { FC } from 'react';

type socialIconLinksType = {
  href: string;
  imgSrc: string;
};

export type FooterMini4Types = {

  /** Enter copyright text */
  copyRightTxt: string;

  /** Enter logo path */
  logo: string;

  /** Enter logo alt text */
  logoAlt: string;

  /** Add social icon links with img src url */
  socialIconLinks: socialIconLinksType[];

  /** Enter logo position */
   logoPosition: 'left' | 'right';
};

export const FooterMini4: FC<FooterMini4Types> = ({ copyRightTxt, socialIconLinks, logo, logoAlt, logoPosition }) => {
 
  function SocialIcons(){
    let anchorClassName =
    'bg-gray-800 inline-block w-6 h-6 rounded-full flex items-center justify-center';
    return (
      <div className="flex justify-center mt-6 lg:mt-0">
        {socialIconLinks.map(({ href, imgSrc }, index) => {
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
      <div className='mt-6 lg:mt-0'>
        <img src={logo} alt={logoAlt} className="w-20 mx-auto" />
      </div>
    );
  }

type FooterMini4GenericTypes = {
  /** Enter copyright text */
  copyRightTxt: string;

  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
};

const FooterMini4Generic: FC<FooterMini4GenericTypes> = ({
  // copyRightTxt,
  leftComponent,
  rightComponent
}) => {
  return (
    <div className="lg:flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 px-5 md:px-20 xl:px-40 bg-black">
      {leftComponent}

      {rightComponent}

      <SocialIcons />
    </div>
  );
};

return <FooterMini4Generic
  copyRightTxt={copyRightTxt}
  leftComponent={ logoPosition === 'left'? <Logo /> : 
    <div className="text-gray-400 text-sm text-center lg:text-auto mt-6 lg:mt-0">{copyRightTxt}</div>
  }

  rightComponent={ logoPosition === 'left'? 
    <div className="text-gray-400 text-sm text-center lg:text-auto mt-6 lg:mt-0">{copyRightTxt}</div> : <Logo /> 
  }
  />
};

export default FooterMini4;
