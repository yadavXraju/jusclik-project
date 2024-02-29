// // Import all dashboard and menu components
// import parentDashboard from './parentDashboard';
// import parentMenu from './parentMenus';
// import ClassTeacherDashboard from './classTeacherDashboard';
// import ClassTeacherMenu from './classTeacherMenus';
// import SubjectTeacherDashboard from './subjectTeacherDashboard';
// import VisitorDashboard from './visitor-dashboard/visitorDashboard';
// import VisitorMenu from './visitor-dashboard/visitorMenus';

// // Retrieve user role from local storage
// const userRole = localStorage.getItem('userRole');

// // Initialize menuItems with an empty items array
// let menuItems = {
//   items: [],
// };

// // Render components based on user role
// switch (userRole) {
//   case 'parent':
//     // Push items into the items array for parent
//     menuItems.items.push(parentDashboard, parentMenu);
//     break;
//   case 'class-teacher':
//     // Push items into the items array for class teacher
//     menuItems.items.push(ClassTeacherDashboard, ClassTeacherMenu);
//     break;
//   case 'subject-teacher':
//     // Push items into the items array for subject teacher
//     menuItems.items.push(SubjectTeacherDashboard);
//     break;
//   case 'visitor':
//     // Push items into the items array for visitor
//     menuItems.items.push(VisitorDashboard, VisitorMenu);
//     break;
//   default:
//     // Handle default case or unauthorized access
//     break;
// }

// export default menuItems;



// temporary url based menu rendering 


import parentDashboard from './parentDashboard';
import parentMenu from './parentMenus';
import ClassTeacherDashboard from './classTeacherDashboard';
import ClassTeacherMenu from './classTeacherMenus';
import SubjectTeacherDashboard from './subjectTeacherDashboard';
import VisitorDashboard from './erp-menus/visitor/visitorDashboard';
import VisitorMenu from './erp-menus/visitor/visitorMenus';
import StudentInfoFeeDashboard from './erp-menus/student-info-fee-management/studnetInfoFeeDashboard';
import StudentInfoFeeMenu from './erp-menus/student-info-fee-management/studentInfoFeeMenus';


// Function to check if the URL contains a specific path
const containsPath = (path) => window.location.pathname.includes(path);

// Initialize menuItems with an empty items array
let menuItems = {
  items: [],
};



// Check if the URL contains "/parent/" path
if (containsPath('/parent/')) {
  // Push items into the items array for parent
  menuItems.items.push(parentDashboard, parentMenu);
}

// Check if the URL contains "/class-teacher/" path
else if (containsPath('/class-teacher/')) {
  // Push items into the items array for class teacher
  menuItems.items.push(ClassTeacherDashboard, ClassTeacherMenu  );
} 


// Check if the URL contains "/parent/" path
else if (containsPath('/subject-teacher/')) {
  // Push items into the items array for parent
  menuItems.items.push(SubjectTeacherDashboard);
}


// Check if the URL contains "/parent/" path
else if (containsPath('/visitor/')) {
  // Push items into the items array for parent
  menuItems.items.push(VisitorDashboard , VisitorMenu);
}


// Check student info fee
else if (containsPath('/student-info-fee/')) {
  // Push items into the items array for parent
  menuItems.items.push(StudentInfoFeeDashboard, StudentInfoFeeMenu );
}

export default menuItems;
