import React from 'react';
import { HeaderMini1, HeaderMini1Types } from '../../components/Blocks/HeaderMini1';

export default {
    title: 'Blocks/HeaderMini1',
    component: HeaderMini1,
};

export const HeaderMini1a = (args: HeaderMini1Types) => {
    return <HeaderMini1 {...args} />;
};
HeaderMini1a.args = {
    copyRightTxt: '© 2021 Landify UI Kit. All rights reserved'
  };
