import React, { FC } from 'react';

export type FooterMini6Types = {

    /** Enter copyright text */
    copyRightTxt: string;

    logo: string;

    logoAlt:string;

    downloadLink: string; licenseLink: string; downloadTxt: string; licenseTxt: string;

    navLink1: string; navLink2: string; navLink3: string; navLink4: string; navLink5: string; navLink6: string;

    navTxt1: string; navTxt2: string; navTxt3: string; navTxt4: string; navTxt5: string; navTxt6: string;

    badgeTitle: string; badge1: string; badgeAlt1: string; badge2: string; badgeAlt2: string;
};

export const FooterMini6: FC<FooterMini6Types> = ({
    copyRightTxt,
    downloadLink, licenseLink, downloadTxt, licenseTxt,
    navLink1, navLink2, navLink3, navLink4, navLink5, navLink6,
    logo, 
    navTxt1, navTxt2, navTxt3, navTxt4, navTxt5, navTxt6,
    badgeTitle, badge1, badgeAlt1, badge2, badgeAlt2
}) => {
    return (
        <div className='flex justify-between px-5 md:px-20 xl:px-40 py-16 bg-black'>
            <div className=''>
                <img src={logo} alt="" className='w-20'/> 
                <div className='mt-6'>
                    <a href={downloadLink} className='text-gray-400 mr-6'>{downloadTxt}</a>
                    <a href={licenseLink} className='text-gray-400'>{licenseTxt}</a>
                </div>  
                <div className='mt-3'>
                    <ul>
                        <li>
                            <a href={navLink1} className='text-gray-400 mr-6'>{navTxt1}</a>
                            <a href={navLink2} className='text-gray-400 mr-6'>{navTxt2}</a>
                            <a href={navLink3} className='text-gray-400 mr-6'>{navTxt3}</a>
                            <a href={navLink4} className='text-gray-400 mr-6'>{navTxt4}</a>
                            <a href={navLink5} className='text-gray-400 mr-6'>{navTxt5}</a>
                            <a href={navLink6} className='text-gray-400'>{navTxt6}</a>
                        </li>
                    </ul>
                </div>
                <div className='text-gray-400 mt-6'>{copyRightTxt}</div>
            </div>
            <div>
                <h5 className='text-gray-400'>{badgeTitle}</h5>
                <img src={badge1} alt={badgeAlt1} className='mt-4'/>
                <img src={badge2} alt={badgeAlt2} className='mt-4'/>
            </div>
        </div>
    )
};
  
export default FooterMini6;
