// Page Owner Abhishek
// Description : Tis file contains Brand logo 

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonBase } from '@mui/material';
import config from 'config';
import Logo from 'ui-component/Logo';
import {menuOpen} from 'store/customization-slice';

// ==============================|| Brand LOGO ||============================== //

const LogoSection = () => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();
  return (
    <ButtonBase disableRipple onClick={() => dispatch(menuOpen({defaultId}))} component={Link} to={config.defaultPath}>
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
