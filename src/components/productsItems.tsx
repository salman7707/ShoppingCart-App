"use client";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector,useDispatch } from "react-redux";
import Product from "./types/product";
// import { AppRootState } from "@/lib/store/store";
import State from "./types/state";
import { addToCart } from "@/lib/store/features/cartslice/cartslice";

export default function App() {
  const item = useSelector((state:{allcart:State}) => state.allcart.productItem);
  const dispatch = useDispatch();
  return (
    <div className="m-3">
      <MDBContainer>
        <MDBRow>
          {item.map((data: Product, key: number) => (
            <MDBCol key={key} size="md">
              <MDBCard>
                <MDBCardImage src={data.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{data.title}</MDBCardTitle>
                  <MDBCardText>{data.price}</MDBCardText>
                  <MDBBtn onClick={()=>dispatch(addToCart(data))}>Add To Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
