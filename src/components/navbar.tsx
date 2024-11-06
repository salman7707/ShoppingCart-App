"use client";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import state from "./types/state";
import { useEffect } from "react";
import { getCartTotal } from "@/lib/store/features/cartslice/cartslice";

export default function App() {
  const { totalQuantity,cart } = useSelector( (state:{allcart:state}) => state.allcart )
  const dispatch = useDispatch()
  useEffect( ()=>{
       dispatch(getCartTotal())
  },[cart] )
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          {" "}
          <Link href={"/"}>All Products</Link>{" "}
        </span>
        <Link href={"/cart"}>
          <MDBBtn color="dark">cart({totalQuantity})</MDBBtn>
        </Link>
      </MDBContainer>
    </MDBNavbar>
  );
}
