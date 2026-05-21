import DelethandeListing from '@/Component/DelethandeListing';
import { auth } from '@/lib/auth';
import { Button, Table } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const id = user?.id;

  const res = await fetch(
    `https://pet-server-nu.vercel.app/listing/user/${id}`
  );

  const datas = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 lg:ml-72">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">
          My Adoption{' '}
          <span className="text-orange-500">Request</span>
        </h2>

        <p className="mt-2 text-gray-500">
          Track the status of all your adoption requests here.
        </p>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-md mt-8 overflow-hidden">
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <Table removeWrapper>
              <Table.Header>
                <Table.Column>Pet Name</Table.Column>
                <Table.Column>Pickup Date</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column className="text-center">
                  Action
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {datas.length ? (
                  datas.map((data) => (
                    <Table.Row key={data._id}>
                      <Table.Cell>{data.name}</Table.Cell>

                      <Table.Cell>
                        {data.pikUpdate}
                      </Table.Cell>

                      <Table.Cell>
                        <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
                          {data.status}
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                        <div className="flex justify-center gap-3">
                          <DelethandeListing id={data._id} />

                          <Button className="bg-orange-500 text-white rounded-md">
                            <Link href={`/detels/${data.deltsId}`}>
                              View
                            </Link>
                          </Button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell
                      colSpan={4}
                      className="text-center py-16"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-bold text-gray-700 mb-2">
                          No Data Found
                        </h1>

                        <p className="text-gray-500">
                          Sorry, there is nothing to show right now.
                        </p>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden p-4 space-y-4">
            {datas.length ? (
              datas.map((data) => (
                <div
                  key={data._id}
                  className="border rounded-2xl p-4 shadow-sm"
                >
                  <div className="space-y-3">
                    
                    <div>
                      <p className="text-sm text-gray-500">
                        Pet Name
                      </p>

                      <h3 className="font-semibold text-lg">
                        {data.name}
                      </h3>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Pickup Date
                      </p>

                      <p>{data.pikUpdate}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Status
                      </p>

                      <span className="inline-block mt-1 px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-600">
                        {data.status}
                      </span>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <DelethandeListing id={data._id} />

                      <Button className="w-full bg-orange-500 text-white rounded-md">
                        <Link href={`/detels/${data.deltsId}`}>
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-gray-700 mb-2">
                  No Data Found
                </h1>

                <p className="text-gray-500">
                  Sorry, there is nothing to show right now.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;