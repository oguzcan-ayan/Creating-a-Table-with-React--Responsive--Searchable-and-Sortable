import React from 'react';

function TableMobile({ head, body }) {
  return (
    <div className='border rounded p-4 grid divide-y gap-y-4'>
       {body.map((items, key) => (
        <section className='pt-4 first:pt-0 grid gap-y-2'>
            {items.map((item, key) => Array.isArray(item) ? (
                <div className='grid grid-cols-2 text-sm gap-x-4 text-center'>
                    {item}
                </div>
            ) : (
                <div
                className='p-1 text-sm flex flex-row items-center' 
                key={key}>
                    <h6 className='font-semibold text-xs text-gray-500'>{head[key].name}</h6>
                    <h6 className='font-semibold text-xs text-gray-500'>{head[key].email}</h6>
                    <h6 className='font-semibold text-xs text-gray-500'>{head[key].age}</h6>
                    <h6 className='font-semibold text-xs text-gray-500 mr-3'>{head[key].processes}</h6>
                {Array.isArray(item) ? (
                    <div className='flex gap-x-2.5'>
                        {item}
                    </div>
                ) : item}
                </div>
            ))}
        </section>
       ))} 

    </div>
  )
}

export default TableMobile;