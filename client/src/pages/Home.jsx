import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Box } from '@mui/system';

const tableDiv = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#dedede',
    padding: '5rem',
}

const Modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: "#dedede",
    boxShadow: 24,
    p: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '30px'
  };

const Home = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [editModalInfo, setEditModalInfo] = useState({
        id: "",
        name: "",
        desc: ""
      })

    const products = [
        {
            id: '1',
            name: 'Baloon',
            desc: 'very nice baloon'
        },
        {
            id: '2',
            name: 'Football',
            desc: 'very nice football'
        },

    ]

  return (
    <div style={tableDiv}>
        <Button style={{margin: '2rem'}} variant='contained' onClick={handleOpen}>Create A New Product</Button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="center">Product ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Description</TableCell>
                    <TableCell align="center">Tools</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {products.map((item) => (
                    <TableRow
                    key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell align="center">{item.id}</TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.desc}</TableCell>
                    <TableCell align="center">
                        <Button style={{backgroundColor: "green" ,margin: '5px'}} variant='contained' onClick={()=>{
                        handleOpen2()
                        setEditModalInfo(item)
                        }}>Edit</Button>
                        <Button style={{backgroundColor: "red" ,margin: '5px'}} variant='contained'>Delete</Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={Modalstyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add A New Product
            </Typography>
            <TextField id="standard-basic" label="Product Name" variant="standard" />
            <TextField rows={4} id="standard-basic" label="Product Description" variant="standard" />
            <Button className='addnewproducttypebutton' variant='contained'>Add</Button>
          </Box>
        </Modal>

        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={Modalstyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit {editModalInfo.name}
            </Typography>
            <TextField id="standard-basic" label={editModalInfo.name} variant="standard"/>
            <TextField id="standard-basic" label={editModalInfo.desc} variant="standard" />
            <Button className='addnewproducttypebutton' variant='contained'>Submit Edit</Button>
          </Box>
        </Modal>
    </div>
  )
}

export default Home