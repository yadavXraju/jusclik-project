import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { alpha, styled } from '@mui/material/styles';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import { useSpring, animated } from '@react-spring/web';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Checkbox, Paper, Container } from '@mui/material';

// Transition component for animated Collapse
function TransitionComponent(props) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`
    }
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

// Custom TreeItem component
const CustomTreeItem = React.forwardRef((props, ref) => <TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />);

// Styled TreeItem component with custom styles
const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3
    }
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
  }
}));

// Reusable CustomizedTreeView component
export default function CustomizedTreeView({ data, onSelect }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (id) => {
    let newCheckedItems = { ...checkedItems };

    // If the clicked node is a parent node
    if (data.some(item => item.nodeId === id && item.children)) {
      const isAllChildrenChecked = data.find(item => item.nodeId === id).children.every(child => newCheckedItems[child.nodeId]);
      newCheckedItems = data.find(item => item.nodeId === id).children.reduce((acc, child) => {
        acc[child.nodeId] = !isAllChildrenChecked;
        return acc;
      }, { ...newCheckedItems });

      // Also check the parent node
      newCheckedItems[id] = !isAllChildrenChecked;
    } else {
      newCheckedItems = {
        ...checkedItems,
        [id]: !checkedItems[id]
      };
    }

    setCheckedItems(newCheckedItems);
    onSelect(id);
  };


  return (
    <Container>
      <Paper elevation={1} sx={{ p: '20px', marginTop: '20px' }}>
       
        <TreeView
          aria-label="customized"
          defaultExpanded={['1']}
          defaultCollapseIcon={<RemoveIcon style={{ border: '1px solid #364152', width: 12, height: 12 }} />}
          defaultExpandIcon={<AddIcon style={{ border: '1px solid #364152', width: 12, height: 12 }} />}
          sx={{ overflowX: 'hidden' }}
        >
          {data.map((item) => (
            <StyledTreeItem
              sx={{ margin: '5px' }}
              key={item.nodeId}
              nodeId={item.nodeId}
              label={
                <>
                  <Checkbox
                    size="small"
                    checked={checkedItems[item.nodeId] || false}
                    onChange={() => handleCheck(item.nodeId)}
                  />
                  <span>{item.label}</span>
                </>
              }
            >
              {item.children &&
                item.children.map((child) => (
                  <StyledTreeItem sx={{ margin: '5px' }} key={child.nodeId} nodeId={child.nodeId} label={<>
                    <Checkbox
                      size="small"
                      checked={checkedItems[child.nodeId] || false}
                      onChange={() => handleCheck(child.nodeId)}
                    />
                    <span>{child.label}</span>
                  </>} >
                  </StyledTreeItem>
                ))}
            </StyledTreeItem>
          ))}
        </TreeView>
      </Paper>
    </Container>
  );
}























// import React from 'react';
// import Collapse from '@mui/material/Collapse';
// import { alpha, styled } from '@mui/material/styles';
// import { TreeView } from '@mui/x-tree-view/TreeView';
// import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
// import { useSpring, animated } from '@react-spring/web';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import CloseIcon from '@mui/icons-material/Close';
// import { Checkbox, Paper } from '@mui/material';
// import { Container } from '@mui/system';


// // Transition component for animated Collapse
// function TransitionComponent(props) {
//   const style = useSpring({
//     to: {
//       opacity: props.in ? 1 : 0,
//       transform: `translate3d(${props.in ? 0 : 20}px,0,0)`
//     }
//   });

//   return (
//     <animated.div style={style}>
//       <Collapse {...props} />
//     </animated.div>
//   );
// }

// // Custom TreeItem component
// const CustomTreeItem = React.forwardRef((props, ref) => <TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />);

// // Styled TreeItem component with custom styles
// const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
//   [`& .${treeItemClasses.iconContainer}`]: {
//     '& .close': {
//       opacity: 0.3
//     }
//   },
//   [`& .${treeItemClasses.group}`]: {
//     marginLeft: 15,
//     paddingLeft: 18,
//     borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
//   }
// }));

// // Reusable CustomizedTreeView component
// export default function CustomizedTreeView({ data }) {
//   return (
//     <Container>
//       <Paper elevation={1} sx={{ p: '20px', marginTop: '20px' }}>
//         <TreeView
//           aria-label="customized"
//           defaultExpanded={['1']}
//           defaultCollapseIcon={<RemoveIcon style={{ border: '1px solid #364152', width: 12, height: 12 }} />}
//           defaultExpandIcon={<AddIcon style={{ border: '1px solid #364152', width: 12, height: 12 }} />}
//           defaultEndIcon={<CloseIcon className="close" style={{ border: '1px solid #ccc', width: 12, height: 12 }} />}
//           sx={{ overflowX: 'hidden' }}
//         >
//           {data.map((item) => (
//             <StyledTreeItem
//               sx={{ margin: '5px' }}
//               key={item.nodeId}
//               nodeId={item.nodeId}
//               label={
//                 <>
//                   <span>{item.label}</span>
//                   <Checkbox size="small" />
//                 </>
//               }
//             >
//               {item.children &&
//                 item.children.map((child) => (
//                   <StyledTreeItem sx={{ margin: '5px' }} key={child.nodeId} nodeId={child.nodeId} label={child.label}>
//                     {child.children &&
//                       child.children.map((item1) => (
//                         <StyledTreeItem sx={{ margin: '5px' }} key={item1.nodeId} nodeId={item1.nodeId} label={item1.label} />
//                       ))}
//                   </StyledTreeItem>
//                 ))}
//             </StyledTreeItem>
//           ))}
//         </TreeView>
//       </Paper>
//     </Container>
//   );
// }