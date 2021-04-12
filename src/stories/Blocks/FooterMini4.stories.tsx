import React from 'react';
import { FooterMini4, FooterMini4Types } from '../../components/Blocks/FooterMini4';
import Insta from '../../../public/img/instagram.svg';
import MyLogo from '../../../public/img/mylogo.png'
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';
import Logo from '../../../public/img/logo.png'

export default {
    title: 'Blocks/FooterMini4',
    component: FooterMini4,
};

export const FooterMini4a = (args: FooterMini4Types) => {
    return <FooterMini4 {...args} />;
};

FooterMini4a.args = {
    icon1: Insta, 
    icon2: Dribble, 
    icon3: Twitter, 
    icon4: Youtube,
    link1: 'https://instagram.com', 
    link2: 'https://dribble.com', 
    link3: 'https://twitter.com', 
    link4: 'https://youtube.com', 
    copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
    logo: Logo,
    logoAlt: 'Landify'

}
export const FooterMini4b = (args: FooterMini4Types) => {
    return <FooterMini4 {...args} />;
};
FooterMini4b.args = {
    copyRightTxt: '© 2021 Landify UI Kit. All rights reserved',
    logo: MyLogo,
    logoAlt: 'my logo alt text',
    icon1: Insta,
    link1: 'https://google.com',
    icon2: Dribble, 
    link2: 'https://dribble.com',
    icon3: Twitter, 
    link3: 'https://twitter.com',
};
