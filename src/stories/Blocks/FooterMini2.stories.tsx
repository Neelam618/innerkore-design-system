import React from 'react';
import { FooterMini2, FooterMini2Types } from '../../components/Blocks/FooterMini2';

export default {
  title: 'Blocks/Footer/Mini/FooterMini2',
  component: FooterMini2,
};

export const FooterMini2a = (args: FooterMini2Types) => {
  return <FooterMini2 {...args} />;
};
FooterMini2a.args = {
  copyRightTxt: '© 2021 Landify UI Kit. All rights reserved',
};
