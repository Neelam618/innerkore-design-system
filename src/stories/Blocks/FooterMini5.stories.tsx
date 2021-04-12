import React from 'react';
import { FooterMini5, FooterMini5Types } from '../../components/Blocks/FooterMini5';
import Insta from '../../../public/img/instagram.svg';
import MyLogo from '../../../public/img/mylogo.png'

export default {
    title: 'Blocks/FooterMini5',
    component: FooterMini5,
};

export const FooterMini5a = (args: FooterMini5Types) => {
    return <FooterMini5 {...args} />;
};

export const FooterMini5b = (args: FooterMini5Types) => {
    return <FooterMini5 {...args} />;
};
FooterMini5b.args = {
    copyRightTxt: '© 2021 Landify UI Kit. All rights reserved',
    logo: MyLogo,
    logoAlt: 'my logo alt text',
    icon1: Insta,
    link1: 'https//google.com'
};
