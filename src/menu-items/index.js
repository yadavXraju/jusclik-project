// Import all dashboard and menu components
import parentDashboard from './parentDashboard';
import parentMenu from './parentMenus';
import ClassTeacherDashboard from './classTeacherDashboard';
import ClassTeacherMenu from './classTeacherMenus';
import SubjectTeacherDashboard from './subjectTeacherDashboard';

import VisitorDashboard from './erp-menus/visitor/visitorDashboard';
import VisitorMenu from './erp-menus/visitor/visitorMenus';

import StudentInfoFeeDashboard from './erp-menus/student-info-fee-management/studnetInfoFeeDashboard';
import StudentInfoFeeMenu from './erp-menus/student-info-fee-management/studentInfoFeeMenus';

// Function to retrieve user role from local storage
const getUserRole = () => {
  return localStorage.getItem('userRole');
};

// Function to generate menu items based on the user role
const generateMenuItems = (userRole) => {
  const menuItems = {
    items: [],
  };

  switch (userRole) {
    case 'parent':
      menuItems.items.push(parentDashboard, parentMenu);
      break;
    case 'class-teacher':
      menuItems.items.push(ClassTeacherDashboard, ClassTeacherMenu);
      break;
    case 'subject-teacher':
      menuItems.items.push(SubjectTeacherDashboard);
      break;
    case 'visitor':
      menuItems.items.push(VisitorDashboard, VisitorMenu);
      break;
    case 'stufee':
      menuItems.items.push(StudentInfoFeeDashboard, StudentInfoFeeMenu);
      break;
    default:
      // Handle default case or unauthorized access
      break;
  }

  return menuItems;
};

// Export function to retrieve and generate menu items
export const getMenuItems = () => {
  const userRole = getUserRole();
  return generateMenuItems(userRole);
};
