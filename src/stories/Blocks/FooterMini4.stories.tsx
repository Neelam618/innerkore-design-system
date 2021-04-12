import React from 'react';
import { FooterMini4, FooterMini4Types } from '../../components/Blocks/FooterMini4';
import Insta from '../../../public/img/instagram.svg';
import MyLogo from '../../../public/img/mylogo.png'

export default {
    title: 'Blocks/FooterMini4',
    component: FooterMini4,
};

export const FooterMini4a = (args: FooterMini4Types) => {
    return <FooterMini4 {...args} />;
};

export const FooterMini4b = (args: FooterMini4Types) => {
    return <FooterMini4 {...args} />;
};
FooterMini4b.args = {
    copyRightTxt: '© 2021 Landify UI Kit. All rights reserved',
    logo: MyLogo,
    logoAlt: 'my logo alt text',
    icon1: Insta,
    link1: 'https//google.com'
};
