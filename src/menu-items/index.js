// Page Owner Abhishek
//   Description : Push the menu items accroding to erp module 

// parent
import parentDashboard from 'menu-items/erp-menus/parentDashboard';
import parentMenu from 'menu-items/erp-menus/parentMenus';

// class teacher
import ClassTeacherDashboard from 'menu-items/erp-menus/classTeacherDashboard';
import ClassTeacherMenu from 'menu-items/erp-menus/classTeacherMenus';
// visitor
import VisitorDashboard from 'menu-items/erp-menus/visitor/visitorDashboard';
import VisitorMenu from 'menu-items/erp-menus/visitor/visitorMenus';

// stufee
import StudentInfoFeeDashboard from 'menu-items/erp-menus/student-info-fee-management/studnetInfoFeeDashboard';
import StudentInfoFeeMenu from 'menu-items/erp-menus/student-info-fee-management/studentInfoFeeMenus';

// inventory
import InventoryDashboard from 'menu-items/erp-menus/inventory/inventoryDashboard';
import InventoryMenu from 'menu-items/erp-menus/inventory/inventoryMenus';

// library
import LibraryDashboard from 'menu-items/erp-menus/library/libraryDashboard';
import LibraryMenu from 'menu-items/erp-menus/library/libraryMenus';

// hr payroll
import HrPayRollDashboard from 'menu-items/erp-menus/hr-payroll/hrPayRollDashboard';
import HrPayRollMenu from 'menu-items/erp-menus/hr-payroll/hrPayrollMenus';

// crm
import CrmDashboard from 'menu-items/erp-menus/crm/crmDashboard';
import CrmMenu from 'menu-items/erp-menus/crm/crmMenus';

// from builder
import FormBuilderMenus from 'menu-items/erp-menus/form-builder/formBuilderMenus';

import { useSelector } from 'react-redux';

// Export function to retrieve and generate menu items
export const GetMenuItems = () => {
  const {erpModule} = useSelector((state) =>  state.erpModuleSlice);
  const userRole = erpModule.role;
  return generateMenuItems(userRole);
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

      // hr payroll
      case 'hr-payroll':
        menuItems.items.push(HrPayRollDashboard, HrPayRollMenu);
        break;

    // crm
      case 'crm':
        menuItems.items.push(CrmDashboard , CrmMenu);
        break;

        // form builder
      case 'form-builder':
        menuItems.items.push(FormBuilderMenus);
        break;

    default:
      // Handle default case or unauthorized access
      break;
  }

  return menuItems;
};

