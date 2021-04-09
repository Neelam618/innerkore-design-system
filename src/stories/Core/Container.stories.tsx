import React from 'react';
import { Container, ContainerTypes } from '../../components/Core/Container';

export default {
    title: 'Core/Container',
    component: Container,
    argTypes: {
      label: { control: 'text' },
    },
};

export const ContainerDemo = (args: ContainerTypes) => {
    return <Container {...args} />;
};

ContainerDemo.args = {
    children: <div>losdkjsdlsdijsldjlsijdljsldjsladllskjd sdjsaljd  sdjjds sadijsad sdsd dsds dddddddddd sssssss dddddddd ggggggggggg</div>
};


