import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormGroup, TextField } from '@mui/material';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '2%'
};

export default function BasicModal({ open, setOpen, handleClose, handleOpen }) {
    const [data, setdata] = React.useState({ task: '', status: '' })
    const handleChange = (e) => {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    }
    const handleSubmit = (e) => {
        axios.post(process.env.REACT_APP_API_URL + 'add', data)
        setdata('')
        handleClose();
    }
    return (
        <div>
            <button className=' rounded-md p-2 bg-blue-600' onClick={handleOpen}>Add Task</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className=' rounded-lg' sx={style}>
                    <FormGroup className='mt-5 gap-5'>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name='task'
                            onChange={handleChange}
                            label="Task"
                            type="text"
                            fullWidth
                            autoComplete='off'
                            variant="outlined"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name='status'
                            label="Status"
                            type="text"
                            autoComplete='off'
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                        />
                        <button className=' rounded-md p-2 bg-blue-600' onClick={handleSubmit}>Submit</button>
                    </FormGroup>
                </Box>
            </Modal>
        </div>
    );
}
