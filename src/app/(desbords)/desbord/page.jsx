
import { auth } from '@/lib/auth';
import { Table } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

const page = async() => {
     const session = await auth.api.getSession({
           headers: await headers(),
         });
        const user = session?.user;
        const id = user?.id
        const res = await fetch(`http://localhost:8000/listing/${id}`)
        const datas = await res.json();
    return (
        <div className='mx-auto container ml-75'>
       <h2 className='text-2xl font-bold'>My Adoption <span className='text-orange-500'>Request</span></h2>
       <p className='mt-2'>Tak the status of all our adoption requests here</p>
       <div className='w-4xl'>
        <Table className='mt-6 mx-w-5xl'>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Pet Name</Table.Column>
            <Table.Column>Pickup Date</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
           {
            datas.map(data => 
                <Table.Row key={data._id}>
              <Table.Cell>{data.name}</Table.Cell>
              <Table.Cell>{data.pikUpdate}</Table.Cell>
              <Table.Cell>{data.status}</Table.Cell>
              <Table.Cell>michael@acme.com</Table.Cell>
            </Table.Row>
            )
           }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
       </div>
        </div>
    );
};

export default page;