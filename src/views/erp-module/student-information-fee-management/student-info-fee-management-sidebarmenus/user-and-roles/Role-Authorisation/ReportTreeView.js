import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import { alpha, styled } from '@mui/material/styles';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import { useSpring, animated } from '@react-spring/web';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

// Transition component for animated Collapse
function TransitionComponent(props) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

// Custom TreeItem component
const CustomTreeItem = React.forwardRef((props, ref) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />
));

// Styled TreeItem component with custom styles
const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

// Main CustomizedTreeView component
export default function CustomizedTreeView() {
  return (
    <Box sx={{ minHeight: 270, flexGrow: 1, maxWidth: 300 }}>
      <TreeView
        aria-label="customized"
        defaultExpanded={['1']}
        defaultCollapseIcon={<RemoveIcon style={{ border:'1px solid #364152',width: 12, height: 12}} />}
        defaultExpandIcon={<AddIcon style={{ border:'1px solid #364152', width: 12, height: 12 }}/>}
        defaultEndIcon={<CloseIcon className="close" style={{ border:'1px solid #ccc', width: 12, height: 12 }}  />}
        sx={{ overflowX: 'hidden' }}
      >
        <StyledTreeItem nodeId="1" label="Main">
          <StyledTreeItem nodeId="2" label="Hello" />
          <StyledTreeItem nodeId="3" label="Subtree with children">
            <StyledTreeItem nodeId="6" label="Hello" />
            <StyledTreeItem nodeId="7" label="Sub-subtree with children">
              <StyledTreeItem nodeId="9" label="Child 1" />
              <StyledTreeItem nodeId="10" label="Child 2" />
              <StyledTreeItem nodeId="11" label="Child 3" />
            </StyledTreeItem>
            <StyledTreeItem nodeId="8" label="Hello" />
          </StyledTreeItem>
          <StyledTreeItem nodeId="4" label="World" />
          <StyledTreeItem nodeId="5" label="Something something" />
        </StyledTreeItem>
      </TreeView>
    </Box>
  );
}







// import React from 'react';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import { alpha, styled } from '@mui/material/styles';
// import { TreeView } from '@mui/x-tree-view/TreeView';
// import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
// import { useSpring, animated } from '@react-spring/web';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import CloseIcon from '@mui/icons-material/Close';

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
//     <Box sx={{ minHeight: 270, flexGrow: 1, maxWidth: 300 }}>
//       <TreeView
//         aria-label="customized"
//         defaultExpanded={['1']}
//         defaultCollapseIcon={<RemoveIcon style={{ border: '1px solid #364152', width: 12, height: 12 }} />}
//         defaultExpandIcon={<AddIcon style={{ border: '1px solid #364152', width: 12, height: 12 }} />}
//         defaultEndIcon={<CloseIcon className="close" style={{ border: '1px solid #ccc', width: 12, height: 12 }} />}
//         sx={{ overflowX: 'hidden' }}
//       >
//         {data.map((item) => (
//           <StyledTreeItem key={item.nodeId} nodeId={item.nodeId} label={item.label}>
//             {item.children &&
//               item.children.map((child) => (
//                 <StyledTreeItem key={child.nodeId} nodeId={child.nodeId} label={child.label}>
//                   {child.children &&
//                     child.children.map((item1) => <StyledTreeItem key={item1.nodeId} nodeId={item1.nodeId} label={item1.label} />)}
//                 </StyledTreeItem>
//               ))}
//           </StyledTreeItem>
//         ))}
//       </TreeView>
//     </Box>
//   );
// }
