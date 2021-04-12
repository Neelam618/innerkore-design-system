import React from 'react';
import { FooterMini6, FooterMini6Types } from '../../components/Blocks/FooterMini6';
import Logo from '../../../public/img/logo.png';
import Badge1 from '../../../public/img/badge1.png';
import Badge2 from '../../../public/img/badge2.png';

export default {
    title: 'Blocks/FooterMini6',
    component: FooterMini6,
};

export const FooterMini6a = (args: FooterMini6Types) => {
    return <FooterMini6 {...args} />;
};

FooterMini6a.args = {
    copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
    downloadLink: '#', 
    licenseLink: '#', 
    downloadTxt: 'Download Now', 
    licenseTxt: 'License',
    navLink1: '#', 
    navLink2: '#', 
    navLink3: '#', 
    navLink4: '#', 
    navLink5: '#', 
    navLink6: '#',
    logo: Logo, 
    navTxt1: 'About', 
    navTxt2: 'Features', 
    navTxt3: 'Pricing', 
    navTxt4: 'Careers', 
    navTxt5: 'Help', 
    navTxt6: 'Privacy Policy',
    badgeTitle: 'Get the App', 
    badge1: Badge1, 
    badgeAlt1: 'App Store', 
    badge2: Badge2, 
    badgeAlt2: 'Google Play'
}