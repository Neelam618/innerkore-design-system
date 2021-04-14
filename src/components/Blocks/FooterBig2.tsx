import React, { FC } from 'react';

type navLinksWithAnchorTxtType = {
  href: string;
  anchorTxt: string;
};

type NavComponentType = {
  title: string;
  navLinksWithAnchorTxt: navLinksWithAnchorTxtType[];
};

export type FooterBig2Types = {
  navComponents: NavComponentType[];
  logo: string; 
  logoAlt: string;
  copyRightTxt: string;
};

export const NavComponent: FC<NavComponentType> = ({
  navLinksWithAnchorTxt, title
}) => {
  return (
    <div>
      <h4 className='text-gray-400 text-lg font-medium mb-6'>{title}</h4>
      {navLinksWithAnchorTxt.map(({ href, anchorTxt }, index) => {
        return (
          <div className='mt-3'>
            <a href={href} className='text-gray-400 text-sm' target="_blank">
              {anchorTxt}
            </a>
          </div>
        );
      })}
    </div>
  )
};

export const FooterBig2: FC<FooterBig2Types> = ({
  navComponents, logo, logoAlt, copyRightTxt
}) => {
  return (
    <div className="bg-black py-16 px-5 md:px-20 xl:px-40">
        <div className='flex justify-between flex-col lg:flex-row'>
            <div className=''>
                <img src={logo} alt={logoAlt} className='w-20'/>
                <p className='text-gray-400 text-xs mt-8'>{copyRightTxt}</p>
            </div>
            <div className='mt-10 lg:mt-0'>
                <div className='grid grid-flow-col grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-4 sm:grid-rows-2 lg:grid-rows-2 xl:grid-rows-1 gap-10 md:gap-10 xl:gap-20'>
                    {navComponents.map(({navLinksWithAnchorTxt,title}, index) => {
                        return (
                        <NavComponent navLinksWithAnchorTxt={navLinksWithAnchorTxt} title={title}/>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
  )
};

export default FooterBig2;

            {/* <div className='grid grid-flow-col grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-1 gap-6 md:gap-10 grid-end-4'> */}
