import React from 'react';
import { FooterMini1, FooterMini1Types } from '../../components/Blocks/FooterMini1';

import Insta from '../../../public/img/instagram.svg';
import Twitter from '../../../public/img/twitter.svg';
import Dribble from '../../../public/img/dribble.svg';
import Youtube from '../../../public/img/youtube.svg';

import Github from '../../../public/img/github.svg'

export default {
    title: 'Blocks/FooterMini1',
    component: FooterMini1,
};

export const FooterMini1a = (args: FooterMini1Types) => {
    return <FooterMini1 {...args} />;
};
FooterMini1a.args = {
    copyRightTxt: '© 2021 Landify UI Kit. All rights reserved',
    icon1: Twitter,
    link1: 'https://twitter.com/',
    icon2: Insta,
    link2: 'https://instagram.com/',
    icon3: Dribble,
    link3: 'https://dribble.com/',
    icon4: Youtube,
    link4: 'https://youtube.com/',
    icon5: Github,
    link5: 'https//github.com' 
};

export const FooterMini1b = (args: FooterMini1Types) => {
    return <FooterMini1 {...args} />;
};
FooterMini1b.args = {
    copyRightTxt: '© 2021 Landify UI Kit. All rights reserved',
    icon1: Github,
    link1: 'https//github.com',
    icon2: Insta,
    link2: 'https://instagram.com/',
    icon3: Dribble,
    link3: 'https://dribble.com/',
};