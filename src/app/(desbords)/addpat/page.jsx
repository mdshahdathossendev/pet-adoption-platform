'use client';

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
    <div className="min-h-screen bg-gray-50 py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <p className="bg-orange-100 w-fit text-orange-600 font-semibold px-4 py-2 rounded-full mb-4 flex items-center gap-2 text-sm shadow-sm">
            <CirclePlusFill />
            List a pet
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Add a Pet Listing
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Fill all information carefully for better adoption experience.
          </p>
        </div>

        {/* Form */}
        <Form
          onSubmit={onSubmit}
          className="bg-white shadow-2xl rounded-3xl border border-gray-100 
          p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-6"
        >
          {/* Pet Name + Species */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            <TextField className="w-full" isRequired name="petName">
              <Label className="mb-2 font-semibold">Pet Name</Label>

              <Input
                className="bg-gray-100 rounded-xl px-3 py-2"
                placeholder="Enter pet name"
              />

              <FieldError />
            </TextField>

            <div className="w-full">
              <Label className="mb-2 font-semibold block">
                Species
              </Label>

              <select
                name="species"
                required
                className="w-full bg-gray-100 rounded-xl p-3 outline-none border focus:border-orange-400"
              >
                <option value="">Select Species</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="rabbit">Rabbit</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Breed + Age */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            <TextField className="w-full" isRequired name="breed">
              <Label className="mb-2 font-semibold">Breed</Label>

              <Input
                className="bg-gray-100 rounded-xl px-3 py-2"
                placeholder="Enter breed"
              />

              <FieldError />
            </TextField>

            <TextField className="w-full" isRequired name="age">
              <Label className="mb-2 font-semibold">Age</Label>

              <Input
                type="number"
                className="bg-gray-100 rounded-xl px-3 py-2"
                placeholder="Age in years"
              />

              <FieldError />
            </TextField>
          </div>

          {/* Image URL */}
          <TextField className="w-full" isRequired name="imageUrl">
            <Label className="mb-2 font-semibold">Image URL</Label>

            <Input
              type="url"
              className="bg-gray-100 rounded-xl px-3 py-2"
              placeholder="https://example.com/image.jpg"
            />

            <FieldError />
          </TextField>

          {/* Gender + Health */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            <div className="w-full">
              <Label className="mb-2 font-semibold block">
                Gender
              </Label>

              <select
                name="gender"
                required
                className="w-full bg-gray-100 rounded-xl p-3 outline-none border focus:border-orange-400"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>

            <TextField className="w-full" name="healthStatus">
              <Label className="mb-2 font-semibold">
                Health Status
              </Label>

              <Input
                className="bg-gray-100 rounded-xl px-3 py-2"
                placeholder="Healthy / Sick / Under Treatment"
              />

              <FieldError />
            </TextField>
          </div>

          {/* Vaccination + Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            <TextField className="w-full" name="vaccinationStatus">
              <Label className="mb-2 font-semibold">
                Vaccination Status
              </Label>

              <Input
                className="bg-gray-100 rounded-xl px-3 py-2"
                placeholder="Vaccinated / Not Vaccinated"
              />

              <FieldError />
            </TextField>

            <TextField className="w-full" isRequired name="location">
              <Label className="mb-2 font-semibold">Location</Label>

              <Input
                className="bg-gray-100 rounded-xl px-3 py-2"
                placeholder="City / Area"
              />

              <FieldError />
            </TextField>
          </div>

          {/* Fee + Email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
            <TextField className="w-full" isRequired name="adoptionFee">
              <Label className="mb-2 font-semibold">
                Adoption Fee
              </Label>

              <Input
                type="number"
                className="bg-gray-100 rounded-xl px-3 py-2"
                placeholder="BDT / USD"
              />

              <FieldError />
            </TextField>

            <TextField
              className="w-full"
              name="ownerEmail"
              isReadOnly
            >
              <Label className="mb-2 font-semibold">
                Owner Email
              </Label>

              <Input
                className="bg-gray-100 rounded-xl px-3 py-2"
                name="ownerEmail"
                value={session?.user?.email || ''}
              />

              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <TextField className="w-full" name="description">
            <Label className="mb-2 font-semibold">
              Description
            </Label>

            <Input
              className="bg-gray-100 rounded-xl px-3 py-4"
              placeholder="Write about the pet..."
            />

            <FieldError />
          </TextField>

          {/* Submit Button */}
          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 
            text-white py-6 rounded-2xl text-lg font-bold mt-4"
            type="submit"
          >
            Submit Pet
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddpatPage;