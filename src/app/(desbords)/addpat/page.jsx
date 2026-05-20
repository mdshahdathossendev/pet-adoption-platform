'use client'
import { authClient } from '@/lib/auth-client';
import { CirclePlusFill } from '@gravity-ui/icons';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { createAuthClient } from 'better-auth/react';



import React from 'react';
import { toast } from 'react-toastify';

const AddpatPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const req = await fetch('http://localhost:8000/allpat', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(userData)
    })

    const data = await req.json()
    toast.success('Pat add successfully')
    window.location.href = "/my-listing";
  }
    return (
       <div className='mr-30 mx-auto w-180 mt-8'>
        <p className='bg-orange-200 w-fit text-orange-700 font-semibold px-4 rounded-full mb-2 flex items-center gap-1 '><CirclePlusFill></CirclePlusFill> List a pad</p>
        <h1 className='text-3xl font-bold text-orange-400'>Add a Pet Listing</h1>
        <Form onSubmit={onSubmit} className="flex flex-col gap-4 mx-auto my-auto mt-6 bg-white shadow-xl p-4 border-2 rounded-xl">

  {/* Pet Name */}
  <div className='flex gap-4 justify-between w-170 mx-auto'>
    <TextField className={'w-full'} isRequired name="petName" type="text">
    <Label>Pet Name</Label>
    <Input className="bg-gray-200 rounded-sm p-2" placeholder="Enter pet name" />
    <FieldError />
  </TextField>

  {/* Species Dropdown */}
  <TextField className={'w-full'}  isRequired name="species">
    <Label>Species</Label>
    <select className="w-full bg-gray-200 rounded-sm p-2">
      <option value="">Select Species</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="bird">Bird</option>
      <option value="rabbit">Rabbit</option>
      <option value="other">Other</option>
    </select>
    <FieldError />
  </TextField>
  </div>

  {/* Breed */}
  <div className='flex gap-4 justify-between w-170 mx-auto'>
    <TextField className={'w-full'} isRequired name="breed" type="text">
    <Label>Breed</Label>
    <Input className="bg-gray-200 rounded-sm p-2" placeholder="Enter breed" />
    <FieldError />
  </TextField>

  {/* Age */}
  <TextField className={'w-full'} isRequired name="age" type="number">
    <Label>Age</Label>
    <Input className="bg-gray-200 rounded-sm p-2" placeholder="Age in years" />
    <FieldError />
  </TextField>
  </div>
        <TextField className={'w-170 mx-auto'} isRequired name="imageUrl" type="url">
    <Label>Image URL</Label>
    <Input className="bg-gray-200 rounded-sm p-2" placeholder="https://imgbb.com/..." />
    <FieldError />
  </TextField>
  {/* Gender Dropdown */}
 <div className='flex gap-4 justify-between w-170 mx-auto'>
     <TextField className={'w-full'} isRequired name="gender">
    <Label>Gender</Label>
    <select className="w-full bg-gray-200 rounded-sm p-2">
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="unknown">Unknown</option>
    </select>
    <FieldError />
  </TextField>

  {/* Image URL */}
  

  {/* Health Status */}
  <TextField className={'w-full'} name="healthStatus" type="text">
    <Label>Health Status</Label>
    <Input className="bg-gray-200 rounded-sm p-2" placeholder="Healthy / Sick / Under Treatment" />
    <FieldError />
  </TextField>

 </div>
  {/* Vaccination Status */}
  <div className='flex gap-4 justify-between w-170 mx-auto'>
    <TextField className={'w-full'} name="vaccinationStatus" type="text">
    <Label>Vaccination Status</Label>
    <Input className="bg-gray-200 rounded-sm p-2" placeholder="Vaccinated / Not Vaccinated" />
    <FieldError />
  </TextField>

  {/* Location */}
  <TextField className={'w-full'} isRequired name="location" type="text">
    <Label>Location</Label>
    <Input className="bg-gray-200 rounded-sm p-2" placeholder="City / Area" />
    <FieldError />
  </TextField>
  </div>

  {/* Adoption Fee */}
 <div className='flex gap-4 justify-between w-170 mx-auto'>
     <TextField className={'w-full'} isRequired name="adoptionFee" type="number">
    <Label>Adoption Fee</Label>
    <Input className="bg-gray-200 rounded-sm p-2" placeholder="BDT / USD" />
    <FieldError />
  </TextField>
        <TextField className={'w-full'} name="ownerEmail" type="email" isReadOnly>
    <Label>Owner Email</Label>
    <Input
      className="bg-gray-200 rounded-sm p-2"
      value={session?.user?.email}
    />
    <FieldError />
  </TextField>
 </div>
  {/* Description */}
  <TextField className={'w-170 mx-auto'} name="description" type="text">
    <Label>Description</Label>
    <Input className="bg-gray-200 rounded-sm p-2" placeholder="Write about the pet..." />
    <FieldError />
  </TextField>

  {/* Owner Email (Read Only) */}
  

  {/* Submit */}
  <Button className="w-170 mx-auto bg-orange-500 rounded-sm text-white" type="submit">
    Submit Pet
  </Button>

</Form>
       </div>
    );
};

export default AddpatPage;