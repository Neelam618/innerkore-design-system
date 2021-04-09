import React, { FC } from 'react';
import Insta from '../../../public/img/instagram.svg';
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';


export type HeaderMini1Types = {
    /** Label of the button */
    // label: string;

    /** Add classes to component */
    className?: string;

    /** Add href to anchor tag */
    href?: string;

    /** Target attribute values */
    target: '_blank' | '_self' | '_parent' | '_top';

    /** Add icon path to the button */
    icon1:string, icon2: string; icon3:string; icon4:string;
    
    link1:string; link2:string; link3: string; link4:string;

    /** Specify icon alignment */
    //   align?: 'left' | 'right';
    copyRightTxt: string;
};


export const HeaderMini1: FC<HeaderMini1Types> = ({
    copyRightTxt ='© 2020 Landify UI Kit. All rights reserved',
    icon1 = Insta, icon2 = Twitter, icon3 = Dribble, icon4 = Youtube,
    link1 = 'https://instagram.com/', link2 = 'https://twitter.com/', link3 = 'https://dribble.com/', link4 = 'https://youtube.com/',
   
}) => {
    return (
        <div className='flex justify-between items-center py-6 px-40 bg-gray-900'>
            <div className='text-gray-300 text-sm'>{copyRightTxt}</div>
            <div className='flex'>
                <a href={link1} className='inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center' target='_blank'><img src={icon1} className='h-3' /></a>
                <a href={link2} className='inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center'target='_blank'><img src={icon2} className='h-3' /></a>
                <a href={link3} className='inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center' target='_blank'><img src={icon3} className='h-3' /></a>
                <a href={link4} className='inline-block ml-4 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center' target='_blank'><img src={icon4} className='h-3' /></a>
            </div>
        </div>
    )
};

  
export default HeaderMini1;
