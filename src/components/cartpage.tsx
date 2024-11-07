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
    <section className="">
      <div className="flex w-full p-4 space-x-4">
        <div className="rounded-lg bg-white w-[50%]">
            <h5 className="text-xl px-4 py-4 font-bold text-gray-800">
              Cart - {cart.length} items
            </h5>
          <div className="">
            {cart.map((item, key) => (
              <div
                key={key}
                className="w-full flex items-start justify-between"
              >
                <div className="w-[50%]">
                    <img
                      src={item.img}
                      className="w-full h-[350px]"
                      alt="Blue Jeans Jacket"
                    />
                </div>

                <div className="flex flex-col items-center justify-start pt-8 w-[50%]">
                  <div>
                    <h2 className="font-bold text-xl">{item.title}</h2>
                  </div>
                  <div>
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className=""
                      data-mdb-tooltip-init
                      title="Remove item"
                      onClick={() => dispatch(removeItem(item.id))}
                    ><MdDelete /></button>
                  </div>

                <div className="">
                  <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className=""
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                     <TiMinus />
                    </button>

                    <div data-mdb-input-init className="form-outline">
                      <input
                        id="form1"
                        min="0"
                        name="quantity"
                        value={item.quantity}
                        type="number"
                        className=""
                      />
                      <label className="form-label" htmlFor="form1">
                        Quantity
                      </label>
                    </div>

                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className=""
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="">
                    <strong>{item.price}</strong>
                  </p>
                </div>
                
                </div>
              </div>
            ))}

            <hr className="" />
          </div>
        </div>
        <div className="w-[50%]">
          <div className="">
            <div className="">
              <h5 className="">Summary</h5>
            </div>
            <div className="">
              <ul className="">
                <li className="">
                  Total Quantity
                  <span>{totalQuantity}</span>
                </li>
                <li className="">
                  <div>
                    <strong>Total amount</strong>
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
                className=""
              >
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
