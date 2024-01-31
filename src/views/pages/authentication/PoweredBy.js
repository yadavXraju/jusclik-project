import React from 'react';
import {Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CloudLogo from '../../../assets/images/Untitled-2.png';
import PlayStoreImage from '../../../assets/images/Google-Play.png';
import AppleStoreImage from '../../../assets/images/app-store.png';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const PoweredBySection = () => {
    return (
        <>
            <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', mt: 3 }}>
                <img src={CloudLogo} alt="Logo" />
                <Typography sx={{ color: '#fff', mt: 1 }}>
                    Powered by
                </Typography>
                <Link href="http://www.shauryasoft.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff', textDecoration: 'none' }}>
                    www.shauryasoft.com
                </Link>
            </Grid>
            <Box sx={{ mt: 2, display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    href="PLAY_STORE_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{ height: '50px', width: "150px", display: 'flex', backgroundColor: '#fff', color: '#000', borderRadius: '10px', lineHeight: '15px' }}
                    startIcon={<img src={PlayStoreImage} alt="Play Store" style={{ width: '20px', marginRight: '10px' }} />}
                >
                    GET IT ON Google Play
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    href="APPLE_STORE_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{ height: '50px', width: "150px", display: 'flex', backgroundColor: '#fff', color: '#000', borderRadius: '10px', lineHeight: '15px' }}
                    startIcon={<img src={AppleStoreImage} alt="Apple Store" style={{ width: '25px', marginRight: '10px' }} />}
                >
                    GET IT ON Apple Store
                </Button>
            </Box>
            <Typography variant='subtitle1' color='#fff' sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
                Online Fee Payment Policies/ Terms & Conditions
            </Typography>
        </>
    );
};

export default PoweredBySection;
