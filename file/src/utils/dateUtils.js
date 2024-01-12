export const getCurrentDay = () => {
    const currentDay = new Date().getDay();
    return currentDay === 0 ? 6 : currentDay - 1;
  };
  