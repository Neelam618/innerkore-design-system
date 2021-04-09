import React from 'react';
import { FooterMini1, FooterMini1Types } from '../../components/Blocks/FooterMini1';

export default {
    title: 'Blocks/FooterMini1',
    component: FooterMini1,
};

export const FooterMini1a = (args: FooterMini1Types) => {
    return <FooterMini1 {...args} />;
};
FooterMini1a.args = {
    copyRightTxt: '© 2021 Landify UI Kit. All rights reserved'
};
