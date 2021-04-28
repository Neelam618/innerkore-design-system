import React, { FC } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchInput.css'


export type SearchInputType = {
    placeholder: string;
    btnTxt: string;
}
        
export const SearchInput: FC<SearchInputType> = ({placeholder, btnTxt}) => {   
    return (
        <div id='myInput'>
            <Input 
                placeholder={placeholder}
                className='h-20 shadow-lg border-0 rounded-lg text-xl'
                suffix={<Button type="primary" size='large' className='rounded-md px-5' icon={<SearchOutlined />}>{btnTxt}</Button>}
                style={{fontSize: 1}}
            />
        </div>
    );
}

export default SearchInput;
