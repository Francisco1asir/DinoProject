import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddDino } from './AddDino';
import { Link, NavLink } from 'react-router-dom';
import './Modal.css'
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <FontAwesomeIcon icon={faPlus} /> */}
      <Link to='#' onClick={handleOpen}>
        <div className="btnslogin">
          <Button className='proof' variant="contained" endIcon={<AddIcon />} >
            ADD DINO</Button>
        </div>
      </Link>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Button id='btnclose' onClick={handleClose}><FontAwesomeIcon icon={faArrowLeft} /></Button> */}
            <AddDino/>
            <div className="btnmovil">
              <Button id='btnclose-movil' onClick={handleClose} variant='contained'>CLOSE</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}