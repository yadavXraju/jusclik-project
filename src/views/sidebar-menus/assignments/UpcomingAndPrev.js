
import { data } from "./AssignmentData";
export const currentDate = new Date();

export const upcomingAssignments = data.filter(item => {
  const dueDate = new Date(item.dueDate);
  return dueDate >= currentDate;
});

export const previousAssignments = data.filter(item => {
  const dueDate = new Date(item.dueDate);
  return dueDate < currentDate;
});

export const sortAssignmentsByDueDate = assignments => {
  return assignments.sort((a, b) => {
    const dueDateA = new Date(a.dueDate);
    const dueDateB = new Date(b.dueDate);
    return dueDateA - dueDateB;
  });
};

export const sortedUpcomingAssignments = sortAssignmentsByDueDate(upcomingAssignments);

export const getFormattedDate = dateString => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};