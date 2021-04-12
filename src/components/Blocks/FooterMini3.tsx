import React, { FC } from 'react';

export type FooterMini3Types = {
    /** Enter copyright text */
    copyRightTxt: string;

    navLink1:string; navLink2:string; navLink3: string; navLink4:string;

    navTxt1: string; navTxt2: string; navTxt3: string; navTxt4:string;
};

export const FooterMini3: FC<FooterMini3Types> = ({
    copyRightTxt ='© 2020 Landify UI Kit. All rights reserved',
    navLink1 ='#', navLink2 ='#', navLink3='#', navLink4='#',
    navTxt1 ='Home', navTxt2 ='About', navTxt3 ='Blog', navTxt4 ='Contact'
}) => {
    return (
        <div className='flex justify-between py-6 px-5 md:px-20 xl:px-40 bg-black'>
            <div>
                <nav>
                    <ul className='flex'>
                        <li><a href={navLink1} className='text-gray-400 text-sm mr-8'>{navTxt1}</a></li>
                        <li><a href={navLink2} className='text-gray-400 text-sm mr-8'>{navTxt2}</a></li>
                        <li><a href={navLink3} className='text-gray-400 text-sm mr-8'>{navTxt3}</a></li>
                        <li><a href={navLink4} className='text-gray-400 text-sm mr-8'>{navTxt4}</a></li>
                    </ul>
                </nav>
            </div>
            <div className='text-gray-400 text-sm'>{copyRightTxt}</div>
        </div>
    )
};
  
export default FooterMini3;
