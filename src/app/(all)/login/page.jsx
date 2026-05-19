'use client'
import { authClient } from "@/lib/auth-client";
import {Check, GeoPolygons} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";

const LoginPage = () => {
    const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
        const {data, error} = await authClient.signIn.email({
          email: userData.email,
          password: userData.password,
          callbackURL: "/",
        })
  };
  const handelGoogle = async() => {
      const data = await authClient.signIn.social({
        provider: 'google'
      });
    };
    return (
         <div className="bg-white p-4 shadow-xl border-2 mt-16 rounded-xl w-fit mx-auto mb-8 ">
            <h2 className="text-2xl text-center mx-auto font-bold">Welcome back!</h2>
            <p className="text-center mt-2 opacity-45 ">Sign in to contiune PetAdoption</p>
            <Button onClick={handelGoogle} className={'w-full mt-4 bg-gray-200 text-black rounded-sm'}><GeoPolygons></GeoPolygons>  Continue with Google</Button>
            <p className="text-center mt-3">or sing in with email</p>
            <Form className="flex w-96 flex-col gap-4 mx-auto my-auto mt-6 " onSubmit={onSubmit}>
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
        <Input className={'bg-gray-200 shadow-none rounded-sm'}  placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input className={'bg-gray-200 shadow-none rounded-sm'} placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="">
        <Button className={'w-full rounded-sm bg-orange-500'} type="submit">
          <Check />
          Submit
        </Button>
      </div>
    </Form>
    <p className="text-center mt-2">Don't an account? <span className="text-red-600"><Link href={'/singUp'}>Crate one free</Link></span></p>
         </div>
    );
};

export default LoginPage;