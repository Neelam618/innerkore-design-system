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
    copyRightTxt: '© 2021 Landify UI Kit. All rights reserved',
    navLink1: '#', 
    navLink2: '#', 
    navLink3: '#', 
    navLink4: '#',
    navTxt1: 'Home', 
    navTxt2: 'About', 
    navTxt3: 'Blog', 
    navTxt4: 'Contact'
};
