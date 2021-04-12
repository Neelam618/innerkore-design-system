import React, { FC } from 'react';
import Insta from '../../../public/img/instagram.svg';
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';
import Logo from '../../../public/img/logo.png'
import SocialIcons from '../Core/SocialIcons';


export type FooterMini4Types = {

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


export const FooterMini4: FC<FooterMini4Types> = ({
    copyRightTxt ='© 2020 Landify UI Kit. All rights reserved', 
    logo = Logo, logoAlt = 'Landify'
}) => {
    return (
        <div className='lg:flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 px-5 md:px-20 xl:px-40 bg-black'>
            <div className='lg:mr-8'>
                <img src={logo} alt={logoAlt} className='w-20 mx-auto'/>
            </div>
            <div className='text-gray-400 text-sm text-center lg:text-auto mt-6 lg:mt-0'>{copyRightTxt}</div>
            <SocialIcons 
            icon1 = {Insta} icon2 = {Twitter} icon3 = {Dribble} icon4 = {Youtube}
            link1='https://instagram.com/' link2= 'https://twitter.com/' link3= 'https://dribble.com/' link4='https://youtube.com/' />
        </div>
    )
};
  
export default FooterMini4;
