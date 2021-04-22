import React, { FC, useState } from 'react';
import { Drawer, Button } from 'antd';
import { Select } from 'antd';
import { Input, Space } from 'antd';
import './DrawerLeft.css';

const { Option } = Select;
const { Search } = Input;

export type DrawerLeftTypes = {
    imgSrcIconLeft: string;
    SelectOptions: SelectOptionsType[];
};

type SelectOptionsType = {
    optionTxt: string;
};

export const DrawerLeft: FC<DrawerLeftTypes> = ({ imgSrcIconLeft, SelectOptions }) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
   
    const onClose = () => {
        setVisible(false);
    };

    const [current, setCurrent] = useState('0');
    
    let title = 
    <>
        <div style={{margin: '1rem 3rem'}}><img src='https://assets.market-storefront.envato.com/storefront/packs/media/images/logos/envato-market-f6121fbbfec25dbc851a3e5aea13c8ad.svg' alt='' style={{height: 15}}></img></div>     
        <Select defaultValue={[current]}
        onClick={() => setCurrent('' + index)}
        dropdownStyle={{padding: 0}}
        listHeight={400}
        style={{ width: '100%' }}
        size={'large'}
        >
            {SelectOptions.map(({ optionTxt}, index) => {
                return (
                    <Option value={'' + index} 
                    style={{backgroundColor: '#2d3748', color:'white', padding: '1rem', margin: 0, fontSize: '1rem'}}
                    >
                    {optionTxt}
                    </Option>
                );
                })}
        </Select>
        <Space direction="vertical" style={{padding: '20px 0', margin: '0 14px'}}>
            <Search placeholder="Search" style={{ width: 230 }}/>
        </Space>
    </>
    return (
        <>
          <Button type="primary" onClick={showDrawer} className='ml-3 bg-gray-700 border-0'>
            <img src={imgSrcIconLeft} alt="" className='block h-4'/>
        </Button>
        <Drawer
        title={title}
            
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        mask={true}
        drawerStyle={{backgroundColor: '#2d3748'}}
        headerStyle={{backgroundColor: '#2d3748', borderBottom: 0, padding: 0}}
        >
        {/* {MenuItems.map(({ menuTxt, href, iconImgSrc }, index) => {
          return (
              <div>
                  <a href={href} className="text-gray-400 hover:text-white inline">{menuTxt}</a>
                  <img src={iconImgSrc} alt="" className='w-5 h-5 inline-block'/>
              </div>
          );
        })} */}
        </Drawer>
        </>
      );
    };