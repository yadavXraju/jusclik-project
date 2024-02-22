// Import all dashboard and menu components
import parentDashboard from './parentDashboard';
import parentMenu from './parentMenus';
import ClassTeacherDashboard from './classTeacherDashboard';
import ClassTeacherMenu from './classTeacherMenus';
import SubjectTeacherDashboard from './subjectTeacherDashboard';
import VisitorDashboard from './visitor-dashboard/visitorDashboard';
import VisitorMenu from './visitor-dashboard/visitorMenus';

// Retrieve user role from local storage
const userRole = localStorage.getItem('userRole');

// Initialize menuItems with an empty items array
let menuItems = {
  items: [],
};

// Render components based on user role
switch (userRole) {
  case 'parent':
    // Push items into the items array for parent
    menuItems.items.push(parentDashboard, parentMenu);
    break;
  case 'class-teacher':
    // Push items into the items array for class teacher
    menuItems.items.push(ClassTeacherDashboard, ClassTeacherMenu);
    break;
  case 'subject-teacher':
    // Push items into the items array for subject teacher
    menuItems.items.push(SubjectTeacherDashboard);
    break;
  case 'visitor':
    // Push items into the items array for visitor
    menuItems.items.push(VisitorDashboard, VisitorMenu);
    break;
  default:
    // Handle default case or unauthorized access
    break;
}

export default menuItems;