import React, { FC } from 'react';

export type FooterMini4Types = {

    /** Add icon path for social icons */
    icon1:string, icon2: string; icon3:string; icon4:string;
    
    /** Add social icon links */
    link1:string; link2:string; link3: string; link4:string;

    /** Enter copyright text */
    copyRightTxt: string;

    logo: string;

    logoAlt:string;
};

export const FooterMini4: FC<FooterMini4Types> = ({
    copyRightTxt,
    icon1, icon2, icon3, icon4,
    link1, link2, link3, link4, 
    logo, logoAlt
}) => {
    return (
        <div className='lg:flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 px-5 md:px-20 xl:px-40 bg-black'>
            <div className='order-1'>
                <img src={logo} alt={logoAlt} className='w-20 mx-auto'/>
            </div>
            <div className='flex mt-6 lg:mt-0 justify-center lg:justify-end lg:order-3'>
                <a href={link1} className={icon1? 'bg-gray-800 inline-block w-6 h-6 rounded-full flex items-center justify-center' : ''} target='_blank'><img src={icon1} className='h-3' /></a>
                <a href={link2} className={icon2? 'inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center' : ''} target='_blank'><img src={icon2} className='h-3' /></a>
                <a href={link3} className={icon3? 'inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center' : ''} target='_blank'><img src={icon3} className='h-3' /></a>
                <a href={link4} className={icon4? 'inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center' : ''} target='_blank'><img src={icon4} className='h-3' /></a>
            </div>
            <div className='text-gray-400 text-sm text-center lg:text-auto mt-6 lg:mt-0 lg:order-2'>{copyRightTxt}</div>
        </div>
    )
};
  
export default FooterMini4;
