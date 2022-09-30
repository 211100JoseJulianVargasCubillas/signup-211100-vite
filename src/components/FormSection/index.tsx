import React, { useState } from "react";
import clsx from "clsx";
import { Button } from "../widgets";
import Form from "./Form";

const FormSection = (): JSX.Element => {
  return (
    <section className="w-full md:w-2/5 md:max-w-135 flex flex-col">
      <Button
        type="button"
        className={clsx(
          "mb-6 bg-purple-default shadow-solid rounded-lg font-normal text-white",
          "flex justify-center items-center",
          "flex-col space-x-0",
          "md:flex-row md:space-x-2"
        )}
      >
        <p>
          <span className="font-medium">Registrate y obtendras</span> un 
        </p>
        <p>tarjetero</p>
      </Button>
      <Form />
    </section>
  );
};

export default FormSection;
