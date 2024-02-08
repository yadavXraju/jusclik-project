import parentDashboard from './parentDashboard';
import parentMenu from './parentMenus';
import teacherDashboard from './teacherDashboard';
import teacherMenu from './teacherMenus';

// Function to check if the URL contains a specific path
const containsPath = (path) => window.location.pathname.includes(path);

// Initialize menuItems with an empty items array
let menuItems = {
  items: [],
};

// Check if the URL contains "/class-teacher/" path
if (containsPath('/class-teacher/')) {
  // Push items into the items array for class teacher
  menuItems.items.push(teacherDashboard, teacherMenu);
} 
// Check if the URL contains "/parent/" path
else if (containsPath('/parent/')) {
  // Push items into the items array for parent
  menuItems.items.push(parentDashboard, parentMenu);
}

export default menuItems;
