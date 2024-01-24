import GmailInboxTemplate from '../MailBox';
import { Paper } from '@mui/material';
// import MainCard from 'ui-component/cards/MainCard';

const RecentMessage = () => {
  return (
    // <MainCard title="MAIL">
    <Paper>
    <GmailInboxTemplate/>
    </Paper>
        // </MainCard>
  )
}

export default RecentMessage;