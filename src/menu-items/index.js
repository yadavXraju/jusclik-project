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

// Check if the URL contains "/class-teacher-dashboard" path
if (containsPath('/class-teacher-dashboard')) {
  // Push items into the items array
  menuItems.items.push(teacherDashboard, teacherMenu);
} else if (containsPath('/parent-dashboard')) {
  // Push items into the items array
  menuItems.items.push(parentDashboard, parentMenu);
}

export default menuItems;
