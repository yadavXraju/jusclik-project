
import GmailInboxTemplate from '../MailBox';
// import Typography from '@mui/material/Typography';
import MainCard from 'ui-component/cards/MainCard';

const RecentMessage = () => {
  return (
    <MainCard title="MAIL">
    <GmailInboxTemplate/>
        </MainCard>
  )
}

export default RecentMessage;