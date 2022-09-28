import React from 'react'
import * as RiIcons from "react-icons/ri";
import { TeachersColumns } from '../LocalData/teachersColumn';
import { TeachersData } from '../LocalData/teachersData';

export function TeachersTable() {
    return (
        <div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-5 ml-10">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for teachers"/>
            </div>
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg mx-10 mt-5">
                <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            {TeachersColumns.map((column,index) => (
                                <th scope="col" class="py-3 px-6">
                                    <div key={index} class="flex items-center">
                                        {column.id}
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                    </div>
                                </th>
                            ))}
                                <th scope="col" class="py-3 px-5">Edit
                                    <span class="sr-only"></span>
                                </th>
                            </tr>
                    </thead>
                    <tbody>
                    {TeachersData.map((teacher,index) => (
                        <tr key={index} class="bg-white border-b">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {teacher.t_id}
                            </th>
                            <td class="py-4 px-6">
                                {teacher.t_name}
                            </td>
                            <td class="py-4 px-6">
                                {teacher.t_mail}
                            </td>
                            <td class="py-4 px-6">
                                {teacher.t_dept}
                            </td>
                            <td class="py-4 px-6">
                                {teacher.t_phone}
                            </td>
                            <td class="py-4 px-6">
                                {teacher.t_desc}
                            </td>
                            <td class="py-4 px-6 text-right">
                                <a href="#" class="font-medium text-blue-600"><RiIcons.RiShareBoxLine/></a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )}