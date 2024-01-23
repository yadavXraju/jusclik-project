import axios from 'axios';
import Config from 'config';
import UserProfile from './userproile';

var SetSession = (function() {
const token = localStorage.getItem("token");
EncodeDecodeData(token);
// UsersData(loginID);
});

const EncodeDecodeData = async (token) => {
  const response = await axios.get(
    Config.apiUrl+'/encode/decode',
    { 
      params: {
        AuthCode: token,
        Type: "Decode",
        SCode: 6,
      },
    }
  );
  if (response.data.result !== null && response.data.result !== ''&& response.data.result  !== undefined ) {
    
      var loginID = response.data.result;
      const responseUsers = await axios.get(
        Config.apiUrl+'/users',
        { 
          params: {
            Scode: 6,
            LoginID: loginID,
          },
        }
      );
      if (responseUsers.data !== null && responseUsers.data !== ''&& responseUsers.data  !== undefined ) {
        UserProfile.setData(responseUsers.data);
      } else {
        alert('Invaild Authentication');
      }
    }else {
    alert('Invaild Authentication');
  }


};




export default SetSession;