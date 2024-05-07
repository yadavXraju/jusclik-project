import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { menuOpen} from 'store/customization-slice';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { handleMenuNavItem } from 'store/layout/nav-item-slice';
import { resetMenuNavCollapse } from 'store/layout/nav-collapse-slice';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //
  
const NavItem = ({ item, level , }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const customization = useSelector((state) => state.customization);
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));
  const Icon = item.icon;

  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} size="1.3rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
        height: customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = {
    component: forwardRef((props, ref) => <Link  
    ref={ref} {...props} to={item.url} target={itemTarget} />)
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

const itemHandler = (id) => {
  dispatch(menuOpen({id }));
  if (matchesSM) dispatch(setMENU({opened: false}));
  dispatch(handleMenuNavItem(item)); 
  dispatch(resetMenuNavCollapse());
};

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch(menuOpen({ id: item.id}));
    }


    // eslint-disable-next-line
  }, [pathname]);
  

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      className='menu-wrapper'
      sx={{
        borderRadius: `${customization.borderRadius}px`,
        mb: 0.5,
        height:'38px',
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        justifyContent:'center',
        pl: `${level * 24}px`,
      }}
      selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
      onClick={() => itemHandler(item.id)}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }} className='menu-icon'>{itemIcon}</ListItemIcon>
      <ListItemText
      className='menuList'
        primary={
          <Typography  variant={customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'} color="inherit" className='menu-title'>
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} className='menu-caption' display="block" gutterBottom>
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
