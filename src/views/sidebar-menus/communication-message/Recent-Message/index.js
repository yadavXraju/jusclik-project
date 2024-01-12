import GmailInboxTemplate from '../MailBox';
import MainCard from 'ui-component/cards/MainCard';

const RecentMessage = () => {
  return (
    <MainCard title="MAIL">
    <GmailInboxTemplate/>
        </MainCard>
  )
}

export default RecentMessage;