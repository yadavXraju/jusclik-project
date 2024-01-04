import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
// import Attendance from './Attendance.js';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

<<<<<<< HEAD
//import EllipsisList from './views/utilities/Communication';
=======
>>>>>>> 107b364264565b3b17c637e1552a4c91c912e40d
// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
<<<<<<< HEAD
      {/* <EllipsisList /> */}
=======
>>>>>>> 107b364264565b3b17c637e1552a4c91c912e40d
    </StyledEngineProvider>
    {/* <Attendance /> */}
    </>
  );
};

export default App;
