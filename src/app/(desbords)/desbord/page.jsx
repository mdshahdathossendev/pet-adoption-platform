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
    <div
      className="
        container mx-auto
        px-4 sm:px-6 lg:px-8
        py-6
        md:ml-72
      "
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold">
        My Adoption{' '}
        <span className="text-orange-500">Request</span>
      </h2>

      <p className="mt-2 text-gray-500 text-sm sm:text-base">
        Track the status of all your adoption requests here
      </p>

      {/* Table */}
      <div className="w-full overflow-x-auto mt-6">
        <Table className="min-w-[700px]">
          <Table.ScrollContainer>
            <Table.Content
              aria-label="Adoption request table"
            >
              <Table.Header>
                <Table.Column isRowHeader>
                  Pet Name
                </Table.Column>

                <Table.Column>
                  Pickup Date
                </Table.Column>

                <Table.Column>Status</Table.Column>

                <Table.Column className="text-center">
                  Action
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {datas.length ? (
                  datas.map((data) => (
                    <Table.Row key={data._id}>
                      <Table.Cell>
                        {data.name}
                      </Table.Cell>

                      <Table.Cell>
                        {data.pikUpdate}
                      </Table.Cell>

                      <Table.Cell>
                        <span
                          className={`
                            px-3 py-1 rounded-full text-sm font-medium
                            ${
                              data.status === 'Approved'
                                ? 'bg-green-100 text-green-700'
                                : data.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                            }
                          `}
                        >
                          {data.status}
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                          <DelethandeListing id={data._id} />

                          <Button className="rounded-md bg-orange-600 text-white">
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
                      className="text-center"
                    >
                      <div className="py-16 flex flex-col items-center justify-center">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">
                          No Data Found
                        </h1>

                        <p className="text-gray-500 text-sm sm:text-base">
                          Sorry, there is nothing to show right now.
                        </p>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default page;