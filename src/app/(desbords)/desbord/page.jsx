
import DelethandeListing from '@/Component/DelethandeListing';
import { auth } from '@/lib/auth';
import { Button, Table } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const page = async() => {
     const session = await auth.api.getSession({
           headers: await headers(),
         });
        const user = session?.user;
        const id = user?.id
        const res = await fetch(`https://pet-server-nu.vercel.app/listing/user/${id}`)
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
            <Table.Column className={'text-center'}>Action</Table.Column>
          </Table.Header>
          <Table.Body>
           {
  datas.length ? (
    datas.map((data) => (
      <Table.Row key={data._id}>
        <Table.Cell>{data.name}</Table.Cell>
        <Table.Cell>{data.pikUpdate}</Table.Cell>
        <Table.Cell>{data.status}</Table.Cell>

        <Table.Cell className="mx-auto">
          <div className="flex gap-2">
            <DelethandeListing id={data._id} />

            <Button className="w-full rounded-sm bg-orange-600">
              <Link href={`/detels/${data.deltsId}`}>
                View
              </Link>
            </Button>
          </div>
        </Table.Cell>
      </Table.Row>
    ))
  ) : (
    <Table.Row className={'bg-transparent'}>
      <Table.Cell colSpan={4} className="text-center">
       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      
      <h1 className="text-3xl font-bold text-gray-700 mb-2">
        No Data Found
      </h1>

      <p className="text-gray-500 mb-6">
        Sorry, there is nothing to show right now.
      </p>
    </div>
      </Table.Cell>
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