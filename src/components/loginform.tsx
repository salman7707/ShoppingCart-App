"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/lib/store/features/userslice/authslice";
import { useRouter } from "next/navigation";

export default function loginform() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setemail] = useState("salman@gmail.com");
  const [password, setpassword] = useState("123456");
  function LoginData() {
    if ((password || email) == "") {
      return alert("Credentials required");
    }
    dispatch(setCredentials({ email, password }));

    router.push("/")
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col p-6 items-center  justify-center w-full bg-white max-w-96">
        <h2 className="text-3xl font-semibold item-center">Welcome Back</h2>
        <div className="py-6 w-full">
          <div className="w-full flex items-start mb-2">
            <Label className="text-lg text-gray-600">Email</Label>
          </div>
          <Input
            type="text"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <div className="w-full flex items-start mb-2">
            <Label className="text-lg text-gray-600">Password</Label>
          </div>
          <Input
            type="text"
            placeholder="....."
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <div className="py-3">
            <Button className="w-full" onClick={LoginData}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
