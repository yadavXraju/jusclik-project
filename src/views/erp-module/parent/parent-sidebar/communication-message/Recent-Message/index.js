import GmailInboxTemplate from '../MailBox';
import { Paper ,Box} from '@mui/material';

const RecentMessage = () => {
  return (
    <Paper>
      <Box sx={{paddingLeft:'19rem' , paddingRight:'19rem'}}>
      
    <GmailInboxTemplate/>
    </Box>
   
    </Paper>
  )
}

export default RecentMessage;