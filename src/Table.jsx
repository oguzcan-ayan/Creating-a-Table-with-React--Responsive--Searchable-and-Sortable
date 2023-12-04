import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import {  FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query';
import TableMobile from './TableMobile';

function Table({ head, body, searchable }) {

    const isMobile = useMediaQuery('(max-width: 400px)');
    const [sorting, setSorting] = useState(false);
    const [search, setSearch] = useState('');
    const filteredData = body && body.filter(
        items => items.some(item => item.toString().toLocaleLowerCase('TR').includes(search.toLocaleLowerCase('TR')))
    ).sort((a, b) => {
       if(sorting?.orderBy == 'asc'){
          return a[sorting.key].toString().localeCompare(b[sorting.key]);
       }
       if(sorting?.orderBy == 'desc'){
          return b[sorting.key].toString().localeCompare(a[sorting.key]);
       }
    })
    /* const handleClick = () => {

            if(sorting?.key == key){

          setSorting({
            key,
            orderBy: sorting.orderBy == 'asc' ? 'desc' : 'asc'
          })
        }  
            else {
            
          setSorting({
            key, 
            orderBy: 'asc'
            })
        }
    }; */

    if(!body || body?.length == 0){
        return(
            <div className='p-4 rounded bg-yellow-100 text-yellow-700 text-sm'>Gösterilecek veri bulunamadı...</div>
        )
    }        

  return (
    <>
    {searchable && (
        <div className='mb-4 relative flex gap-x-2'>
             <IoSearchSharp className='w-7 h-7 absolute mt-8 ml-9 cursor-pointer'/> 
            <input 
            type="text" 
            id='searchbox'
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='Tablo içerisinde ara...' 
            className='h-10 border rounded w-full text-sm px-12 mb-7 ml-7 mt-6 border-gray-300 outline-none'/>
            {sorting && (
            <div 
            onClick={() => setSorting(false)} 
            className='text-sm flex items-center justify-center border border-red-600 opacity-75 rounded-md
            h-12 w-60 mt-5 ml-5 cursor-pointer whitespace-nowrap'> <MdCancel className='w-7 h-7 mr-3 
            text-red-600'/>
                Sıralamayı iptal et 
            </div>
            )}
        </div>
    )}
    {isMobile && <TableMobile head={head} body={filteredData}/>}

    {!isMobile && (<div className='w-full border rounded p-4 ml-7'>
        <table className='w-full'>
            <thead>
                <tr>
                    {head.map((h, key) => (
                        <th
                        width={h.width}
                        className='text-left text-sm font-semibold text-gray-600 p-2.5 border-b bg-gray-50' 
                        key={key}>
                            {h.name}
                            {h.email}
                            {h.age}                            
                            {h.processes}
                            {h.sortable && (
                                <button onClick={ () => {
                                    
                                    if(sorting?.key == key){

                                    setSorting({
                                      key, 
                                      orderBy: sorting.orderBy == 'asc' ? 'desc' : 'asc'
                                    })
                                  }  
                                      else {
                                      
                                    setSorting({
                                      key, 
                                      orderBy: 'asc'
                                      })
                                  }}
                                }>
                                    {sorting?.key == key && (
                                        sorting?.orderBy == 'asc' ? <FaSortDown size={14}/> : <FaSortUp size={14}/>
                                    )}
                                    {sorting?.key !== key && <FaSort size={14}/>}
                                </button>
                            )}
                            </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredData && filteredData.length > 0 ? (

                filteredData && filteredData.map((items, key) => (
                        <tr
                        className='group' 
                        key={key}>
                            {items.map((item, key) => (
                                <td
                                className='p-3 text-sm group-hover:bg-gray-100 group-hover:text-blue-600' 
                                key={key}>
                                {Array.isArray(item) ? (
                                    <div className='flex gap-x-2.5'>
                                        {item}
                                    </div>
                                ) : item}
                                </td>
                            ))}
                        </tr> 
                    ))
                ) : (
                    <tr>
                        <td className='text-center text-lg text-gray-600'>Aradığınız kişi ya da kişiler bulunamadı...</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>)}
    </>
  )
}

export default Table;