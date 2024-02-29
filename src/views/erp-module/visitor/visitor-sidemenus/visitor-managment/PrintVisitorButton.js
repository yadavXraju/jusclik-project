import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';

const PrintVisitorButton = () => {
    return (
      <Button variant="contained" color="secondary"
        endIcon={<PrintIcon />}
        sx={{ display: 'flex', justifyContent: 'center',width:"200px"}}
      >Print</Button>
    )
  }

  export default PrintVisitorButton;