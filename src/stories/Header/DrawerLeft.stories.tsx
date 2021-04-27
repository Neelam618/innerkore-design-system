import React from 'react';
import { DrawerLeft, DrawerLeftTypes } from '../../components/Header/DrawerLeft/DrawerLeft';
import Menu from '../../../public/img/drawer-menu.svg';

export default {
  title: 'Header/Mobile/DrawerLeft',
  component: DrawerLeft,
};

export const PrimaryDrawerLeft = (args: DrawerLeftTypes) => {
  return <DrawerLeft {...args} />;
};

PrimaryDrawerLeft.args = {
  imgSrcIconLeft: Menu,
  SelectOptions: [
    { optionTxt: 'Web Themes & Template', href: '#' },
    { optionTxt: 'Code', href: '#' },
    { optionTxt: 'Video', href: '#' },
    { optionTxt: 'Audio', href: '#' },
    { optionTxt: 'Photos', href: '#' },
    { optionTxt: '3D Files', href: '#' },
  ],

  Panels: [
    {
      panelHeader: 'All Items',
      PanelChildren: [
        { panelLink: 'Poular Files', href: '#' },
        { panelLink: 'Featured Files', href: '#' },
        { panelLink: 'Top New Files', href: '#' },
        { panelLink: 'Follow feed', href: '#' },
        { panelLink: 'Top Authors', href: '#' },
        { panelLink: 'Top New Authors', href: '#' },
        { panelLink: 'Public Collections', href: '#' },
        { panelLink: 'View All Categories', href: '#' },
      ],
    },
    {
      panelHeader: 'PHP Scripts',
      PanelChildren: [
        { panelLink: 'Show All PHP Scripts', href: '#' },
        { panelLink: 'Polpular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Calendars', href: '#' },
        { panelLink: 'Countdowns', href: '#' },
        { panelLink: 'Datebase Abstractions', href: '#' },
        { panelLink: 'Forms', href: '#' },
        { panelLink: 'Help and Support Tools', href: '#' },
        { panelLink: 'Images and Media', href: '#' },
        { panelLink: 'Loaders and Uploaders', href: '#' },
        { panelLink: 'Navigation', href: '#' },
        { panelLink: 'News Tickers', href: '#' },
        { panelLink: 'Polls', href: '#' },
        { panelLink: 'Project Management Tools', href: '#' },
        { panelLink: 'Ratings and Charts', href: '#' },
        { panelLink: 'Search', href: '#' },
        { panelLink: 'Shopping Carts', href: '#' },
        { panelLink: 'Social Networking', href: '#' },
        { panelLink: 'Miscellaneous', href: '#' },
      ],
    },
    {
      panelHeader: 'WordPress',
      PanelChildren: [
        { panelLink: 'Show All WordPress', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
        { panelLink: 'Forums', href: '#' },
        { panelLink: 'Galleries', href: '#' },
        { panelLink: 'Interface Elements', href: '#' },
        { panelLink: 'Media', href: '#' },
        { panelLink: 'Membership', href: '#' },
        { panelLink: 'Newsletters', href: '#' },
        { panelLink: 'SEO', href: '#' },
        { panelLink: 'Social Networking', href: '#' },
        { panelLink: 'Utilities', href: '#' },
        { panelLink: 'Widgets', href: '#' },
        { panelLink: 'Miscellaneous', href: '#' },
        { panelLink: 'WordPress Themes on ThemeForest', href: '#' },
      ],
    },
    {
      panelHeader: 'eCommerce',
      PanelChildren: [
        { panelLink: 'Show All eCommerce', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
      ],
    },
    {
      panelHeader: 'Javascript',
      PanelChildren: [
        { panelLink: 'Show All eCommerce', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
      ],
    },
    {
      panelHeader: 'CSS',
      PanelChildren: [
        { panelLink: 'Show All eCommerce', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
      ],
    },
    {
      panelHeader: 'Mobile',
      PanelChildren: [
        { panelLink: 'Show All eCommerce', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
      ],
    },
    {
      panelHeader: 'HTML5',
      PanelChildren: [
        { panelLink: 'Show All eCommerce', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
      ],
    },
    {
      panelHeader: 'Skins',
      PanelChildren: [
        { panelLink: 'Show All eCommerce', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
      ],
    },
    {
      panelHeader: 'WP Themes',
      PanelChildren: [
        { panelLink: 'Show All eCommerce', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
      ],
    },
    {
      panelHeader: 'Plugins',
      PanelChildren: [
        { panelLink: 'Show All eCommerce', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
      ],
    },
    {
      panelHeader: 'Mockup Generator',
      PanelChildren: [
        { panelLink: 'Show All eCommerce', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
      ],
    },
    {
      panelHeader: 'More',
      PanelChildren: [
        { panelLink: 'Show All eCommerce', href: '#' },
        { panelLink: 'Popular Items', href: '#' },
        { panelLink: 'Add-ons', href: '#' },
        { panelLink: 'Advertising', href: '#' },
        { panelLink: 'Calandars', href: '#' },
        { panelLink: 'eCommerce', href: '#' },
        { panelLink: 'Elementor', href: '#' },
        { panelLink: 'Forms', href: '#' },
      ],
    },
  ],
};