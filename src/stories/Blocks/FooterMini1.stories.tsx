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
    copyRightTxt: '© 2020 Landify UI Kit. All rights reserved',
    links_with_icons: [
        { icon: Twitter, link: 'https://twitter.com/' },
        { icon: Insta, link: 'https://instagram.com/' },
        { icon: Dribble, link: 'https://dribble.com/' },
        { icon: Youtube, link: 'https://youtube.com/' },
        { icon: Github, link: 'https//github.com' }
    ] 
};