// Import all dashboard and menu components
// parent
import parentDashboard from './parentDashboard';
import parentMenu from './parentMenus';

// class teacher
import ClassTeacherDashboard from './classTeacherDashboard';
import ClassTeacherMenu from './classTeacherMenus';

// subject teacher
import SubjectTeacherDashboard from './subjectTeacherDashboard';

// visitor
import VisitorDashboard from './erp-menus/visitor/visitorDashboard';
import VisitorMenu from './erp-menus/visitor/visitorMenus';

// stufee
import StudentInfoFeeDashboard from './erp-menus/student-info-fee-management/studnetInfoFeeDashboard';
import StudentInfoFeeMenu from './erp-menus/student-info-fee-management/studentInfoFeeMenus';

// inventory
import InventoryDashboard from './erp-menus/inventory/inventoryDashboard';
import InventoryMenu from './erp-menus/inventory/inventoryMenus';

// library
import LibraryDashboard from './erp-menus/library/libraryDashboard';
import LibraryMenu from './erp-menus/library/libraryMenus';

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
    // if user role is parent the open parent menus and so on 
    case 'parent':
      menuItems.items.push(parentDashboard, parentMenu);
      break;

      // class teacher
    case 'class-teacher':
      menuItems.items.push(ClassTeacherDashboard, ClassTeacherMenu);
      break;

      // subject techer
    case 'subject-teacher':
      menuItems.items.push(SubjectTeacherDashboard);
      break;

      // visitor
    case 'visitor':
      menuItems.items.push(VisitorDashboard, VisitorMenu);
      break;

      // stufee
    case 'stufee':
      menuItems.items.push(StudentInfoFeeDashboard, StudentInfoFeeMenu);
      break;

      // library
      case 'library':
        menuItems.items.push(LibraryDashboard, LibraryMenu);
        break;

      // inventory
      case 'inventory':
        menuItems.items.push(InventoryDashboard, InventoryMenu);
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
