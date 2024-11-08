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
import MainBtn from "../components/mainBtn";

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
      <h2 className="text-4xl font-semibold text-center text-black  bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent" 
      data-aos="fade-down"
      data-aos-duration="1000"
      >
        Our Products
      </h2>
      <div className="flex flex-wrap">
        {item.map((data: Product, key: number) => (
          <div key={key}   className="px-4 mx-auto py-4 w-[441px]">
            <Card data-aos="zoom-in"
             data-aos-duration="650"
             >
              <CardHeader>
                <CardTitle className="">{data.title}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <div className="w-[400px] h-[400px] p-4">
                <img
                  src={data.img}
                  className="scale-100 transition hover:duration-100 hover:scale-105"
                />
              </div>
              <CardContent>
                <p className="pt-3 text-center text-lg">{data.price}</p>
              </CardContent>
              <CardFooter>
                <MainBtn
                  background="text-white"
                  size="large"
                  width="w-full"
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
