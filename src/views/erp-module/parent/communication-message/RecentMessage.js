// Page Owner: Suraj
// Description: Recent Message

import GmailInboxTemplate from './MailBox';
import { Paper ,Box, useMediaQuery} from '@mui/material';


const RecentMessage = () => {
  const res2650 = useMediaQuery('(min-width:2000px)')
  let rem = res2650?'19rem':null
  return (
    <Paper>
      <Box sx={{paddingLeft:rem , paddingRight:rem}}>
      
    <GmailInboxTemplate/>
    </Box>
   
    </Paper>
  )
}

export default RecentMessage;