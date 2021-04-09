import React, { FC } from 'react';

export type FooterMini2Types = {
    /** Enter copyright text */
    copyRightTxt: string;
};


export const FooterMini2: FC<FooterMini2Types> = ({
    copyRightTxt ='© 2020 Landify UI Kit. All rights reserved'  
}) => {
    return (
        <div className='py-6 px-5 lg:px-40 bg-gray-900'>
            <div className='text-gray-400 text-sm text-center'>{copyRightTxt}</div>
        </div>
    )
};
  
export default FooterMini2;
