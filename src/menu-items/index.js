import parentDashboard from './parentDashboard';
import parentMenu from './parentMenus';
import ClassTeacherDashboard from './classTeacherDashboard';
import ClassTeacherMenu from './classTeacherMenus';
import SubjectTeacherDashboard from './subjectTeacherDashboard';

// Function to check if the URL contains a specific path
const containsPath = (path) => window.location.pathname.includes(path);

// Initialize menuItems with an empty items array
let menuItems = {
  items: [],
};

// Check if the URL contains "/class-teacher/" path
if (containsPath('/class-teacher/')) {
  // Push items into the items array for class teacher
  menuItems.items.push(ClassTeacherDashboard, ClassTeacherMenu , SubjectTeacherDashboard);
} 
// Check if the URL contains "/parent/" path
else if (containsPath('/parent/')) {
  // Push items into the items array for parent
  menuItems.items.push(parentDashboard, parentMenu);
}

export default menuItems;
