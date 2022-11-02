import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Collapse, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
const Home = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + 'getall').then((res) => setdata(res.data))
    }, [data])
    const handleDelete = (item) => {
        axios.delete(process.env.REACT_APP_API_URL + `delete/${item._id}`)
    }
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <div class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full border text-center">
                                <thead class="border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            ID
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            Task
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            Status
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            Total Hours
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            Total Days
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                {data && data?.map((item, index) => (
                                    <tbody key={index}>
                                        <tr class="border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{index + 1}</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                {item.task}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                {item.status}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-l">
                                                24 hours
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-l">
                                                2 days
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap border-l">
                                                <button className=' rounded-md border px-2 mx-2 py-2 ' onClick={() => handleDelete(item)}><EditIcon /></button>
                                                <button className=' rounded-md border px-2 mx-2 py-2 ' onClick={() => handleDelete(item)}><DeleteIcon /></button>
                                                <button className=' rounded-md border px-2 mx-2 py-2 ' onClick={() => setOpen(!open)}><ExpandMoreIcon /></button>
                                            </td>
                                        </tr>
                                        <tr class="border-b">
                                            <td colspan="6">
                                                <Collapse in={open} timeout="auto" unmountOnExit>
                                                    <div>
                                                        <div class="flex flex-col">
                                                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                                    <div class="overflow-hidden">
                                                                        <table class="min-w-full">
                                                                            <tbody>
                                                                                <tr class="bg-gray-100 border-b">
                                                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">startdate</td>
                                                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                                        Mark
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Home