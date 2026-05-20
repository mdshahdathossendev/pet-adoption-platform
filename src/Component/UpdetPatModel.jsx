"use client";

import React from "react";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";

import { Edit } from "lucide-react";
import { router } from "better-auth/api";
import { toast } from "react-toastify";

const UpdetPatModel = ({ pet }) => {
    const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const req = await fetch(`http://localhost:8000/allpat/${pet._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await req.json()
        toast.success('Pat updeat success')
                window.location.href = "/my-listing";
  }
  return (
    <Modal>
      {/* Open Button */}
      <Button
        variant="secondary"
        className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-10 rounded-sm transition"
      >
        <Edit size={18} />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-4xl rounded-3xl">

            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>

              <Modal.Icon className="bg-orange-100 text-orange-500">
                <Envelope className="size-5" />
              </Modal.Icon>

              <div>
                <Modal.Heading className="text-2xl font-bold">
                  Update Pet Information
                </Modal.Heading>

                <p className="mt-1 text-sm text-gray-500">
                  Update your pet listing information below.
                </p>
              </div>

            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">

              <Surface
                variant="default"
                className="rounded-2xl border p-6"
              >

                <form onSubmit={onSubmit} className="flex flex-col gap-5">

                  {/* Pet Name + Species */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <TextField
                      className="w-full"
                      name="petName"
                      type="text"
                      defaultValue={pet?.petName}
                    >
                      <Label>Pet Name</Label>
                      <Input placeholder="Enter pet name" />
                    </TextField>

                    <div className="flex flex-col gap-2">
                      <Label>Species</Label>

                      <select
                        name="species"
                        defaultValue={pet?.species}
                        className="w-full border rounded-xl p-3 outline-none"
                      >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                  </div>

                  {/* Breed + Age */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <TextField
                      className="w-full"
                      name="breed"
                      type="text"
                      defaultValue={pet?.breed}
                    >
                      <Label>Breed</Label>
                      <Input placeholder="Enter breed" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="age"
                      type="number"
                      defaultValue={pet?.age}
                    >
                      <Label>Age</Label>
                      <Input placeholder="Age in years" />
                    </TextField>

                  </div>

                  {/* Image URL */}
                  <TextField
                    className="w-full"
                    name="imageUrl"
                    type="url"
                    defaultValue={pet?.imageUrl}
                  >
                    <Label>Image URL</Label>
                    <Input placeholder="https://imgbb.com/..." />
                  </TextField>

                  {/* Gender + Health */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="flex flex-col gap-2">
                      <Label>Gender</Label>

                      <select
                        name="gender"
                        defaultValue={pet?.gender}
                        className="w-full border rounded-xl p-3 outline-none"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Unknown">Unknown</option>
                      </select>
                    </div>

                    <TextField
                      className="w-full"
                      name="healthStatus"
                      type="text"
                      defaultValue={pet?.healthStatus}
                    >
                      <Label>Health Status</Label>
                      <Input placeholder="Healthy / Sick" />
                    </TextField>

                  </div>

                  {/* Vaccination + Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <TextField
                      className="w-full"
                      name="vaccinationStatus"
                      type="text"
                      defaultValue={pet?.vaccinationStatus}
                    >
                      <Label>Vaccination Status</Label>
                      <Input placeholder="Vaccinated / Not Vaccinated" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="location"
                      type="text"
                      defaultValue={pet?.location}
                    >
                      <Label>Location</Label>
                      <Input placeholder="City / Area" />
                    </TextField>

                  </div>

                  {/* Fee + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <TextField
                      className="w-full"
                      name="adoptionFee"
                      type="number"
                      defaultValue={pet?.adoptionFee}
                    >
                      <Label>Adoption Fee</Label>
                      <Input placeholder="BDT" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="ownerEmail"
                      type="email"
                      defaultValue={pet?.ownerEmail}
                    >
                      <Label>Owner Email</Label>
                      <Input readOnly />
                    </TextField>

                  </div>

                  {/* Description */}
                  <TextField
                    className="w-full"
                    name="description"
                    type="text"
                    defaultValue={pet?.description}
                  >
                    <Label>Description</Label>
                    <Input placeholder="Write about the pet..." />
                  </TextField>
                   <div>
                     <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button type="submit" className="bg-orange-500 text-white">
                Update Pet
              </Button>
                   </div>
                </form>

              </Surface>

            </Modal.Body>

            {/* Footer */}
            <Modal.Footer>

              

            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdetPatModel;