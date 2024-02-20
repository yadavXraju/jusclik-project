import parentDashboard from './parentDashboard';
import parentMenu from './parentMenus';
import ClassTeacherDashboard from './classTeacherDashboard';
import ClassTeacherMenu from './classTeacherMenus';
import SubjectTeacherDashboard from './subjectTeacherDashboard';
import VisitorDashboard from './visitor-dashboard/visitorDashboard';


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
  menuItems.items.push(VisitorDashboard);
}



export default menuItems;
