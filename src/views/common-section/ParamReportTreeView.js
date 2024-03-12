import React, { useState, useEffect } from 'react';
import Collapse from '@mui/material/Collapse';
import { alpha, styled } from '@mui/material/styles';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import { useSpring, animated } from '@react-spring/web';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Checkbox, Paper, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

//  =========== Transition component for animated Collapse =======
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

// ========= Custom TreeItem component =========
const CustomTreeItem = React.forwardRef((props, ref) => <TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />);

// ========== Styled TreeItem component with custom styles ==========
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

// ====== Reusable CustomizedTreeView component =============
export default function CustomizedTreeView({ data, onSelect, heading }) {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const updateCheckedItems = () => {
      let newCheckedItems = {};

      data.forEach((item) => {
        let isAllChildrenChecked = true;
        if (item.children) {
          item.children.forEach((child) => {
            if (!checkedItems[child.nodeId]) {
              isAllChildrenChecked = false;
            }
          });
          newCheckedItems[item.nodeId] = isAllChildrenChecked;
        }
      });

      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        ...newCheckedItems
      }));
    };
    updateCheckedItems();
  }, [checkedItems, data]);

  // ============= function for handlecheck of click on checkbox =========
  const handleCheck = (id) => {
    let newCheckedItems = { ...checkedItems };
  
    const checkChildren = (children) => {
      children.forEach((child) => {
        newCheckedItems[child.nodeId] = !newCheckedItems[child.nodeId];
        if (child.children) {
          checkChildren(child.children);
        }
      });
    };
  
    if (data.some((item) => item.nodeId === id && item.children)) {
      const isAllChildrenChecked = data.find((item) => item.nodeId === id).children.every((child) => newCheckedItems[child.nodeId]);
      data.find((item) => item.nodeId === id).children.forEach((child) => {
        newCheckedItems[child.nodeId] = !isAllChildrenChecked;
        if (child.children) {
          checkChildren(child.children);
        }
      });
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
      <Paper elevation={1} sx={{ p: '10px' }}>
        <Box p={1} sx={{borderBottom:'1px solid #ccc'}}>
          <Typography variant='h4'>{heading}</Typography>
        </Box>
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
                    onClick={(event) => event.stopPropagation()}
                  />
                  <span>{item.label}</span>
                </>
              }
            >
              {item.children &&
                item.children.map((child) => (
                  <StyledTreeItem
                    sx={{ margin: '5px' }}
                    key={child.nodeId}
                    nodeId={child.nodeId}
                    label={
                      <>
                        <Checkbox
                          size="small"
                          checked={checkedItems[child.nodeId] || false}
                          onChange={() => handleCheck(child.nodeId)}
                          onClick={(event) => event.stopPropagation()}
                        />
                        <span>{child.label}</span>
                      </>
                    }
                  >
                  </StyledTreeItem>
                ))}
            </StyledTreeItem>
          ))}
        </TreeView>
      </Paper>
    </Container>
  );
}