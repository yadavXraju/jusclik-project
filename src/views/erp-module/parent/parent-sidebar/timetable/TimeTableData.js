// ======= Page Owner Vikash =========
// ======= Fatch Api data for Timetable =========
import axios from 'axios';

const fetchTimeTableData = async () => {
  try {
    const response = await axios.get(
      'https://uat.shauryasoft.com/api/student/timetable',
      {
        params: {
          SCode: 6,
          Session: '2023-2024',
          UserCode: 0,
          Class: 'IX',
          Section: 'A',
          ECode: 0,
          DateSpecific: '2023-08-05',
        },
        headers: {
          ApiKey: 'CldbvvQeenSv5xs899AIgeN8r7fTtjOdf97cxPw4uMZ1nVfYyvkQsQ9Mn8zrOYyA',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const timeTableData1 = fetchTimeTableData();

export default timeTableData1;