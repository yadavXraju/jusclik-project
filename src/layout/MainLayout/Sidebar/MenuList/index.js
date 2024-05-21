// Page Owner Abhishek
// Description : This file render all the menus which is in GetMenuItems 

import { Typography } from '@mui/material';
import NavGroup from './NavGroup';
import { GetMenuItems } from 'menu-items';
// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  // console.log('Calling GetMenuItems');

  const menuItems = GetMenuItems();
  
  // console.log('menuItems:', menuItems);

  const navItems = menuItems.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};


export default MenuList;


