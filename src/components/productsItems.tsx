"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./types/product";
import State from "./types/state";
import { addToCart } from "@/lib/store/features/cartslice/cartslice";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/store/features/userslice/authslice";
import product from "./types/product";
import MainBtn from "../components/mainBtn"

export default function App() {
  const item = useSelector(
    (state: { allcart: State }) => state.allcart.productItem
  );

  const { userLogin } = useSelector((state: { auth: auth }) => state.auth);

  const dispatch = useDispatch();
  const addtocard = (data: product) => {
    if (userLogin) {
      dispatch(addToCart(data));
    } else {
      return alert("Please Login First");
    }
  };
  return (
    <div className="m-3 py-10">
      <h2 className="text-4xl font-semibold text-center text-black  bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent">
        Our Products
      </h2>
      <div className="flex flex-wrap">
        {item.map((data: Product, key: number) => (
          <div key={key} className="px-4 mx-auto py-4 w-[441px]">
            <Card>
              <CardHeader>
                <CardTitle className="">{data.title}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <div className="w-[400px] h-[400px] p-4">
                <img
                  src={data.img}
                  className="scale-100 transition hover:duration-700 hover:scale-105"
                />
              </div>
              <CardContent>
                <p className="pt-3 text-center text-lg">{data.price}</p>
              </CardContent>
              <CardFooter>
                
                <MainBtn
                  backgroundColor="bg-gradient-to-l  from-blue-400 to-blue-800 hover:gb-gradient-to-r hover:from-blue-800 hover:to-blue-400 "
                  color="text-white"
                  paddingSmall
                  fontSize="large"
                  rounded
                  width="w-full"
                  transitionEffects=" transition-transform duration-500 hover:scale-105"
                  handleClick={() => addtocard(data)}
                >
                  Click Me
                </MainBtn>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
