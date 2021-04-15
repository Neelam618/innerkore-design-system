import React, { FC } from 'react';

import InputIcon from '../../../public/img/input-icon.svg';

type navLinksWithAnchorTxtType = {
  href: string;
  anchorTxt: string;
};

type NavComponentType = {
  title: string;
  navLinksWithAnchorTxt: navLinksWithAnchorTxtType[];
};

type socialLinksType ={
    href: string;
    imgSrc: string;
}

export type FooterBig4Types = {
  navComponents: NavComponentType[];
  logo: string; 
  logoAlt: string;
  copyRightTxt?: string;
  socialLinks: socialLinksType[];
};

export const NavComponent: FC<NavComponentType> = ({
  navLinksWithAnchorTxt, title
}) => {
  return (
    <div className=''>
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

export const FooterBig4: FC<FooterBig4Types> = ({
  navComponents, logo, logoAlt, copyRightTxt, socialLinks,
}) => {
    let anchorClassName =
    'bg-gray-800 inline-block w-6 h-6 rounded-full flex items-center justify-center';
    return (
        <div className="bg-black py-16 px-5 md:px-20 xl:px-40">
            <div className='flex justify-between flex-col lg:flex-row'>
                <div className='mr-12'>
                    <img src={logo} alt={logoAlt} className='w-20'/>
                    <p className='text-gray-400 text-xs mt-8'>{copyRightTxt}</p>
                    <div className="flex justify-start mt-10">
                        {socialLinks.map(({ href, imgSrc }, index) => {
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
                </div>
                <div className='mt-10 lg:mt-0'>
                    <div className='grid grid-flow-col grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-3 sm:grid-rows-2 lg:grid-rows-2 xl:grid-rows-1 gap-10 md:gap-10 xl:gap-20'>
                        {navComponents.map(({navLinksWithAnchorTxt,title}, index) => {
                            return (
                            <NavComponent navLinksWithAnchorTxt={navLinksWithAnchorTxt} title={title}/>
                            );
                        })}
                        <div>
                            <h4 className='text-gray-400 text-lg font-medium mb-6'>Stay up to date</h4>
                            <div className="bg-gray-800 rounded-lg h-10">
                                <input type='email' placeholder='Your email address' className="border-0 bg-gray-800 text-gray-300 rounded-lg h-10 px-3 focus:outline-none"/>
                                <img src={InputIcon} className='inline-block px-3'/>
                            </div>
                            {/* <input type="text" placeholder='Your email address' className='rounded-lg h-10 text-gray-300 bg-gray-800 px-3'/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FooterBig4;

