import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useTheme } from '@mui/material/styles';
import { Collapse ,List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import NavItem from '../NavItem';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import { urlStore } from 'themes/navigation-for-pages/UrlStore';
import { useSelector } from 'react-redux';
// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

const NavCollapse = ({ menu, level }) => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClick = () => {
    setOpen(!open);
    setSelected(!selected ? menu.id : null);
    if (menu?.id !== 'authentication') {
      navigate(menu.children[0]?.url);
    }
     
    urlStore.title=''
    urlStore.url=''
    urlStore.children=''
  
// Store children titles in an array
const childrenTitles = [];

// Store children titles and URLs in urlStore
if (menu.children) {
  const childrenData = menu.children.map(child => {
    childrenTitles.push(child.title); // Store child title
    return {
      title: child.title,
      url: child.url
    };
    
  });
  urlStore.children = childrenData;
}

menus.map(item=>{
  console.log(item.props.item)
})
  };


  const { pathname } = useLocation();
  const checkOpenForParent = (child, id) => {
    child.forEach((item) => {
      if (item.url === pathname) {
        setOpen(true);
        setSelected(id);
      }
    });
  };

  // menu collapse for sub-levels
  useEffect(() => {
    setOpen(false);
    setSelected(null);
    if (menu.children) {
      menu.children.forEach((item) => {
        if (item.children?.length) {
          checkOpenForParent(item.children, menu.id);
        }
        if (item.url === pathname) {
          setSelected(menu.id);
          setOpen(true);
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, menu.children]);

  // menu collapse & item
  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={level + 1} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const Icon = menu.icon;
  const menuIcon = menu.icon ? (
    <Icon strokeWidth={1.5} size="1.3rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: selected === menu.id ? 8 : 6,
        height: selected === menu.id ? 8 : 6,

      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );
  return (
    <>

       <ListItemButton
        className='menu-wrapper'
        sx={{
          borderRadius: `${customization.borderRadius}px`,
          mb: 0.5,
          alignItems: 'flex-start',
          backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
          py: level > 1 ? 1 : 1.25,
          justifyContent:'center',
          pl: `${level * 24}px`,
          height:'38px',
        }}
        selected={selected === menu.id}
        onClick={handleClick}
      >
          <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }} className='menu-icon'>{menuIcon} </ListItemIcon>
          <ListItemText
          className='menuList'
            primary={
              <Typography variant={selected === menu.id ? 'h5' : 'body1'} color="inherit" sx={{ my:'auto'  }} className='menu-title'>
                {menu.title}
              </Typography>
            }
            secondary={
              menu.caption && (
                <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom className='menu-caption'>
                  {menu.caption}
                </Typography>
              )
            }
          />

          {/* icon for collapse menus */}

          {open ? (
            <IconChevronUp stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          ) : (
            <IconChevronDown stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          )}
        </ListItemButton>

      {/* here is collapse menu */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: 'relative',
            '&:after': {
              content: "''",
              position: 'absolute',
              left: '32px',
              top: 0,
              height: '100%',
              width: '1px',
              opacity: 1,
              background: theme.palette.primary.light,
            }
          }}

          onClick={() => {
            console.log(menus.map(item => item.props.item.title));
        }}

        
          className='submenutitle'
        >
          {menus}
        </List>
      </Collapse>

    </>
  );
};

NavCollapse.propTypes = {
  menu: PropTypes.object,
  level: PropTypes.number
};

export default NavCollapse;
