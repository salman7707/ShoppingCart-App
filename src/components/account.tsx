"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import {
  auth,
  editCredentials,
} from "@/lib/store/features/userslice/authslice";
import MainBtn from "../components/mainBtn";

export default function Loginform() {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(true);
  const { usercredentials } = useSelector(
    (state: { auth: auth }) => state.auth
  );
  const [email, setemail] = useState(usercredentials.email);
  const [password, setpassword] = useState(usercredentials.password);
  const handleclick = () => {
    setEdit(!edit);
  };
  const handlesave = () => {
    if (
      email !== usercredentials.email ||
      password !== usercredentials.password
    ) {
      dispatch(editCredentials({ email, password }));
      setEdit(!edit);
      return alert("Account Updated Successfully");
    }
    return alert("Please Edit SomeThing");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 ">
      <div className="flex flex-col p-4 items-center rounded-2xl zoom-in-0 hover:zoom-in-105  justify-center w-full bg-white max-w-xl">
        <div className="bg-gradient-to-l from-blue-400 to-blue-900 py-10 w-full">
          <h2 className="text-3xl font-semibold text-white text-center">
            My Account
          </h2>
        </div>
        <div className=" p-6 w-full">
          <div className="w-full flex items-start mb-2">
            <Label className="text-lg text-gray-600">Email</Label>
          </div>
          <Input
            type="text"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            readOnly={edit}
          />
          <div className="w-full flex items-start mb-2">
            <Label className="text-lg text-gray-600">Password</Label>
          </div>
          <Input
            type="text"
            placeholder="....."
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            readOnly={edit}
          />
          <div className="py-3 flex items-end justify-end mt-2">
            {edit && (
              <MainBtn
                handleClick={handleclick}
                backgroundColor="bg-gradient-to-l from-blue-400 to-blue-900"
                fontSize="regular"
                rounded
              >
                Edit
              </MainBtn>
            )}
            {!edit && (
              <div className="flex space-x-2">
                <MainBtn
                  handleClick={handleclick}
                  backgroundColor="bg-red-600 hover:bg-red-800"
                  fontSize="regular"
                  rounded
                >
                  Save
                </MainBtn>
                <MainBtn
                  handleClick={handlesave}
                  backgroundColor="bg-gradient-to-l from-blue-400 to-blue-900"
                  fontSize="regular"
                  rounded
                >
                  Save
                </MainBtn>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
