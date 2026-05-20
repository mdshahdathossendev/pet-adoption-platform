'use client'
import { Button } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const DelethandeListing = ({id}) => {
     const handelDelte = async(id)=>{
                const res = await fetch(`http://localhost:8000/listing/${id}`, {
                    method: 'DELETE'
                })
                toast.error('Delete pat success');
                window.location.href='/desbord'
            }
    return (
        <div>
            <Button onClick={()=>handelDelte(id)} className={'w-full rounded-sm bg-red-600'}>Cancel</Button>
        </div>
    );
};

export default DelethandeListing;