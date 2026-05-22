'use client'
import { authClient } from '@/lib/auth-client';
import { CirclePlusFill } from '@gravity-ui/icons';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

import React from 'react';
import { toast } from 'react-toastify';

const AddpatPage = () => {
  const { data: session } = authClient.useSession();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const req = await fetch('https://pet-server-nu.vercel.app/allpat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    await req.json();

    toast.success('Pet add successfully');
    window.location.href = '/my-listing';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Text */}
      <p className="bg-orange-200 w-fit text-orange-700 font-semibold px-4 py-1 rounded-full mb-3 flex items-center gap-2 text-sm">
        <CirclePlusFill />
        List a pet
      </p>

      <h1 className="text-2xl sm:text-3xl font-bold text-orange-400 mb-6">
        Add a Pet Listing
      </h1>

      <Form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 bg-white shadow-xl p-4 sm:p-6 border rounded-2xl"
      >
        {/* Pet Name + Species */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <TextField className="w-full" isRequired name="petName" type="text">
            <Label>Pet Name</Label>
            <Input
              className="bg-gray-200 rounded-sm p-2"
              placeholder="Enter pet name"
            />
            <FieldError />
          </TextField>

          <TextField className="w-full" isRequired name="species">
            <Label>Species</Label>

            <select
              name="species"
              className="w-full bg-gray-200 rounded-md p-3 outline-none"
            >
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

        {/* Breed + Age */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <TextField className="w-full" isRequired name="breed" type="text">
            <Label>Breed</Label>
            <Input
              className="bg-gray-200 rounded-sm p-2"
              placeholder="Enter breed"
            />
            <FieldError />
          </TextField>

          <TextField className="w-full" isRequired name="age" type="number">
            <Label>Age</Label>
            <Input
              className="bg-gray-200 rounded-sm p-2"
              placeholder="Age in years"
            />
            <FieldError />
          </TextField>
        </div>

        {/* Image URL */}
        <TextField
          className="w-full"
          isRequired
          name="imageUrl"
          type="url"
        >
          <Label>Image URL</Label>
          <Input
            className="bg-gray-200 rounded-sm p-2"
            placeholder="https://imgbb.com/..."
          />
          <FieldError />
        </TextField>

        {/* Gender + Health */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <TextField className="w-full" isRequired name="gender">
            <Label>Gender</Label>

            <select
              name="gender"
              className="w-full bg-gray-200 rounded-md p-3 outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unknown">Unknown</option>
            </select>

            <FieldError />
          </TextField>

          <TextField className="w-full" name="healthStatus" type="text">
            <Label>Health Status</Label>
            <Input
              className="bg-gray-200 rounded-sm p-2"
              placeholder="Healthy / Sick / Under Treatment"
            />
            <FieldError />
          </TextField>
        </div>

        {/* Vaccination + Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <TextField
            className="w-full"
            name="vaccinationStatus"
            type="text"
          >
            <Label>Vaccination Status</Label>
            <Input
              className="bg-gray-200 rounded-sm p-2"
              placeholder="Vaccinated / Not Vaccinated"
            />
            <FieldError />
          </TextField>

          <TextField
            className="w-full"
            isRequired
            name="location"
            type="text"
          >
            <Label>Location</Label>
            <Input
              className="bg-gray-200 rounded-sm p-2"
              placeholder="City / Area"
            />
            <FieldError />
          </TextField>
        </div>

        {/* Adoption Fee + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <TextField
            className="w-full"
            isRequired
            name="adoptionFee"
            type="number"
          >
            <Label>Adoption Fee</Label>
            <Input
              className="bg-gray-200 rounded-sm p-2"
              placeholder="BDT / USD"
            />
            <FieldError />
          </TextField>

          <TextField
            className="w-full"
            name="ownerEmail"
            type="email"
            isReadOnly
          >
            <Label>Owner Email</Label>

            <Input
              className="bg-gray-200 rounded-sm p-2"
              name="ownerEmail"
              value={session?.user?.email || ''}
            />

            <FieldError />
          </TextField>
        </div>

        {/* Description */}
        <TextField className="w-full" name="description" type="text">
          <Label>Description</Label>

          <Input
            className="bg-gray-200 rounded-sm p-2"
            placeholder="Write about the pet..."
          />

          <FieldError />
        </TextField>

        {/* Submit */}
        <Button
          className="w-full bg-orange-500 rounded-md text-white py-3 text-base font-semibold"
          type="submit"
        >
          Submit Pet
        </Button>
      </Form>
    </div>
  );
};

export default AddpatPage;