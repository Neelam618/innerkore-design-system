import React, { FC } from 'react';
import { Menu } from 'antd';
import './SubNavbar.css';

const { SubMenu } = Menu;

type SubNavOptionsType = {
  optionTxt: string;
  href: string;
};

type DropdownItemsType = {
  dropdownTitle: string;
  SubNavOptions: SubNavOptionsType[];
};

export type SubNavbarTypes = {
  DropdownItems: DropdownItemsType[];
};

export const SubNavbar: FC<SubNavbarTypes> = ({ DropdownItems }) => {
  return (
    <div className="hidden xl:flex px-5 md:px-20 xl:px-30" id="subnav">
      <Menu mode="horizontal" style={{ marginLeft: -10 }}>
        {DropdownItems.map(({ dropdownTitle, SubNavOptions }) => {
          return (
            <SubMenu popupClassName="subNavPopup" title={dropdownTitle} className="submenu-title">
              {SubNavOptions.map(({ optionTxt, href }) => {
                return (
                  <Menu.Item>
                    <a href={href} style={{ display: 'block' }}>
                      {optionTxt}
                    </a>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </div>
  );
};

export default SubNavbar;
