"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import state from "./types/state";
import { MdDelete } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import {
  getCartTotal,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "@/lib/store/features/cartslice/cartslice";

export default function Cartpage() {
  const { cart, totalPrice, totalQuantity } = useSelector(
    (state: { allcart: state }) => state.allcart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);
  return (
    <section className="mx-auto max-w-7xl w-full">
      <div className="flex w-full p-4 space-x-4">
        <div className="rounded-2xl bg-white w-[70%] h-auto py-4">
          <div className="border-gray-300 border-b ">
            <h5 className="text-xl px-4 py-4 font-bold text-gray-700">
              Cart - {cart.length} items
            </h5>
          </div>

          <div className="">
            {cart.map((item, key) => (
              <div
                key={key}
                className="border-gray-300 border-b py-4 w-full flex items-start justify-between"
              >
                <div className="w-[30%]">
                  <img
                    src={item.img}
                    className="w-[100%] h-[250px]"
                    alt="Blue Jeans Jacket"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 px-6 w-[70%]">
                  <div>
                    <h2 className="font-bold text-xl">{item.title}</h2>
                    <div className="py-3">
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className=" bg-blue-500 rounded-md px-3 py-2"
                        data-mdb-tooltip-init
                        title="Remove item"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        <MdDelete className="text-white text-xl" />
                      </button>
                    </div>
                  </div>

                  <div className="">
                    <div
                      className="flex items-center space-x-4 mb-4"
                      style={{ maxWidth: "300px" }}
                    >
                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="bg-blue-500 rounded-md h-10 mt-1 py-3 px-3"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        <TiMinus className="text-white" />
                      </button>

                      <div className="flex flex-col items-start">
                        <label
                          htmlFor="form1"
                          className="text-xs text-blue-500"
                        >
                          Quantity
                        </label>
                        <input
                          id="form1"
                          min="0"
                          name="quantity"
                          value={item.quantity}
                          type="number"
                          className="w-14 py-1 px-3 border border-gray-300 "
                        />
                      </div>

                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="bg-blue-500 rounded-md mt-1 h-10 px-3 py-3"
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        <FaPlus className="text-white" />
                      </button>
                    </div>
                    <p className="text-center text-gray-600">
                      <strong>{item.price}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <hr className="" />
          </div>
        </div>

        <div className="w-[30%] rounded-2xl bg-white py-4 h-[210px]">
          <div className="border-gray-300 border-b">
            <h5 className="text-xl px-4 py-4 font-bold text-gray-700">
              Summary
            </h5>
          </div>

          <div className="px-4 space-y-4 py-4">
            <ul className="">
              <li className="flex justify-between text-gray-500">
                Total Quantity
                <span className="text-gray-600">{totalQuantity}</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <div>
                  <strong className=" ">Total amount</strong>
                </div>
                <span>
                  <strong>{totalPrice}</strong>
                </span>
              </li>
            </ul>

            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className=" bg-blue-500 text-white rounded-md w-full px-3 py-2"
            >
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
