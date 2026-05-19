'use client'
import { authClient } from "@/lib/auth-client";
import {Check, GeoPolygons} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

const singUpPage = () => {
     const [password, setPassword] = useState("")

    const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const {data, error} = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.imageUrl,
       

    })
    console.log(data, error)
  };
  const handelGoogle = async() => {
    const data = await authClient.signIn.social({
      provider: 'google'
    });
  }
    return (
         <div className="bg-white p-4 shadow-xl border-2 mt-16 rounded-xl w-fit mx-auto mb-8 ">
            <h2 className="text-2xl text-center mx-auto font-bold">Create your account</h2>
            <p className="text-center mt-2 opacity-45 ">Start your adoption journey today</p>
            <Button  onClick={handelGoogle} className={'w-full mt-4 bg-gray-200 text-black rounded-sm'}><GeoPolygons></GeoPolygons>  Continue with Google</Button>
            <p className="text-center mt-3">or register in with email</p>
            <Form className="flex w-96 flex-col gap-4 mx-auto my-auto mt-6 " onSubmit={onSubmit}>

  {/* Full Name */}
  <TextField isRequired name="name" type="text">
    <Label>Full Name</Label>
    <Input className="bg-gray-200 shadow-none rounded-sm" placeholder="Enter Your Name" />
    <FieldError />
  </TextField>

  {/* Image URL */}
  <TextField isRequired name="imageUrl" type="url">
    <Label>Image URL</Label>
    <Input className="bg-gray-200 shadow-none rounded-sm" placeholder="Enter Your Image URL" />
    <FieldError />
  </TextField>

  {/* Email */}
  <TextField
    isRequired
    name="email"
    type="email"
    validate={(value) => {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return "Please enter a valid email address";
      }
      return null;
    }}
  >
    <Label>Email Address</Label>
    <Input className="bg-gray-200 shadow-none rounded-sm" placeholder="john@example.com" />
    <FieldError />
  </TextField>

  {/* Password */}
   <TextField
        isRequired
        minLength={8}
        name="password"
      >
        <Label>Password</Label>

        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-200 shadow-none rounded-sm"
          placeholder="Enter your password"
        />

        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>

        <FieldError />
      </TextField>

      {/* Confirm Password */}
      <TextField
        isRequired
        name="confirmPassword"
        validate={(value) => {

          if (value !== password) {
            return "Passwords do not match";
          }

          return null;
        }}
      >
        <Label>Confirm Password</Label>

        <Input
          type="password"
          className="bg-gray-200 shadow-none rounded-sm"
          placeholder="Re-enter your password"
        />

        <FieldError />
      </TextField>


  {/* Submit */}
  <div>
    <Button className="w-full rounded-sm bg-orange-500" type="submit">
      <Check />
      Create Account
    </Button>
  </div>

</Form>
    <p className="text-center mt-2">Already have an account? <span className="text-red-600"><Link href={'/login'}>Sing in</Link></span></p>
         </div>
    );
};
// hmdshahdat121@gmail.com
export default singUpPage;