import React from 'react'

const UserTable = () => {
    return (
        <>
            <h2 className="text-yellow-300 font-bold text-3xl text-shadow">
                User List
            </h2>
            <div
                className="flex flex-col w-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border my-5 ">
                <table className="w-full text-left table-auto min-w-max overflow-scroll h-5">
                    <thead className='bg-gray-500 text-white'>
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Name
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Job
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                    Employed
                                </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    John Michael
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Manager
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    23/04/18
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Alexa Liras
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Developer
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    23/04/18
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Laurent Perrier
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Executive
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    19/09/17
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Michael Levi
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Developer
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    24/12/08
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Richard Gran
                                </p>
                            </td>
                            <td className="p-4">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Manager
                                </p>
                            </td>
                            <td className="p-4">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    04/10/21
                                </p>
                            </td>
                            <td className="p-4">
                                <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserTable


