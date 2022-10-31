import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
const Home = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + 'getall').then((res) => setdata(res.data))
    }, [data])
    const handleDelete = () => {
        axios.delete(process.env.REACT_APP_API_URL + 'delete')
    }
    return (
        <div>
            <table className="table-fixed w-full">
                <thead>
                    <tr className='bg-gray-500'>
                        <th className="w-1/2 px-4 py-2">ID</th>
                        <th className="w-1/2 px-4 py-2">Task</th>
                        <th className="w-1/4 px-4 py-2">Status</th>
                        <th className="w-1/4 px-4 py-2">Delete</th>
                    </tr>
                </thead>
                {data && data?.map((item, index) => (
                    <tbody key={index}>
                        <tr className="bg-gray-100">
                        <td className="border px-4 py-2">{index+1}</td>
                            <td className="border px-4 py-2">{item.task}</td>
                            <td className="border px-4 py-2">{item.status}</td>
                            <td><button className=' rounded-md border px-4 py-2 bg-red-600' onClick={handleDelete}>Delete</button></td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default Home