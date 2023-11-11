import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const notFound = () => {
  return (
    <div className=" text-center my-10">
      <h1 className="text-4xl mb-4">We hit a brick wall.</h1>
      <p className="mb-4">
        This page does not exsit, please press the button to go to home.
      </p>
      <Link href="/">
        <Button>Go home</Button>
      </Link>
    </div>
  );
};

export default notFound;
