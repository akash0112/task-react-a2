import React from 'react'
import BasicModal from './Modal';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <nav className="flex items-center bg-teal-500 p-6">
                <ul className="flex">
                    <li className="mr-6">
                        <a className=" font-bold font-serif text-black-500 hover:text-black-600 content-center" href="#">Task</a>
                    </li>
                </ul>
               <BasicModal handleOpen={handleOpen} handleClose={handleClose} setOpen={setOpen} open={open} />
            </nav>
        </div>
    )
}

export default Navbar