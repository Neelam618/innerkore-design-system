import React, { FC } from 'react';

type navLinksWithAnchorTxtType = {
  href: string;
  anchorTxt: string;
};

type NavComponentType = {
  title: string;
  navLinksWithAnchorTxt: navLinksWithAnchorTxtType[];
};

type badgesType ={
  imgSrc: string;
  imgAlt: string;
}

export type FooterBig1Types = {
  navComponents: NavComponentType[];
  badges: badgesType[];
  badgeTitle: string;
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

export const FooterBig1: FC<FooterBig1Types> = ({
  navComponents, badgeTitle, badges
}) => {
  return (
    <div className="bg-black">
      <div className='lg:flex flex-col lg:flex-row lg:justify-between lg:items-start border-b-2 border-gray-900 py-16 px-5 md:px-20 xl:px-40'>
        {navComponents.map(({navLinksWithAnchorTxt,title}, index) => {
          return (
            <NavComponent navLinksWithAnchorTxt={navLinksWithAnchorTxt} title={title}/>
          );
        })}
        <div className="">
          <h5 className="text-gray-400">{badgeTitle}</h5>
          {badges.map(({ imgSrc, imgAlt }, index) => {
            return (
              <img src={imgSrc} alt={imgAlt} className="mt-4" />
            );
          })}
        </div>
      </div>
    </div>
  )
};

export default FooterBig1;
