import React from 'react';
import { HeaderMini1, HeaderMini1Types } from '../../components/Blocks/HeaderMini1';

export default {
    title: 'Blocks/HeaderMini1',
    component: HeaderMini1,
    argTypes: {
      label: { control: 'text' },
    },
  };
  
  export const MediumNormal = (args: HeaderMini1Types) => {
    return <HeaderMini1 {...args} />;
  };
  
  MediumNormal.args = {
    
  };