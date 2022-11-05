import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const Home = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + 'getall').then((res) => setdata(res.data))
    }, [data])
    const handleDelete = (item) => {
        axios.delete(process.env.REACT_APP_API_URL + `delete/${item._id}`)
    }
    const handleEdit = (item) => {
        axios.delete(process.env.REACT_APP_API_URL + `updatebyid/${item._id}`)
    }
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
                                            Related
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
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                health
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-l">
                                                24 hours
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-l">
                                                2 days
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap border-l">
                                                <button className=' rounded-md border px-2 mx-2 py-2 ' onClick={() => handleEdit(item)}><EditIcon /></button>
                                                <button className=' rounded-md border px-2 mx-2 py-2 ' onClick={() => handleDelete(item)}><DeleteIcon /></button>
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