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
// import SubjectCard from 'views/utilities/SubjectCard';
import SaveVisitedURLs from 'components/dashboard/SaveVisitedURLS';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
     {/*    // ==============================||SaveVisitedURLs for save most visited pages in local storage  ||============================== // */}
          <SaveVisitedURLs>   
            <Routes />
          </SaveVisitedURLs>
        </NavigationScroll>
      </ThemeProvider>

    </StyledEngineProvider> 
    </>
  )
};

export default App;
