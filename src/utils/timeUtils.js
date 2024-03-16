// timeUtils.js

const today = new Date();
export function getCurrentDate() {
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  }
  
  export function getCurrentTime() {
    const hours = today.getHours(); // Get the current hour (0-23)
const minutes = today.getMinutes(); // Get the current minute (0-59)
const seconds = today.getSeconds(); // Get the current second (0-59)
const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
return formattedTime;
     
  }