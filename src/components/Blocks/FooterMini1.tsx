import React, { FC } from 'react';

type linkWithIconType = {
    link: string,
    icon: string
}

export type FooterMini1Types = {
    /** Add social icon links with icon url */
    links_with_icons: linkWithIconType[]

    /** Enter copyright text */
    copyRightTxt: string;
};


export const FooterMini1: FC<FooterMini1Types> = ({
    copyRightTxt,
    links_with_icons
  
}) => {
    let linkClassName = 'bg-gray-800 inline-block w-6 h-6 rounded-full flex items-center justify-center';
    return (
        <div className='lg:flex flex-col lg:flex-row lg:justify-between lg:items-center py-6 px-5 md:px-20 xl:px-40 bg-black'>
            <div className='text-gray-400 text-sm text-center lg:text-left'>{copyRightTxt}</div>
            <div className='flex mt-6 lg:mt-0 justify-center lg:justify-end lg:ml-8'>
                {links_with_icons.map(({link, icon}, index) => {
                    if (index === 0) {
                        linkClassName += " ml-4 w-6 h-6";
                    }

                    return <a href={link} className={linkClassName} target='_blank' >
                        <img src={icon} className='h-3' />
                    </a>
                })}
            </div>
        </div>
    )
};
  
export default FooterMini1;
