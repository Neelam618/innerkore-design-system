import React, { FC } from 'react';
import Insta from '../../../public/img/instagram.svg';
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';
import Logo from '../../../public/img/logo.png'

export type FooterMini5Types = {

    /** Add href to anchor tag */
    href?: string;

    /** Add icon path for social icons */
    icon1:string, icon2: string; icon3:string; icon4:string;
    
    /** Add social icon links */
    link1:string; link2:string; link3: string; link4:string;

    /** Enter copyright text */
    copyRightTxt: string;

    logo: string;

    logoAlt:string;
};


export const FooterMini5: FC<FooterMini5Types> = ({
    copyRightTxt ='© 2020 Landify UI Kit. All rights reserved',
    icon1 = Insta, icon2 = Dribble, icon3 = Twitter, icon4 = Youtube,
    link1 = 'https//instagram.com', link2 = 'https//dribble.com', link3 = 'https//twitter.com', link4 = 'https//youtube.com', 
    logo = Logo, logoAlt = 'Landify'
}) => {
    return (
        <div className='lg:flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 px-5 md:px-20 xl:px-40 bg-black'>
            <div className='text-gray-400 text-sm text-center lg:text-auto mt-6 lg:mt-0'>{copyRightTxt}</div>
            <div className='lg:mr-8'>
                <img src={logo} alt={logoAlt} className='w-20 mx-auto'/>
            </div>
            <div className='flex mt-6 lg:mt-0 justify-center lg:justify-end lg:ml-8'>
                <a href={link1} className={icon1? 'bg-gray-800 inline-block w-6 h-6 rounded-full flex items-center justify-center' : ''} target='_blank'><img src={icon1} className='h-3' /></a>
                <a href={link2} className={icon2? 'inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center' : ''} target='_blank'><img src={icon2} className='h-3' /></a>
                <a href={link3} className={icon3? 'inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center' : ''} target='_blank'><img src={icon3} className='h-3' /></a>
                <a href={link4} className={icon4? 'inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center' : ''} target='_blank'><img src={icon4} className='h-3' /></a>
            </div>
        </div>
    )
};
  
export default FooterMini5;
