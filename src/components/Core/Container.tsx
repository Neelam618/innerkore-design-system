import React, { FC } from 'react';

export type ContainerTypes = {
    children: React.ReactNode;
};

export const Container:FC<ContainerTypes> = ({
    children,
}) => {
    return (
        <div className='w-full px-2 mx-auto sm:w-4/5 lg:w-4/6:'>{children}</div>
    )
};

  
export default Container;