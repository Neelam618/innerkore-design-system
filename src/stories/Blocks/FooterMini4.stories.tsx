import React from 'react';
import { FooterMini4, FooterMini4Types } from '../../components/Blocks/FooterMini4';

export default {
    title: 'Blocks/FooterMini4',
    component: FooterMini4,
};

export const FooterMini4a = (args: FooterMini4Types) => {
    return <FooterMini4 {...args} />;
};
FooterMini4a.args = {
    copyRightTxt: '© 2021 Landify UI Kit. All rights reserved',
    logoAlt: 'my logo alt text'
};
