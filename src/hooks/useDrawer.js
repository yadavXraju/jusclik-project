import { useState } from 'react';

const useDrawer = () => {
    const [anchor, setAnchor] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setAnchor({ ...anchor, [anchor]: open });
    };

    return {anchor,toggleDrawer};
};

export default useDrawer;
