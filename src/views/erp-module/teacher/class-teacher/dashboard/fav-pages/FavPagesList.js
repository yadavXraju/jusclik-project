import ClassTeacherMenu from "menu-items/classTeacherMenus";

// Define an empty array to store dynamically generated favorite pages
const FavPagesList = [];

// Iterate over each menu item in ClassTeacherMenu
ClassTeacherMenu.children.forEach(menuItem => {
    // Extract necessary information from the menuItem
    const { id, title, url } = menuItem;

    // Add the extracted information to FavPagesList array
    FavPagesList.push({
        id,
        title,
        url,
        btnText: 'Click Here'
    });
});

// Export the dynamically generated FavPagesList array
export { FavPagesList };