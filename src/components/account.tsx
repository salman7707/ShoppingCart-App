"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { auth, editCredentials} from "@/lib/store/features/userslice/authslice";

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
    if(email !== usercredentials.email || password !== usercredentials.password){
        dispatch(editCredentials({email,password}))
        setEdit(!edit)
        return alert("Account Updated Successfully")
    }
    return alert("Please Edit SomeThing")
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
              <Button
                className="rounded-none px-4 bg-gradient-to-l from-blue-400 to-blue-900"
                onClick={handleclick}
              >
                Edit
              </Button>
            )}
            {!edit && (
              <div className="flex space-x-2">
                <Button variant="destructive" onClick={handleclick}>
                  Cancel
                </Button>
                <Button
                  className="rounded-md px-4 bg-gradient-to-l from-blue-400 to-blue-900"
                  onClick={handlesave}
                >
                  Save
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
