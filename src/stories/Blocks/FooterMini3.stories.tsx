import React from 'react';
import { FooterMini3, FooterMini3Types } from '../../components/Blocks/FooterMini3';

export default {
    title: 'Blocks/FooterMini3',
    component: FooterMini3,
};

export const FooterMini3a = (args: FooterMini3Types) => {
    return <FooterMini3 {...args} />;
};
FooterMini3a.args = {
    copyRightTxt: '© 2021 Landify UI Kit. All rights reserved'
};
