"use client";
import { useDispatch, useSelector } from "react-redux";
import state from "./types/state";
import { useEffect } from "react";
import { getCartTotal } from "@/lib/store/features/cartslice/cartslice";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth, clearCredentials } from "@/lib/store/features/userslice/authslice";
import { useRouter } from "next/navigation";

export default function App() {
  const Router = useRouter();
  const { totalQuantity, cart } = useSelector(
    (state: { allcart: state }) => state.allcart
  );
  const { usercredentials, userLogin } = useSelector(
    (state: { auth: auth }) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <div className="w-full h-16 bg-gradient-to-l from-blue-400 to-blue-900 px-6 flex items-center">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-white">
            <Link href={"/"}>My Shop</Link>
          </h2>
        </div>
        <div>
          {!userLogin && (
            <Link href={"/login"}>
              <Button variant="mine" size="mine">
                Login
              </Button>
            </Link>
          )}
          {userLogin && (
            <div className="flex items-center space-x-2 justify-between">
              <h3 className="text-white">Welcome, {usercredentials.email}</h3>
              <Button variant="mine" size="mine" className="" onClick={()=>dispatch(clearCredentials())}>
                Logout
              </Button>
              <Button variant="mine" size="mine">
                Account
              </Button>
              <Button variant="cartbtn" size="mine" onClick={()=>Router.push("/cart")}>
                Cart({totalQuantity})
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
